module.exports = {
    description: 'A React component written in Typescript',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Component name'
        },
        {
            type: 'confirm',
            name: 'enclosing',
            message: 'Enclosing folder'
        }
    ],
    actions: answers => {
        const destination = `${process.cwd()}${
            answers.enclosing ? '/{{ pascalCase name }}/' : '/'
        }`;

        return [
            {
                type: 'addMany',
                destination,
                templateFiles: 'plop-templates/ts-component',
                base: 'plop-templates/ts-component'
            }
        ];
    }
};
