module.exports = {
    description: 'A React component written in Typescript',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Component name'
        }
    ],
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/{{ pascalCase name }}/`,
            templateFiles: 'plop-templates/ts-component',
            base: 'plop-templates/ts-component'
        }
    ]
};
