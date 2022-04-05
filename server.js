const express = require('express');
const server = express();
const PORT =  process.env.PORT || 3011;
const router = require('./routes/router');

server.set('view engine', 'ejs');

server.use('/', router);

server.listen(PORT, () => {
    console.log(`Stick with the Master Chief, He'll know what to do: ${PORT}`);
});