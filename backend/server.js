const express = require('express')
const env = require('dotenv').config()
const app = express()
const port = 3000

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoURL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/`;
// mongodb+srv://hackathonproject:FcvQD6DN7ymT8sHq@cluster0.4depkkw.mongodb.net/


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado ao MongoDB.'))
    .catch((error) => console.log(`Erro ao conectar ao MongoDB: ${error}`))


app.listen(port, () => console.log(`Servidor aberto; Porta: ${port}.`))