const { defaultPrompts } = require('../constants');

module.exports = {
    description: 'Typescript hook with unit test',
    prompts: defaultPrompts,
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/`,
            templateFiles: 'plop-templates/hook/**/*.hbs',
            base: 'plop-templates/hook'
        }
    ]
};
