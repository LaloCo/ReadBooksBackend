var table = module.exports = require('azure-mobile-apps').table();

table.read(function (context) {
    return context.execute();
});
