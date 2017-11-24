const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./package.json");

bot.on('ready', () => 
       { bot.user.setGame('GAME HERE') })

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