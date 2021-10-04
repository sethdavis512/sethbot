module.exports = {
    description: 'A React context provider written in Typescript',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Provider name'
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
                templateFiles: 'plop-templates/ts-context-provider',
                base: 'plop-templates/ts-context-provider'
            }
        ];
    }
};
