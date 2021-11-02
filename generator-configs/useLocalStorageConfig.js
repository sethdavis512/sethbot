module.exports = {
    description: 'Typescript useLocalStorage hook',
    prompts: [],
    actions: [
        {
            type: 'add',
            path: `${process.cwd()}/useLocalStorage.ts`,
            templateFile:
                'plop-templates/use-local-storage/useLocalStorage.ts.hbs',
            base: 'plop-templates/use-local-storage/'
        }
    ]
};
