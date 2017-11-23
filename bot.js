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
    if (message.content === '?echo') {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
    }
});

        
        

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
