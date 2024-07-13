// prod-server.js
// require('dotenv').config(); // require dotenv
const cli = require('next/dist/cli/next-start');

cli.nextStart(['-p', 80]);