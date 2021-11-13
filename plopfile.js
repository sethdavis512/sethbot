#!/usr/bin/env node
module.exports = (plop) => {
    plop.setGenerator('component',
        require('./generator-configs/componentConfig')
    );
    plop.setGenerator('styled-component',
        require('./generator-configs/styledComponentConfig')
    );
    plop.setGenerator('component-with-test',
        require('./generator-configs/componentWithTestConfig')
    );
    plop.setGenerator('context',
        require('./generator-configs/contextConfig')
    );
    plop.setGenerator('hook',
        require('./generator-configs/hookConfig')
    );
    plop.setGenerator('smart-context',
        require('./generator-configs/smartContextConfig')
    );
    plop.setGenerator('use-local-storage',
        require('./generator-configs/useLocalStorageConfig')
    );
    plop.setGenerator('use-state-machine',
        require('./generator-configs/useStateMachineConfig')
    );
};
