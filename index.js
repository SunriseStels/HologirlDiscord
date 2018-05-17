const Discord = require('discord.js');
const got = require('got');
const bot = new Discord.Client();
const fetch = require('node-fetch');
var varib = require('D:/GitHub/HologirlDiscrod/config.js');

const gif_url = 'http://api.giphy.com/v1/gifs/search?api_key=' + varib.GIF_API + '&limit=5';

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

bot.login(varib.BOT_TOKEN);