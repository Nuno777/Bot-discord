const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Online`);
   client.user.setActivity(`• Faz !verify para ficares verificado no servidor •`);
 });

 client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

   if(comando==="verify"){
    const m = await message.channel.send ("Para ficares verificado no servidor clica aqui");
   }
 });
 
/*
 client.on('raw', async dados => {
  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  if(dados.d.message_id != "   ") return

  let servidor = client.guilds.get("622848894983733298")
  let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('622857933226508289')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "566966275578789888"){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
    }
  }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "566966275578789888"){
            if(membro.roles.has(cargo1)) return
            membro.removeRole(cargo1)
    }
  }

 });
 */
 client.login(config.token);