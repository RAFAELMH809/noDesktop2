require('dotenv').config();
const server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log('Server is live at localhost :' + PORT));
