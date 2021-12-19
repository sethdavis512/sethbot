#!/usr/bin/env node
const { start } = require('./actions/npmActions');

module.exports = (plop) => {
    plop.setActionType('npm-start', start);
    plop.setActionType('cra-tailwind', require('./actions/craTailwindAction'));

    plop.setGenerator('component', require('./configs/componentConfig'));
    plop.setGenerator(
        'styled-component',
        require('./configs/styledComponentConfig')
    );
    plop.setGenerator(
        'component-with-test',
        require('./configs/componentWithTestConfig')
    );
    plop.setGenerator('context', require('./configs/contextConfig'));
    plop.setGenerator('hook', require('./configs/hookConfig'));
    plop.setGenerator('smart-context', require('./configs/smartContextConfig'));
    plop.setGenerator(
        'use-local-storage',
        require('./configs/useLocalStorageConfig')
    );
    plop.setGenerator(
        'use-state-machine',
        require('./configs/useStateMachineConfig')
    );
    plop.setGenerator('remix-route', require('./configs/remixRouteConfig'));

    plop.setGenerator('cra-tailwind', require('./configs/craTailwindConfig'));
};
