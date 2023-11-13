const { Client, GatewayIntentBits } = require("discord.js");
const { app } = require("./config");
const statusOptions = require("./bot/optionsStatus");
const { gameFlip } = require("./bot/game");
const { getName } = require("./bot/user");
const { balance, changeMoney, addMoney } = require("./bot/wallet");
const { checkUser, saveData } = require("./core/datauser");
const { formatNumberM } = require("./bot/functions");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

client.login(app.token);

client.on("ready", () => {
  console.log("Project is start running!");
  console.log(`Logged in as ${client.user.tag}!`);
  statusOptions(client);
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;
  const prefix = msg.content.slice(0, 1).toLowerCase();
  if (prefix != "v") return;
  req = msg.content.slice(1).split(" ");

  checkUser(msg.author.id);

  switch (req[0].toLowerCase()) {
    case "flip":
    case "f":
    case "cf":
      gameFlip(msg, req);
      break;
    case "b":
    case "bal":
    case "balance":
    case "cash":
      msg.channel.send(`💵 **| ${getName(msg)}**, you currently have **__${formatNumberM(balance(msg.author.id))}__ !**`);
      break;
    case 'add':
      addMoney(msg, req[1])
      break
  }

  saveData();
});
