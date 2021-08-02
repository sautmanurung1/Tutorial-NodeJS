const { memory } = require('console');
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method return the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalmemory : os.totalmem(),
    freemem : os.freemem(),
}

console.log(currentOS);