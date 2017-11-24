const Discord = require('discord.js');
const client = new Discord.Client();


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
      message.reply('*nuzzles UwU*');
   }
});

client.on('message', message => {
    if (message.content === '?coinflip') {
      async run (message, args) {
         var coinans = [
             'Heads?', 'Tails!'
       ];
       var coinans = coinans[Math.floor(Math.random() * 2 )];
       message.reply(answer.ToString())
       }
    }
});

client.login(process.env.BOT_TOKEN);