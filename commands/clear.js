module.exports = async (client, message) => {
    const channel = message.channel;
    const fetchmessage = await channel.fetchWebhooks();
    await channel.bulkDelete(fetchmessage);
    message.reply("Clean");
}

