const express = require("express");
const cors = require("cors");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

const TOKEN = "8424943153:AAElla0LW7lEYjipA6k2SzwKlll9QU6fGNg"; 
const bot = new TelegramBot(TOKEN, {polling: true});

let nfts = [];
let userWallets = [];

app.post("/registerWallet", (req, res) => {
  const { wallet, telegramId } = req.body;
  const exists = userWallets.find(u => u.wallet === wallet);
  if (!exists) userWallets.push({ wallet, telegramId });
  res.json({ success:true });
});

app.get("/nfts/:wallet", (req, res) => {
  const wallet = req.params.wallet;
  res.json(nfts.filter(n => n.owner === wallet));
});

function notifyNFTReceived(wallet, nft){
  const user = userWallets.find(u => u.wallet === wallet);
  if(!user) return;
  const message = `🎁 NFT "${nft.name}" пришёл на ваш кошелёк!\nСсылка: https://ВАШ-ПУБЛИЧНЫЙ-URL/detail.html?id=${nft.id}`;
  bot.sendMessage(user.telegramId, message);
}

// тестовое добавление NFT каждые 30 сек
setInterval(()=>{
  const newNFT = {id:Math.floor(Math.random()*1000)+200,name:"Gift NFT",owner:"user1"};
  nfts.push(newNFT);
  notifyNFTReceived(newNFT.owner,newNFT);
},30000);

app.listen(PORT,()=>console.log("Server running on port "+PORT));
