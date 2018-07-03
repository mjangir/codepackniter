const fs    = require('fs');
const path  = require('path');

module.exports = {
  isCodeigniter: function() {
    const cwd         = process.cwd();
    const application = path.join(cwd, 'application');
    const autoload    = path.join(cwd, 'application', 'config', 'autoload.php');
    const helpers     = path.join(cwd, 'application', 'helpers');
    const system      = path.join(cwd, 'system');
    return fs.existsSync(application)
            && fs.existsSync(autoload)
            && fs.existsSync(helpers)
            && fs.existsSync(system);
  }
}