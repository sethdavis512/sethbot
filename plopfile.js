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

    setGenerator('grab-and-go-prisma-schema', {
        description: 'Grab and go Prisma schema template',
        prompts: defaultPrompts,
        actions: [
            {
                type: 'addMany',
                destination: `${process.cwd()}/`,
                templateFiles: `plop-templates/grab-and-go-prisma-schema/**/*.hbs`,
                base: `plop-templates/grab-and-go-prisma-schema`
            }
        ]
    });

    setGenerator('hook', {
        description: 'Typescript hook with unit test',
        prompts: defaultPrompts,
        actions: buildAddManyActions('hook')
    });

    setGenerator('remix-route', {
        description: 'Remix route in Typescript',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name'
            },
            {
                type: 'confirm',
                name: 'hasLoader',
                message: 'Loader',
                default: true
            },
            {
                type: 'confirm',
                name: 'hasAction',
                message: 'Action',
                default: true
            },
            {
                type: 'confirm',
                name: 'hasMeta',
                message: 'Meta',
                default: false
            },
            {
                type: 'confirm',
                name: 'hasLinks',
                message: 'Links',
                default: false
            },
            {
                type: 'confirm',
                name: 'hasErrorBoundary',
                message: 'ErrorBoundary',
                default: false
            }
        ],
        actions: () => [
            {
                type: 'addMany',
                destination: process.cwd(),
                templateFiles: 'plop-templates/remix-route/**/*.hbs',
                base: 'plop-templates/remix-route'
            }
        ]
    });

    setGenerator('tiny-react', {
        description: 'Tiny React app built using Parcel',
        prompts: defaultPrompts,
        actions: buildAddManyActions('tiny-react', 'kebabCase')
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
}
