const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});

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

// COMMANDS
client.on('message', message => {
// ignore bots
    if(message.author.bot) return;
// var args
    const args = message.content.slice(process.prefix).trim().split(/ +/g);
// var "command" config
    const command = args.shift().toLowerCase();
// var "gameSet" config
    const gameSet = args.join(" ");
// role perms only
    let rolePermission = message.guild.roles.find("name", "🔑");
    if (!message.member.roles.has(rolePermission.id)) return;

// Help Command
    if (command === '!help') {
        const embed = new Discord.RichEmbed()
        .addField("Purge", "Deletes messages in bulk")
        .addField("Say", "Makes me say something!")
        .addField("Setgame", "Sets my the game I'm playing to whatever you want!")
        .addField("Dice", "Rolls a number between 1 and 6")
        .addField("cf", "flips a coin, heads or tails!")
        .setColor(0x00FFFF)
        .setFooter('All commands use the prefix "!"')
        message.channel.sendEmbed(embed);
    };
    
// Set Game
    if (command === '!setgame') {
        if (gameSet === 'reset' || message.content === '!setgame') {
            message.reply('Game has been reset!')
            client.user.setPresence({ game: { name: null, type: 0} });
        } else {
            client.user.setPresence({ game: { name: gameSet, type: 0} });
            message.reply('Game set to: **' + (gameSet) + '**');
        }
    }
    
// DM User Command

// Purge Command
    if (command === '!purge') {
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
        (message.channel.bulkDelete(deleteCount + 1))
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }

// Say Command
    if (command === '!say') {
       const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(sayMessage);
    }
    
// Dice Command
    if (command === '!dice') {
       message.reply(doDice() + '!');
    }
    
// Coin Flip Command
    if (command === '!cf') {
      message.reply(doCoinFlip() + '!');
    }
    
});
client.login(process.env.BOT_TOKEN);
