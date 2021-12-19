const { defaultPrompts } = require('../constants');

module.exports = {
    description: 'Remix route in Typescript',
    prompts: defaultPrompts.concat([
        {
            type: 'confirm',
            name: 'hasLoader',
            message: 'Loader'
        },
        {
            type: 'confirm',
            name: 'hasAction',
            message: 'Action'
        },
        {
            type: 'confirm',
            name: 'hasMeta',
            message: 'Meta'
        },
        {
            type: 'confirm',
            name: 'hasLinks',
            message: 'Links'
        }
    ]),
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/{{ kebabCase name }}/`,
            templateFiles: 'plop-templates/remix-route/**/*.hbs',
            base: 'plop-templates/remix-route'
        }
    ]
};
