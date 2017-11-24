const Discord = require('discord.js');
const client = new Discord.Client();

// Variables

function doCoinFlip() {
    var coinAnswer = ['Heads!', 'Tails!'];

    return coinAnswer[Math.floor(Math.random()*coinAnswer.length)];
}

// Commands

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?ping') {
    	message.reply('Pong!');
  	}
});

client.on('message', message => {
    if (message.content === '?nuzzle') {
      message.reply('*nuzzles* UwU');
   }
});

client.on('message', message => {
    if (message.content === '?flipcoin') {
        message.reply(message, ' ' + doCoinFlip());
}
});

client.login(process.env.BOT_TOKEN);