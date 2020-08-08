const config = require('./config/serverConfig');
const mongoose = require('mongoose');
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

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/', cardRouter);
/**
 * @swagger
 * /:
 *  get:
 *      description: Get all cards
 *      responses:
 *          '200':
 *              description: Good request
 *          '500':
 *              description: Bad request
 *      'content':
 *         "application/json":
 *            "schema":
 *              "text": "String"
 *
 * /id:
 *    get:
 *      description: Get all cards
 *      responses:
 *          '200':
 *              description: Good request
 *          '500':
 *              description: Bad request




 * /create:
 *  post:
 *      tags:
 *      - "Card"
 *      description: Add card to DB
 *      responses:
 *          '200':
 *              description: Item was added
 *          '500':
 *              description: Bad request
 *      'content':
 *         "application/json":
 *            "schema":
 *              "text": "String"
 *
 *
 */

/**
 * @swagger
 * /id:
 *    put:
 *      description: Update card
 *    responses:
 *      '201':
 *        description: Successfully update user
 */

//
mongoose.connect(config.dataBase,
    {useNewUrlParser: true}
)
    .then((client) => {
        app.listen(config.port, () => console.log(`Application is running on ${config.port}`));
    })
    .catch(err => console.error(err))