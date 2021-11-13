const { defaultPrompts } = require('../constants');

module.exports = {
    description: 'Typescript component',
    prompts: defaultPrompts,
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/{{ pascalCase name }}/`,
            templateFiles: 'plop-templates/component/**/*.hbs',
            base: 'plop-templates/component'
        }
    ]
};
