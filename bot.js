const Discord = require('discord.js');
const client = new Discord.Client(); 
require('dotenv-flow').config();

const config = {
    token: process.env.TOKEN,
    owner: process.env.OWNER,
    prefix: process.env.PREFIX
}

client.on('ready', () =>{
    console.log('This bot is now Online!')
})

bot.client('message', msg=>{
    if(msg.content ===  "HELLO"){
        msg.reply('Hello there! Make sure you study your spanish in 5 minutes! Or else... >:)');
    }
})

bot.client('message', msg=>{
    if(msg.content ===  "Im not studying"){
        msg.reply('Look out your window, study or say goodbye... >:D');
    }
})

bot.client('message', msg=>{
    if(msg.content ===  "Fuck you Duolingo"){
        msg.reply('No, FUCK YOU! STUDY YOUR SPANISH OR ILL FUCKING HUNT YOUR ASS DOWN');
    }
})

bot.client('message', msg=>{
    if(msg.content ===  "moto moto likes you"){
        msg.reply('cool but he still has to study his fucking spanish');
    }
})

bot.client('message', msg=>{
    if(msg.content ===  "no u"){
        msg.reply('no U!!!');
    }
})

bot.client('message', msg=>{
    if(msg.content ===  "uno reverse card"){
        msg.reply('cunt');
    }
})

bot.client('message', msg=>{
    if(msg.content ===  "Who made this bot?"){
        msg.reply('some irish lad');
    }
})

client.login(token);
