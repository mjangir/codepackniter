#!/usr/bin/env node
const path          = require('path');
const argv          = require('minimist')(process.argv.slice(2));
const chalk         = require('chalk');
const nodePlop      = require('node-plop');
const fs            = require('fs');
const help          = require('./help');
const globalPkg     = require('./package.json');

const MODULE_ROOT   = __dirname;

// No argument provided
if (argv._.length === 0 ||
    (!argv.version && !argv.v && !argv.make && argv._[0] !== 'make')
) {
  help.show();
}

if (argv.version || argv.v) {
  console.log(globalPkg.version)
}

if (argv.make || argv._[0] === 'make') {
  const plop = nodePlop(path.join(__dirname, 'config.js'));
  const builder = plop.getGenerator('codepackniter');
  builder.runPrompts()
  .then(builder.runActions)
  .then(function (result) {
    result.changes.forEach(function(line) {
      console.log(chalk.green('[SUCCESS]'), line.type, line.path);
    });
    result.failures.forEach(function (line) {
      const logs = [chalk.red('[FAILED]')];
      if (line.type) { 
        logs.push(line.type);
      }
      if (line.path) {
        logs.push(line.path);
      }

      const error = line.error || line.message;
      logs.push(chalk.red(error));

      console.log.apply(console, logs);
    });
    const cmd = 'npm install';
    const spawn = require('cross-spawn');
    const install = spawn.sync('npm', ['install'], { stdio: 'inherit' });
    console.log(chalk.green('All dependencies installed successfully'));
    const dev = spawn.sync('npm', ['run', 'dev'], { stdio: 'inherit' });
    console.log(chalk.green('Setup completed! Follow README.MD now.'));
  })
  .catch(function (err) {
    console.error(chalk.red('[ERROR]'), err.message);
    process.exit(1);
  });;
}