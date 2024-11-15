const fs = require('fs');
const targetPath = './../src/app/environments/environment.prod.ts';
const envConfigFile = `
export const environment = {
    stripePubKey: '${process.env.stripePubKey}'
    apiUrl: '${process.env.apiUrl}'
    hostUrl: '${process.env.hostUrl}'

};
`;
fs.writeFileSync(targetPath, envConfigFile);
console.log(`Environment variables written to ${targetPath}`);
