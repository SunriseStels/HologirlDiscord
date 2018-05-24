const Discord = require('discord.js');
const got = require('got');
const bot = new Discord.Client();
const fetch = require('node-fetch');
let varib = require('D:/GitHub/HologirlDiscrod/config.js');

// Разные смайлики
const smiles = [':grinning:',':blush:',':sunglasses:',':stuck_out_tongue:',':alien:'];
// Функция рандома
Array.prototype.randomElement = function(){
    return this[Math.floor(Math.random() * this.length)];
}

bot.on('ready', () =>{
    console.log('Bot is ready to deploy!');
})

bot.on('message', (message) => {
    if(message.content.startsWith('при') || message.content.startsWith('При')){
        const rand = smiles.randomElement();
        message.channel.send('Доброго времени суток ' + rand)
    }
    if(message.content == 'ping'){
        // message.reply('pong');
        message.channel.send('pong');
    }
    if(message.content == '!gif'){
        
    }
});

bot.login(varib.BOT_TOKEN);