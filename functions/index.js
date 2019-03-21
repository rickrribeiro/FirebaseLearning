const functions = require('firebase-functions');
const Telegraf = require('telegraf')
const apixu = require('apixu')
const apixuClient = new apixu.Apixu({
    apikey: '884b09dfacef4179952192451192103'
});
const bot = new Telegraf('TOKEN AQ') //TODO
bot.start((ctx) => ctx.reply('Welcome. Do you want to view google or twitter trends?'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    apixuClient.current('salvador').then((current) =>{  
         return response.send(current)
        }).catch((err) =>{
           return response.send(err)
        })
    
});

