const Discord = require ('discord.js')
exports.run = async(client ,message ,args)=>{
  /////İD GİRİN
if(message.author.id !== "918885550969196616") return;

/////////////////////////////////////
let m = args[0]
const servers = new Discord.EmbedBuilder()
.setColor("White") 
.setTitle("Sunucu listesi!")
await client.guilds.cache.forEach(x => servers.addFields({ name : `${x.name}`, value : `${x.id}, ** Üye sayısı :** \`${x.memberCount}\``})) 

if(!m) return message.channel.send({embeds : [servers]})
if(!client.guilds.cache.get(m)) return message.channel.send('Sunucu bulunamadı.')

const sunucu = client.guilds.cache.get(m)
let kanal = sunucu.channels.cache.filter(c => c.type === 0).random()
let davet;
  await kanal.createInvite().catch(e => {
return message.reply("Davet alma yetkim yok.")
}).then(i => davet = i.code)
let embed = new Discord.EmbedBuilder()
.setTitle(`${sunucu.name} Adlı sunucunun daveti`)
.setDescription(`Davet : __**https://discord.gg/${davet}**__`)
.setColor('White')
const row = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
					.setLabel('Linke Git!')
					.setStyle(Discord.ButtonStyle.Link)
          .setURL(`https://discord.gg/${davet}`)
			);
message.channel.send({embeds : [embed], components : [row]})
}
exports.conf = {
  aliases: ["davetlink"]
};

exports.help = {
  name: "swliste"
};