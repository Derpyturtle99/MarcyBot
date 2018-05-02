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

// 'join' accept tos function
client.on('message', message => {
    if (message.channel.id === '432237954514026498') {
    if (message.content === 'join') {
        const guildMember = message.member;
let roleName = message.guild.roles.find("name", "Community");
  guildMember.addRole(roleName);
         }
    }
});


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
        .addField("Help (!help [?])", "Brings up the command list")
        .addField("Purge (!purge [#])", "Deletes messages in bulk")
        .addField("Say (!say [text])", "Makes me say something!")
        .addField("Setgame (!setgame [game])", "Sets my the game I'm playing to whatever you want!")
        .addField("Dice (!dice)", "Rolls a number between 1 and 6")
        .addField("Coinflip (!cf)", "flips a coin, heads or tails!")
        .setColor(0x00FFFF)
        .setFooter('Use !help [command] for more information! All commands use the prefix "!"')
        .setThumbnail("https://cdn.discordapp.com/attachments/426940712345534465/428038594440069121/help.png")
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
    
// Dm

// Purge Command
    if (command === '!purge') {
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 1 || deleteCount > 99)
        return message.reply("Please provide a number between 1 and 99 for the number of messages to delete");
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
    if (command === '!cf' || command === '!coinflip') {
      message.reply(doCoinFlip() + '!');
    }

// Typing

    
});
client.login(process.env.BOT_TOKEN);
