const express  = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});

const app = express();
const PORT = process.env.port || 6000;

app.listen(PORT, ()=> {
    console.log(`Server started in 
    ${process.env.NODE_ENV} mode at port ${process.env.PORT}`)
}
);
