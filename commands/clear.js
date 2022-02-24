module.exports = async (client, message) => {
    const channel = message.channel;
    const fetchmessage = await channel.fetchWebhooks();
    await channel.bulkDelete(fetchmessage);
    //com o nome do user
    //message.reply("Clean");

    //sem nome de user
    message.channel.send("Clean");
}