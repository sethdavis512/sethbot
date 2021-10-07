module.exports = {
    description: 'A React context provider written in Typescript',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Provider name'
        }
    ],
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/{{ pascalCase name }}Provider/`,
            templateFiles: 'plop-templates/ts-context-provider',
            base: 'plop-templates/ts-context-provider'
        }
    ]
};
