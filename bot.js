const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "8424943153:AAElla0LW7lEYjipA6k2SzwKlll9QU6fGNg";
const MINIAPP_URL = "https://ВАШ-ПУБЛИЧНЫЙ-URL";

const bot = new TelegramBot(TOKEN, {polling:true});

bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId,"Добро пожаловать в NFT Portal!",{
    reply_markup:{
      inline_keyboard:[
        [{text:"Открыть Mini App",web_app:{url:MINIAPP_URL}}]
      ]
    }
  });
});

console.log("Telegram bot запущен и слушает команды");
