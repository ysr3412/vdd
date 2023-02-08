const Discord = require('discord.js')

exports.run = async(client, message, args) => {
const cse = new Discord.EmbedBuilder()
.setColor(Discord.Colors.Blue)
.setTitle('🎲 Zarın: ' + doMagicDiceVoodoo())
await message.reply({embeds: [cse]}).catch(e => {
console.log("HATA ALIYORUM: "+e)
})

function doMagicDiceVoodoo() {
var rand = ['1', '2', '3', '4', '5', '6','7','8'];

return rand[Math.floor(Math.random()*rand.length)];
}
}

exports.conf = {
aliases: ['zar']
};

exports.help = {
name: 'zarat'
};