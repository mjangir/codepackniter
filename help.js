const chalk     = require('chalk');
const figlet    = require('figlet');
const globalPkg = require('./package.json');

module.exports.show = function() {
  console.log(
    chalk.yellow(
      figlet.textSync('Codepackniter', {
        horizontalLayout: 'full',
        font: 'standard',
      })
    )
  );
  console.log([
    '',
    chalk.bold('Version: ') + globalPkg.version,
    '',
    chalk.bold('What is Codepackniter?'),
    '  Codepackniter is small utility that sets up webpack in your existing codeigniter application',
    '',
    chalk.bold('How to use?'),
    '  Just run the command ' + chalk.blue('codepackniter make') + ' and sit back. It will setup in a few minutes',
    '',
    chalk.bold('What to do after done with command?'),
    '  Put the following script tag in your layout file and you are good to go',
    '  ' + chalk.blue('<script src="<?php echo codepackniter("js/app.js") ?>"></script>'),
    '',
    
  ].join('\n'));
}