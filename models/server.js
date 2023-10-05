const express = require('express');
const cors = require('cors');
const {socketController} = require('../sockets/controller');
class Server {
    constructor() {
        this.app = express();
        //define el puerto
        this.port = process.env.PORT || 3000;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.paths={ }
        //Middelware
        this.middlewares();
        //Rutas de la aplicacion
        this.routes();
        //cofiguracion de sockets
        this.sockets();

    }
    //aque se define el metodo middleware que publicara la carpeta public
    middlewares(){
        //CORS
        this.app.use(cors());
        //directorio publico
        this.app.use(express.static('public'));
    }
    routes() {
       // this.app.use(this.paths.auth, require('../routes/auth'));
    }
    sockets(){
        //el this.io hace referencia a unuestro servidor web Socket, que es diferente
        // a this.app de express, pero ambos estan conectados.
        this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto ',this.port)
        })
    }
}
module.exports = Server;