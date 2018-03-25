const Discord = require('discord.js');
const client = new Discord.Client();

// Variables / Functions

// flipcoin
function doCoinFlip() {
    var coinAnswer = ['Heads', 'Tails'];

    return coinAnswer[Math.floor(Math.random()*coinAnswer.length)];
}

// dice
function doDice() {
    var diceAnswer = ['1', '2', '3', '4', '5', '6'];

    return diceAnswer[Math.floor(Math.random()*diceAnswer.length)];
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

// say Start
client.on('message', message => {
    if (message.content === '?start') {
        message.channel.send(`Welcome. You have automatically been given the emote role by joining. If you aren't able to use emotes, Just press Ctrl + R, or just restart discord.

-------------------------------------------------------

Permanent Invite: 

https://discord.gg/RnB4Wac`);
    }
});

// Dice
client.on('message', message => {
    if (message.content === '?dice') {
        message.reply(doDice() + '!');
    }
});
    
// Coin Flip Command
client.on('message', message => {
    if (message.content === '?cf') {
        message.reply(doCoinFlip() + '!');
    }
});

// Say Command
client.on('message', message => {
    if (message.content === '?say') {
        const sayMessage = args.join(" ");
        message.reply(sayMessage);
    }
});

client.login(process.env.BOT_TOKEN);
