const lblOnLine = document.querySelector('#lblOnLine');
const lblOffLine = document.querySelector('#lblOffLine');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');
const socket = io();

//evento para escuchar
socket.on('connect', () =>{
    //console.log('Conectado')
    lblOffLine.style.display = 'none';
    lblOnLine.style.display = '';
});

socket.on('disconnect', ()=>{
    console.log('Desconectado del Servidor')
    lblOffLine.style.display = '';
    lblOnLine.style.display = 'none';
});
socket.on('enviar-mensaje', (payload)=>{
    console.log(payload);
});
//enventos para eschuchar el evento cuando se pulse boton Enviar
btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123',
        fecha: new Date().getTime(),
        rol: 'Admin'
    }
    socket.emit('enviar-mensaje',payload, (id)=>{
        console.log('Desde el server!!', id);
    })
});

