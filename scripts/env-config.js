const fs = require('fs');
const targetPath = './src/environments/environment.prod.ts';
const envConfigFile = `
export const environment = {
    production: true,
    stripePubKey: '${process.env.stripePubKey}',
    apiUrl: '${process.env.apiUrl}',
    hostUrl: '${process.env.hostUrl}'

};
`;
fs.writeFileSync(targetPath, envConfigFile);

