const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = '5683588880:AAGF55Ci7UC-YvjS8ghrJNxO_5Ty7u19LZ4';

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', (message) => {

        let chat_id = message.from.id;
        //console.log(message)
        //console.log(message.from.id);
        //middleware 
        bot.sendMessage(chat_id, 'Hello from NodeJS');

});
