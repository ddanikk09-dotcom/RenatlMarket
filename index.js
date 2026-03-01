const express = require("express");
const cors = require("cors");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
app.use(cors());
app.use(express.json());

// Токен бота берём из переменных окружения Replit
const TOKEN = process.env.TOKEN;

// Создаём бота
const bot = new TelegramBot(TOKEN, { polling: true });

// Главная страница сервера
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Простейшая команда /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Бот работает 🚀");
});

// Слушаем порт
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server started");
});
