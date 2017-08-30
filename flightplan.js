/* eslint-disable */

var plan = require('flightplan');
var tmpDir = 'blog-client-' + new Date().getTime();
var user = 'drawgun';
var host = '85.143.215.239';

plan.target('production', {
  host: host,
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('Run Tests');
  local.exec('npm run test');

  local.log('Copy files to remote host');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.hostname();
  remote.exec('source ~/.nvm/nvm.sh');
  remote.exec('whoami');

  remote.exec('source ~/.nvm/nvm.sh && nvm use default');
  remote.log('Move folder to web root');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~');
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.exec('source ~/.nvm/nvm.sh && npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir);

  remote.log('Build');
  remote.exec('source ~/.nvm/nvm.sh && npm --prefix ~/' + tmpDir + ' run build');

  remote.log('Reload application');
  remote.exec('ln -snf ~/' + tmpDir + ' ~/current');
  remote.exec('source ~/.nvm/nvm.sh && (cd ~/current && pm2 restart pm2.config.js --env production)');

  remote.log('Finish');
});
