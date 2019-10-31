#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const os = require('os');
const pkg = require('./package.json');

const u = argv.user || argv.u;
const o = argv.os || argv.o;
const n = argv.node || argv.n;
const V = argv.version || argv.V;
const h = argv.help || argv.h;

const usage = `
    Usage: show [(-uon | V | h )]

    -u, --user     Current User Details
    -o, --os       OS Details
    -n, --node     Node Details
    -V, --version  Version
    -h, --help     Command Help
`;

if (h) {
  if (!u && !o && !n && !V) {
    console.log('Command Not Found');
  }
  console.log(usage);
} else if (V) {
  console.log(`    ${pkg.name} version ${pkg.version}`);
} else {
  if (u) {
    const user = os.userInfo();
    const userInfo = `
        User Info
        
        Username: ${user.username}
        Home directory: ${user.homedir}
        UID: ${user.uid}
        GID: ${user.gid}
        `;
    console.log(userInfo);
  }
  if (o) {
    const osInfo = `
        OS Info

        Architecture: ${os.arch()}
        Platform: ${os.platform()}
        CPU model: ${os.cpus()[0].model}
        CPU count: ${os.cpus().length}
        Total RAM: ${os.totalmem()} bytes
        Free RAM: ${os.freemem()} bytes
        Uptime: ${os.uptime()} seconds
        `;
    console.log(osInfo);
  }
  if (n) {
    const nodeInfo = `
        Node Info

        Version: ${process.versions.node}
        Executable: ${process.execPath}
        `;
    console.log(nodeInfo);
  }
}
