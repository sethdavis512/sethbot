module.exports = {
    description: 'Typescript useArray hook',
    prompts: [],
    actions: [
        {
            type: 'add',
            path: `${process.cwd()}/useArray.ts`,
            templateFile: 'plop-templates/use-array/useArray.ts.hbs',
            base: 'plop-templates/use-array/'
        }
    ]
};
