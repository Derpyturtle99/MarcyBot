const Discord = require('discord.js');
const client = new Discord.Client();

// Variables / Functions

// Status
client.on("ready", () => {
    console.log("online");
    client.user.setPresence({ game: { name: 'with Kat', type: 0} });
});

// flipcoin function
function doCoinFlip() {
    var coinAnswer = ['Heads', 'Tails'];
    return coinAnswer[Math.floor(Math.random()*coinAnswer.length)];
}

// dice function
function doDice() {
    var diceAnswer = ['1', '2', '3', '4', '5', '6'];
    return diceAnswer[Math.floor(Math.random()*diceAnswer.length)];
}

// Commands

client.on('ready', () => {
    console.log('I am ready!');
});

// Purge Command
client.on('message', message => {
    if(message.author.bot) return;
    const args = message.content.slice(process.prefix).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === '!purge') {
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 0 || deleteCount > 100)
      return message.reply("Please provide a number between 1 and 100 for the number of messages to delete");
    message.channel.bulkDelete(deleteCount)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
});

// Nuzzle Command
client.on('message', message => {
    if (message.content === '!nuzzle') {
        message.delete().catch(O_o=>{})
        message.reply('*nuzzles* UwU');
   }
});

// Beep, Boop Command
client.on('message', message => {
    if (message.content === '!beep') {
        message.channel.send('boop!');
    }
});

client.on('message', message => {
    if (message.content === 'no') {
        message.channel.send('yES!');
    }
});

// Say Command
client.on('message', message => {
    if(message.author.bot) return;
    const args = message.content.slice(process.prefix).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === '!say') {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        message.channel.send(sayMessage);
    }
});
    
// Dice
client.on('message', message => {
    if (message.content === '!dice') {
        message.reply(doDice() + '!');
    }
});
    
// Coin Flip Command
client.on('message', message => {
    if (message.content === '!cf') {
        message.reply(doCoinFlip() + '!');
    }
});

client.login(process.env.BOT_TOKEN);
