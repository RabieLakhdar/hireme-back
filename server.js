const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')

const port =process.env.PORT || 5000

const server = http.createServer(app)
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster-hireme-5ffxi.mongodb.net/${process.env.COLLECTION}?retryWrites=true&w=majority`)
    .then(() => { server.listen(port); console.log("good running at port "+port) })
    .catch(err => {
        console.warn(err)
    });
