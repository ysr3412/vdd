const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
const csfetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

message.channel.send("Gram altın 9999999999999999999999999999999999 tl").then(async msg => {    
setTimeout(() => {
    csfetch("https://api.bigpara.hurriyet.com.tr/doviz/headerlist/anasayfa").then(async r => {
    const json = await r.json();
    const dolarobj = json.data.filter(c => c.SEMBOL=="GLDGR")[0]
if (dolarobj.SATIS){
        msg.edit(`Güncel Gram Altın: **${dolarobj.SATIS}TL**`)
      } else {
        msg.edit("Gram Altını Bulamadım! :(")
      }
})
}, 2000) 
  })
}
module.exports.conf = {
aliases: ["gram","ga"]
}

module.exports.help = {
name: "altın" 
  }
