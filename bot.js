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
    	message.reply('Pong!');
  	}
});

client.on('message', message => {
    if (message.content === '?echo') {
      message.reply('okay');
   }
});
        

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);