const { defaultPrompts } = require('../constants');

module.exports = {
    description: 'Typescript context provider using localStorage',
    prompts: defaultPrompts,
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/{{ pascalCase name }}Provider/`,
            templateFiles: 'plop-templates/smart-context/**/*.hbs',
            base: 'plop-templates/smart-context'
        }
    ]
};
