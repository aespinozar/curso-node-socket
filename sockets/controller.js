
const socketController = (socket) => {
    console.log('Cliente Conectado', socket.id);
    socket.on('disconnect',()=>{
         console.log('Cliente Desconectado',socket.id);
     });

     socket.on('enviar-mensaje', (payload, callback)=>{
         //este es el id que se debe retornar
         const id= '123456789';
         callback(id);
         socket.broadcast.emit('enviar-mensaje',payload);
        })
 }
module.exports = {
    socketController
}