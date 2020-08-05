const config = require('./config/serverConfig');
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
const express = require("express");
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cardRouter = require('./routers/card');
const bodyParser = require('body-parser');
const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'ToDo api',
            description: "ToDo cards info",
            contact: {
                name: 'Yury Petukhou'
            }

        },
        servers: ['http://localhost:8090'],

    },
    apis: ['index.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * @swagger
 * /create:
 *  post:
 *      description: Add card to DB
 *      responses:
 *          '400':
 *              description: Bad request
 *
 */
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/', cardRouter);


//
mongoose.connect(config.dataBase,
    {useNewUrlParser: true}
)
    .then((client) => {
        app.listen(config.port, () => console.log(`Application is running on ${config.port}`));
    })
    .catch(err => console.error(err))