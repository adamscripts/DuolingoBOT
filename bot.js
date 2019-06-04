onst Discord = require('discord.js');
const bot = new Discord.Client(); 

const token ='NTY4ODcwODcwNTYzNDIyMjU4.XLoYqQ.5LmZMCo_fKyJRckNQNVuuWp10yY';

bot.on('ready', () =>{
    console.log('This bot is now Online!')
})

bot.on('message', msg=>{
    if(msg.content ===  "HELLO"){
        msg.reply('Hello there! Make sure you study your spanish in 5 minutes! Or else... >:)');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "Im not studying"){
        msg.reply('Look out your window, study or say goodbye... >:D');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "Fuck you Duolingo"){
        msg.reply('No, FUCK YOU! STUDY YOUR SPANISH OR ILL FUCKING HUNT YOUR ASS DOWN');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "moto moto likes you"){
        msg.reply('cool but he still has to study his fucking spanish');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "no u"){
        msg.reply('no U!!!');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "uno reverse card"){
        msg.reply('cunt');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "Who made this bot?"){
        msg.reply('some irish lad');
    }
})

bot.login(token);

client.login(process.env.BOT_TOKEN);
