let mqtt = require('mqtt');
let client = mqtt.connect('mqtt://192.168.2.102:1883');

client.on('connect', () => {
    client.subscribe('myTopic')

});

client.on('message', (topic, message) => {

    let context = message.toString();
    console.log(context)
});