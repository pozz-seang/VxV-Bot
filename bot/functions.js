const { EmbedBuilder } = require("discord.js")

const formatNumberM = (number)=>{
  return Number(number).toLocaleString()
}

module.exports = {
    sendEB,
    avatar,
    formatNumberM
}

function sendEB(msg, text){
    msg.channel.send({
        embeds: [new EmbedBuilder().setColor("#735BA5")
            .setDescription(text)]
    })
}

function avatar(msg) {
    msg.channel.send({
      embeds: [new EmbedBuilder()
        .setTitle("Hello")
        .setDescription("Name : " + msg.author.username + "#" + msg.author.discriminator + "\nId : " + msg.author.id)
        .setColor("Red")
        .setImage("https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png?size=2048")
      ]
    })
  }

