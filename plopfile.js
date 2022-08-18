#!/usr/bin/env node

const defaultPrompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Name'
    }
];

const buildAddManyActions = (directory, casingType = 'pascalCase') => {
    return [
        {
            type: 'addMany',
            destination: `${process.cwd()}/{{ ${casingType} name }}/`,
            templateFiles: `plop-templates/${directory}/**/*.hbs`,
            base: `plop-templates/${directory}`
        }
    ];
};

export default function ({ setGenerator }) {
    setGenerator('component', {
        description: 'Typescript component',
        prompts: defaultPrompts,
        actions: buildAddManyActions('component')
    });

    setGenerator('component-with-test', {
        description: 'Typescript component with unit test',
        prompts: defaultPrompts,
        actions: buildAddManyActions('component-with-test')
    });

    setGenerator('context', {
        description: 'Typescript context provider',
        prompts: defaultPrompts,
        actions: buildAddManyActions('context')
    });

    setGenerator('hook', {
        description: 'Typescript hook with unit test',
        prompts: defaultPrompts,
        actions: buildAddManyActions('hook')
    });

    setGenerator('use-state-machine', {
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
    });

    setGenerator('use-local-storage', {
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
    });

    setGenerator('remix-route', {
        description: 'Remix route in Typescript',
        prompts: defaultPrompts.concat([
            {
                type: 'input',
                name: 'routeFilePath',
                message: 'Where',
                default: (answers) =>
                    `${process.cwd()}/${answers.name.toLowerCase()}`
            },
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
        actions: (answers) => [
            {
                type: 'addMany',
                destination: `${
                    answers.routeFilePath || process.cwd()
                }/{{ kebabCase name }}/`,
                templateFiles: 'plop-templates/remix-route/**/*.hbs',
                base: 'plop-templates/remix-route'
            }
        ]
    });

    setGenerator('remix-airtable-crud', {
        description: 'Remix Airtable CRUD',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Model (singular, i.e. Player)'
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: `${process.cwd()}/`,
                templateFiles: `plop-templates/remix-airtable-crud/**/*.hbs`,
                base: `plop-templates/remix-airtable-crud`,
                force: true
            }
        ]
    });

    setGenerator('tiny-react', {
        description: 'Tiny React app built using Parcel',
        prompts: defaultPrompts,
        actions: buildAddManyActions('tiny-react', 'kebabCase')
    });
}
