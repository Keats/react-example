const context = require.context(".", true, /.tests$/);
context.keys().forEach(context);
