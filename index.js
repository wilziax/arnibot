const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.once('ready', () => {
});

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim()
    message.channel.send('Malchi s tva "' + args + '" ami varvi bluskai!!!');
});

//console.log(process.env.BOT_TOKEN)

client.login(process.env.BOT_TOKEN);
