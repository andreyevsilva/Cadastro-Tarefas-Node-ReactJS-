const server = require('./config/server');

//sempre usando forma relativa
require('./config/database');
require('./config/routes')(server);

