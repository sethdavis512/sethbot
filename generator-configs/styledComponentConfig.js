const { defaultPrompts } = require('../constants');

module.exports = {
    description: 'Typescript styled component',
    prompts: defaultPrompts,
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/{{ pascalCase name }}/`,
            templateFiles: 'plop-templates/styled-component/**/*.hbs',
            base: 'plop-templates/styled-component'
        }
    ]
};
