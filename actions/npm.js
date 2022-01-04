const shell = require('shelljs');

module.exports = {
    start(action, config) {
        shell.exec(`cd ${config.projectPath} && npm start`);
    }
};
