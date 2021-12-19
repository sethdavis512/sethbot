const path = require('path');
const os = require('os');
const { defaultPrompts } = require('../constants');
const kebabCase = require('lodash/kebabCase');

module.exports = {
    description: 'CRA & Tailwind',
    prompts: defaultPrompts,
    actions: (answers) => {
        const repoPath = path.resolve(os.homedir(), 'repositories');
        const projectName = kebabCase(answers.name);
        const projectPath = path.join(repoPath, projectName);

        const modifyPath = `${projectPath}/tailwind.config.js`;
        const cssPath = `${projectPath}/src/index.css`;
        const appComponentPath = `${projectPath}/src/App.tsx`;

        return [
            {
                type: 'cra-tailwind',
                repoPath
            },
            {
                type: 'modify',
                path: modifyPath,
                pattern: /content: \[\]/,
                template: `content: [
        './src/**/*.{js,jsx,ts,tsx}'
    ]`
            },
            {
                type: 'add',
                path: cssPath,
                template: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
                force: true
            },
            {
                type: 'add',
                path: appComponentPath,
                template: `import React from 'react';

const App = () => {
    return <div><h1>Howdy world!</h1></div>
}

export default App;
`,
                force: true
            },
            {
                type: 'npm-start',
                projectPath
            }
        ];
    }
};
