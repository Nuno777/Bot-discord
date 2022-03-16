/* module.exports = (client, message) => {
    message.reply("Pong");
    
} */
const Discord=require("discord.js");
const {DESTRUCTION}=require("dns");

module.exports = {
    name:"Ping",
    author:"gode",
    description:"Bot manda o ping",
    
    run: async (client,message,args) => {
        let cor_da_embed="BLUE";
        let ping_bot=client.ws.ping;
        let embed=new Discord.MessageEmbed().setColor(cor_da_embed).setDescription(`Ping ${ping_bot} ms`);

        message.replay({content:`${message.author}`});
    }

}