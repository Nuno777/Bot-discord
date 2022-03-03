const Discord = require('discord.js')
module.exports = async (client, message, args, prefix) => {
  let user = message.mentions.users.first();
  let reason = args[0];
  const channel = message.channel;
  const fetchmessage = await channel.fetchWebhooks();
  await channel.bulkDelete(fetchmessage).catch(error => console.log(error.stack));
  message.reply("Clean");
}