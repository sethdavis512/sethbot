module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('ts-component', {
        description: 'this is a skeleton plopfile',
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
    });
};
