const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?ping') {
    	message.reply('Poong!');
  	}
});

client.on('message', message => {
    if (message.content === '?pingg') {
    	message.reply('Pongg!');
  	}
});
        

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);