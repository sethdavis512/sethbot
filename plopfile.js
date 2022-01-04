#!/usr/bin/env node
const { start } = require('./actions/npm');

module.exports = (plop) => {
    plop.setActionType('npm-start', start);
    plop.setActionType('cra-tailwind', require('./actions/craTailwind'));

    plop.setGenerator('component', require('./configs/component'));
    plop.setGenerator('styled-component', require('./configs/styledComponent'));
    plop.setGenerator(
        'component-with-test',
        require('./configs/componentWithTest')
    );
    plop.setGenerator('context', require('./configs/context'));
    plop.setGenerator('hook', require('./configs/hook'));
    plop.setGenerator('smart-context', require('./configs/smartContext'));
    plop.setGenerator(
        'use-local-storage',
        require('./configs/useLocalStorage')
    );
    plop.setGenerator(
        'use-state-machine',
        require('./configs/useStateMachine')
    );
    plop.setGenerator('use-array', require('./configs/useArray'));
    plop.setGenerator('remix-route', require('./configs/remixRoute'));

    plop.setGenerator('cra-tailwind', require('./configs/craTailwind'));
};
