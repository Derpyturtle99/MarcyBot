const Discord = require('discord.js');
const client = new Discord.Client();

// Variables

// flipcoin
function doCoinFlip() {
    var coinAnswer = ['Heads', 'Tails'];

    return coinAnswer[Math.floor(Math.random()*coinAnswer.length)];
}
//dice
function doRollDice() {
    var diceAnswer = ['1', '2', '3', '4', '5', '6'];

    return
diceAnswer[Math.floor(Math.random()*diceAnswer.length)];

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
    if (message.content === '?flipcoin') {
        message.reply(doCoinFlip() + '!');
    }
});

// Dice Roll Command
client.on('message', message => {
    if (message.content === '?rolldie') {
        message.reply(doDiceRoll() + '!');

client.login(process.env.BOT_TOKEN);