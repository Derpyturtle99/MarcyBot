const Discord = require('discord.js');
const client = new Discord.Client();

// Variables / Functions

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

// Set Game
client.on('message', message => {
    const args = message.content.slice(process.prefix).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === '!setgame') {
        const gameSet = args.join(" ");
        client.user.setPresence({ game: { name: gameSet, type: 0} });
    }
});

// Purge Command
client.on('message', message => {
    if(message.author.bot) return;
    const args = message.content.slice(process.prefix).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === '!purge') {
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    message.channel.bulkDelete(deleteCount)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
});

// Beep, Boop Command
client.on('message', message => {
    if (message.content === '!beep') {
        message.channel.send('boop!');
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
    
// Dice Command
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
