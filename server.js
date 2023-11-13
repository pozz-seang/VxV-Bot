const { Client, GatewayIntentBits } = require("discord.js");
const { app } = require("./config");
const statusOptions = require('./bot/optionsStatus');
const { gameFlip } = require("./bot/game");
const { getName } = require("./bot/user");
const { Balance, ChangeMoney } = require("./bot/wallet");
const { readData } = require("./core/datauser");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMessageReactions
    ]
})

client.login(app.token);

client.on('ready', () => {
    console.log("Project is start running!");
    console.log(`Logged in as ${client.user.tag}!`);
    statusOptions(client)
    readData()
});


client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return
    const prefix = msg.content.slice(0, 1).toLowerCase()
    if (prefix != "v") return
    req = msg.content.slice(1).split(" ")

    switch (req[0].toLowerCase()) {
        case "flip":
        case "f":
        case "cf":
            gameFlip(msg, req)
            break
        case 'b':
        case "bal":
        case "balance":
            msg.channel.send(`💵 **| ${getName(msg)}**, you currently have **__${Balance(msg.author.id)}__ !**`)

            break
        case "v":
            console.log(ChangeMoney(msg.author.id, -10000));
            

    }
})






const flip = () => {
    const cf = ["t", "h"]
    const flip = cf[(Math.floor(Math.random() * cf.length))]
    return flip
}
