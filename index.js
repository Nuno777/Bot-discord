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
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  if (comando === "nuno") {
    //identifica a pessoa com @N7
    message.channel.send('Sempre foi GODE');
    //mete só o nome da pessoa que faz o comando
    //const m = await message.channel.send(`${message.author.username}`);
  }

  /* if (comando === "verify") {
   const m = await message.channel.send("Para ficares verificado no servidor clica aqui");
   m.edit=(`naosei`);
 }  */
});

client.login(secrets.secrets.botToken);