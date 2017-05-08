import { request } from '../../utils/http';
import { assetDir } from '../../utils/assets';
import { killAllProcesses } from '../../utils/process';
import { ngServe } from '../../utils/project';
import { updateJsonFile } from '../../utils/project';

export default function() {
  return Promise.resolve()
    .then(() => updateJsonFile('.angular-cli.json', configJson => {
      const app = configJson.defaults;
      app.serve = {
        ssl: true,
        sslKey: assetDir('ssl/server.key'),
        sslCert: assetDir('ssl/server.crt')
      };
    }))      
    .then(() => ngServe())
    .then(() => request('https://localhost:4200/'))
    .then(body => {
      if (!body.match(/<app-root>Loading...<\/app-root>/)) {
        throw new Error('Response does not match expected value.');
      }
    })
    .then(() => killAllProcesses(), (err) => { killAllProcesses(); throw err; });

}
