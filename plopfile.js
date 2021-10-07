const tsComponentConfig = require('./generator-configs/tsComponentConfig');
const tsContextProviderConfig = require('./generator-configs/tsContextProviderConfig');
const tsStyledComponentConfig = require('./generator-configs/tsStyledComponentConfig');

module.exports = plop => {
    plop.setGenerator('ts-component', tsComponentConfig);
    plop.setGenerator('ts-context-provider', tsContextProviderConfig);
    plop.setGenerator('ts-styled-component', tsStyledComponentConfig);
};
