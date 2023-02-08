const { Client, GatewayIntentBits, Partials } = require("discord.js");
const ayarlar = require("./ayarlar.json");

const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

client.login(process.env.TOKEN || ayarlar.token)

client.on("messageCreate", async message => {

  let data = ["sa", "Sa", "sA", "SA", "sea", "Sea", "SEA"];
  if (data.includes(message.content)) {
    message.reply("As Kardeşim Hoş Geldin Sefa Getirdin!");
  }




  let data2 = [
    "gnydn",
    "günaydın",
    "Günaydın",
    "gunaydin",
    "gunaydın",
    "Gunaydın",
    "Gunaydin"
  ];
  if (data2.includes(message.content)) {
    message.reply("Sanada Günaydın Canım. 😯🌄🌅");
  }




  let data3 = [
    "iyi geceler",
    "iyi akşamlar",
    "iyi gclr",
    "ii geceler",
    "iyi aksamlar",
    "Iyi Geceler",
    "İyi geceler",
    "İyi akşamlar"
  ];
  if (data3.includes(message.content)) {
    message.reply("Saol Knka Sanada İyi Geceler. 🌙🌜");
  }

})


client.on('messageCreate', message => {
  if(message.content.includes("discord.gg/")) {
    message.delete()
    message.channel.send(`${message.member} bu sunucuda reklam kesinlikle yasak`)
  }
})


