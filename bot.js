const Discord = require('discord.js');
const client = new Discord.Client();

// Variables / Functions

// flipcoin
function doCoinFlip() {
    var coinAnswer = ['Heads', 'Tails'];

    return coinAnswer[Math.floor(Math.random()*coinAnswer.length)];
}

// Commands

client.on('ready', () => {
    console.log('I am ready!');
});

// Ping Command
client.on('message', message => {
    if (message.content === '?ping') {
    	message.reply('Pong!');
  	}
});

// Nuzzle Command
client.on('message', message => {
    if (message.content === '?nuzzle') {
      message.reply('*nuzzles* UwU');
   }
});

// Coin Flip Command
client.on('message', message => {
    if (message.content === '?coinflip') {
        message.reply(doCoinFlip() + '!');
    }
});

// Echo Command
client.on('message', message => {
if (message.content === '?echo') {
  const [channelid, messageid, quotename, ...note] = args.splice(1);
  // I also support "here" as a channelID using this:
  const channel = channelid == "here" ? message.channel : client.channels.get(channelid);
  // I do the same with message ID, which can be "last":
  const message = messageid === "last" ? msg.channel.messages.last(2)[0] : await channel.messages.get(messageid);
  // pretend for a second this is the rest of the function:
  insertInDB(quotename, channel.id, message.id, note.join(" "));
}
});
        

client.login(process.env.BOT_TOKEN);