import * as chalk from 'chalk';
import LinkCli from '../tasks/link-cli';
import NpmInstall from '../tasks/npm-install';
import { validateProjectName } from '../utilities/validate-project-name';
import {checkYarnOrCNPM} from '../utilities/check-package-manager';
import {CliConfig} from '../models/config';

const Task = require('../ember-cli/lib/models/task');
const Promise = require('../ember-cli/lib/ext/promise');
const SilentError = require('silent-error');
const normalizeBlueprint = require('../ember-cli/lib/utilities/normalize-blueprint-option');
const GitInit = require('../tasks/git-init');


export default Task.extend({
  run: function (commandOptions: any, rawArgs: string[]) {
    if (commandOptions.dryRun) {
      commandOptions.skipInstall = true;
    }

    const installBlueprint = new this.tasks.InstallBlueprint({
      ui: this.ui,
      project: this.project
    });

    // needs an explicit check in case it's just 'undefined'
    // due to passing of options from 'new' and 'addon'
    let gitInit: any;
    if (commandOptions.skipGit === false) {
      gitInit = new GitInit({
        ui: this.ui,
        project: this.project
      });
    }

    const packageManager = CliConfig.fromGlobal().get('packageManager');

    let npmInstall: any;
    if (!commandOptions.skipInstall) {
      npmInstall = new NpmInstall({
        ui: this.ui,
        project: this.project,
        packageManager
      });
    }

    let linkCli: any;
    if (commandOptions.linkCli) {
      linkCli = new LinkCli({
        ui: this.ui,
        project: this.project,
        packageManager
      });
    }

    const project = this.project;
    const packageName = commandOptions.name !== '.' && commandOptions.name || project.name();

    if (!packageName) {
      const message = 'The `ng ' + this.name + '` command requires a ' +
        'package.json in current folder with name attribute or a specified name via arguments. ' +
        'For more details, use `ng help`.';

      return Promise.reject(new SilentError(message));
    }

    const blueprintOpts = {
      dryRun: commandOptions.dryRun,
      blueprint: 'ng',
      rawName: packageName,
      targetFiles: rawArgs || '',
      rawArgs: rawArgs.toString(),
      sourceDir: commandOptions.sourceDir,
      style: commandOptions.style,
      prefix: commandOptions.prefix.trim() || 'app',
      routing: commandOptions.routing,
      inlineStyle: commandOptions.inlineStyle,
      inlineTemplate: commandOptions.inlineTemplate,
      ignoredUpdateFiles: ['favicon.ico'],
      skipGit: commandOptions.skipGit,
      skipTests: commandOptions.skipTests,
      skipE2e: commandOptions.skipE2e
    };

    validateProjectName(packageName);

    blueprintOpts.blueprint = normalizeBlueprint(blueprintOpts.blueprint);

    return installBlueprint.run(blueprintOpts)
      .then(function () {
        if (commandOptions.skipGit === false) {
          return gitInit.run(commandOptions, rawArgs);
        }
      })
      .then(function () {
        if (!commandOptions.skipInstall) {
          return npmInstall.run();
        }
      })
      .then(function () {
        if (commandOptions.linkCli) {
          return linkCli.run();
        }
      })
      .then(checkYarnOrCNPM)
      .then(() => {
        this.ui.writeLine(chalk.green(`Project '${packageName}' successfully created.`));
      });
  }
});
