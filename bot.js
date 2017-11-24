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
if message.content === '?purge') {
const deleteCount = parseInt(args[0], 10);
if (!deleteCount || deleteCount < 2 || deleteCount > 255)
return message.reply("Please do not purge any messages outside of the 2-255 range. Thank you.");
const fetched = await message.channel.fetchMessages({count: deleteCount});
.catch(error => message.reply(`Oops! It seems like I couldn't delete the messages for you because of: ${error}`));
}
});

client.login(process.env.BOT_TOKEN);