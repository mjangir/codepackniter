const path        = require('path');
const chalk       = require('chalk');
const exec        = require('child_process').exec;
const utils       = require('./utils');
const validations = require('./validations');
const MODULE_ROOT = utils.MODULE_ROOT;
const CWD         = process.cwd();

module.exports = {
  description: 'Generate React Redux Module',
  prompts: [],
  actions: function (data) {
    const actions = [];

    if (!validations.isCodeigniter()) {
      console.log(chalk.red('Error::You must have to run this command in a valid codeigniter project!'));
      process.exit(1);
    }

    actions.push({
      type: 'add',
      path: path.join(CWD, './package.json'),
      templateFile: path.join(MODULE_ROOT, 'templates/package.json.hbs'),
      abortOnFail: true,
      skipIfExists: true,
    });

    actions.push({
      type: 'add',
      path: path.join(CWD, './webpack.mix.js'),
      templateFile: path.join(MODULE_ROOT, 'templates/webpack.mix.js.hbs'),
      abortOnFail: true,
      skipIfExists: true,
    });

    actions.push({
      type: 'add',
      path: path.join(CWD, './client/resources/js/app.js'),
      templateFile: path.join(MODULE_ROOT, 'templates/client/resources/js/app.js'),
      abortOnFail: true,
      force: true,
    });

    actions.push({
      type: 'add',
      path: path.join(CWD, './client/resources/sass/app.scss'),
      templateFile: path.join(MODULE_ROOT, 'templates/client/resources/sass/app.scss'),
      abortOnFail: true,
      skipIfExists: true,
    });

    actions.push({
      type: 'add',
      path: path.join(CWD, './application/helpers/codepackniter_helper.php'),
      templateFile: path.join(MODULE_ROOT, 'templates/codepackniter_helper.php'),
      abortOnFail: true,
      skipIfExists: true,
    });

    actions.push({
      type: 'modify',
      pattern: /(\$autoload(\s*)\[(\s*)(\'|\")(\s*)helper(\s*)(\'|\")(\s*)\]\s*=\s*array(\s*)\((.*?)[^\)]+)/g,
      path: path.join(CWD, './application/config/autoload.php'),
      templateFile: path.join(MODULE_ROOT, 'templates/autoload-helper.hbs'),
      abortOnFail: true,
    });

    return actions;
  }
}