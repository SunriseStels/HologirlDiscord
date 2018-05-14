const Discord = require('discord.js');
const bot = new Discord.Client();
var GphApiClient = require('giphy-js-sdk-core');

var BOT_ID = 'token';
botGif = GphApiClient("token");

bot.on('ready', () =>{
    console.log('Bot is ready to deploy!');
})

bot.on('message', (message) => {
    if(message.content == 'ping'){
        // message.reply('pong');
        message.channel.send('pong');
    }
    if(message.content == '!gif'){

    }
});

bot.login(BOT_ID);