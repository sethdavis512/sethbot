const tsComponentConfig = require('./generator-configs/tsComponentConfig');
const tsContextProviderConfig = require('./generator-configs/tsContextProviderConfig');

module.exports = plop => {
    plop.setGenerator('ts-component', tsComponentConfig);
    plop.setGenerator('ts-context-provider', tsContextProviderConfig);
};
