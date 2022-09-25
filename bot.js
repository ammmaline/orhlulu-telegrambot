const { Telegraf } = require("telegraf");
const TOKEN = "5683588880:AAGF55Ci7UC-YvjS8ghrJNxO_5Ty7u19LZ4";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
