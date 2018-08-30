let mqtt = require('mqtt');
let client  = mqtt.connect('mqtt://192.168.2.102:1883');

client.on('connect', function () {

    setInterval(function() {
        client.publish('myTopic', 'Hello mqtt');
        console.log('Message Sent');
    }, 5000);

});