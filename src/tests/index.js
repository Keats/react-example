// require all modules ending in "_tests.js" from the
// current directory and all subdirectories
const context = require.context(".", true,  /_tests\.js$/);
context.keys().forEach(context);
