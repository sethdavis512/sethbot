const shell = require('shelljs');
const kebabCase = require('lodash/kebabCase');

module.exports = function (answers, config) {
    const projectName = kebabCase(answers.name);

    const command = `npm_config_yes=true npx create-react-app ${config.repoPath}/${projectName} --template typescript \
&& cd ${config.repoPath}/${projectName} \
&& npm install -D tailwindcss postcss autoprefixer \
&& npx tailwindcss init -p`;

    shell.exec(command);
};
