const { defaultPrompts } = require('../constants');

module.exports = {
    description: 'Typescript context provider',
    prompts: defaultPrompts,
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/{{ pascalCase name }}Provider/`,
            templateFiles: 'plop-templates/context/**/*.hbs',
            base: 'plop-templates/context'
        }
    ]
};
