module.exports = {
    description: 'Typescript useStateMachine hook',
    prompts: [],
    actions: [
        {
            type: 'addMany',
            destination: `${process.cwd()}/`,
            templateFiles: 'plop-templates/use-state-machine/**/*.hbs',
            base: 'plop-templates/use-state-machine'
        }
    ]
};
