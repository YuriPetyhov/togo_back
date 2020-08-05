const config = require('./config/serverConfig')
const express = require("express");
const cors = require('cors');
const cardRouter = require('./routers/card');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', cardRouter);


app.listen(config.port, () => console.log(`Application is running on ${config.port}`));
