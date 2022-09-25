const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', (message) => {

        let chat_id = message.from.id;
        //console.log(message)
        //console.log(message.from.id);
        //middleware 
        bot.sendMessage(chat_id, 'Hello from Amaline');

});
