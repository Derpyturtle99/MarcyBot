const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./package.json");

await client.user.setPresence({
  data: {
       game: {
            name: '?help'
        }
    }
})

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?ping') {
    	message.reply('Pong!');
  	}
});

client.on('message', async message => {
if(message.author.bot) return;
if(message.content.indexOf(config.prefix) !== 0) return;
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  
if (command === 'echo') {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
}
    
if (command === 'pong') {
    message.channel.send("Ping!");
}
});
        
        

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
