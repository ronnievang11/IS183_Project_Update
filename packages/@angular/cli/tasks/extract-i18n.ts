import * as webpack from 'webpack';
import * as path from 'path';
import * as rimraf from 'rimraf';

const Task = require('../ember-cli/lib/models/task');

import {XI18nWebpackConfig} from '../models/webpack-xi18n-config';
import {getAppFromConfig} from '../utilities/app-utils';

export const Extracti18nTask = Task.extend({
  run: function (runTaskOptions: any) {

    const project = this.project;

    const appConfig = getAppFromConfig(runTaskOptions.app);

    const buildDir = '.tmp';
    const genDir = runTaskOptions.outputPath || appConfig.root;

    const config = new XI18nWebpackConfig({
      genDir,
      buildDir,
      i18nFormat: runTaskOptions.i18nFormat,
      locale: runTaskOptions.locale,
      outFile: runTaskOptions.outFile,
      verbose: runTaskOptions.verbose,
      progress: runTaskOptions.progress,
      app: runTaskOptions.app,
    }, appConfig).buildConfig();

    const webpackCompiler = webpack(config);

    return new Promise((resolve, reject) => {
      const callback: webpack.compiler.CompilerCallback = (err, stats) => {
        if (err) {
          return reject(err);
        }

        if (stats.hasErrors()) {
          reject();
        } else {
          resolve();
        }
      };

      webpackCompiler.run(callback);
    })
      .then(() => {
        // Deletes temporary build folder
        rimraf.sync(path.resolve(project.root, buildDir));
      })
      .catch((err: Error) => {
        if (err) {
          this.ui.writeError('\nAn error occured during the i18n extraction:\n'
            + ((err && err.stack) || err));
        }
      });
  }
});
