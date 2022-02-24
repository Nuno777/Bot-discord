const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config/config.json");
const secrets = require("./config/secrets.json");

const prefix = "-";
const commands = require("./scripts/commandsReader")(config.prefix);
console.log(commands);
client.on("ready", () => {
  console.log(`Online`);
  client.user.setActivity('-help');
});

client.on("message", (message) => {
  if (!message.author.bot && message.guild) {
    if (config.debug) console.log(`${message.author.tag}: ${message.content}`);
    const args = message.content.split(" ");
    if (commands[args[0]]) commands[args[0]](client, message);
  }
  /* if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return; */

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
   if (comando === "gode") {
    //identifica a pessoa com @N7
    message.reply(' exemplo');
    //mete só o nome da pessoa que faz o comando
    //const m = await message.channel.send(`${message.author.username}`);
  } 

  /* if (comando === "verify") {
    const m = await message.channel.send("Para ficares verificado no servidor clica aqui");
  } */
});

/*  client.on('raw', async dados => {
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

 }); */

client.login(secrets.secrets.botToken);