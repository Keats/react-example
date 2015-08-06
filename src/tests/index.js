// require all modules ending in "_tests" from the
// current directory and all subdirectories
const context = require.context(".", true,  /_tests$/);
context.keys().forEach(context);
