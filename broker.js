let mosca = require('mosca');

let settings = {
    port: 1883
};

let server = new mosca.Server(settings);

// let mqtt = require('mqtt');
// let client  = mqtt.connect('mqtt://localhost:1883');

// client.on('connect', function () {
//
//     setInterval(function() {
//         client.publish('myTopic', 'Hello mqtt');
//         console.log('Message Sent');
//     }, 5000);
//
// });

// client.on('connect', () => {
//     // client.subscribe('myTopic')
//
//     console.log('Connected');
// });

// client.on('message', (topic, message) => {
//
//     let context = message.toString();
//     console.log(context)
// });

server.on('clientConnected', function (client) {
    console.log('client connected', client.id);
});

server.on('clientDisconnected', function (client) {
    console.log('client disconnected', client.id);
});

server.on('published', function (packet, client) {
    // console.log(packet);
    console.log(client);
});

server.on('subscribed', function (topic, client) {
    console.log('subscribed: ' + client.id);
});

server.on('unsubscribed', function (topic, client) {
    console.log('unsubscribed: ' + client.id);
});

server.on('ready', function () {
    console.log('Mosca server is up and running');
});

// app.get('/',(request,response) => {
//     response.json({
//        value : 'Hello'
//     });
// });
// app.listen(3000, (error, result)=> {
//     if(error){
//         console.log('error');
//     }
//     console.log('Hello');
// });
// module.exports = app;
