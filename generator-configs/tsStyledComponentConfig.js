module.exports = {
    description: 'A React styled component written in Typescript',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Styled component name'
        }
    ],
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/{{ pascalCase name }}/`,
            templateFiles: 'plop-templates/ts-styled-component',
            base: 'plop-templates/ts-styled-component'
        }
    ]
};
