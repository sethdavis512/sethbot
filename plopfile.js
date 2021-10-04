const tsComponentConfig = require('./generator-configs/tsComponentConfig');
const tsContextProviderConfig = require('./generator-configs/tsContextProviderConfig');

module.exports = function (plop) {
    plop.setGenerator('ts-component', tsComponentConfig);
    plop.setGenerator('ts-context-provider', tsContextProviderConfig);
};
