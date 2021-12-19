const { defaultPrompts } = require('../constants');

module.exports = {
    description: 'Typescript component with unit test',
    prompts: defaultPrompts,
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/{{ pascalCase name }}/`,
            templateFiles: 'plop-templates/component-with-test/**/*.hbs',
            base: 'plop-templates/component-with-test'
        }
    ]
};