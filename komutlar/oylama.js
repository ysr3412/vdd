const { EmbedBuilder } = require('discord.js');
 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send({embeds: [

     new EmbedBuilder()
     .setDescription(`**❌ Bir oylama içeriği yazmalısın! ❌**`)]}).then(m => setTimeout(() => m.delete(), 5000));
     console.log("/oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send({embeds: [

       new EmbedBuilder()

       .setColor("BLUE")
       .setThumbnail(client.user.displayAvatarURL())
       .setTimestamp()
       .setFooter({text: 'Code Share', iconURL: client.user.displayAvatarURL()})
       .addFields({name: `**Oylama**`, value: `**${question}**`})]}).then(msg => {

         msg.react(':white_check_mark:');
         msg.react(':x:');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: '/oylama <oylamaismi>'
};