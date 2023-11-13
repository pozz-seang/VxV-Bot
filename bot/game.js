const { user } = require("../core/datauser");
const { formatNumberM } = require("./functions");
const { getName } = require("./user");
const { changeMoney, balance } = require("./wallet");

const gameFlip = async (msg, req) => {
  const pFlip = ["tails", "heads"];
  const cf = {
    bit: "heads",
    money: 1,
    msg: "",
  };

  if (req[1]) {
    if (isNaN(req[1]))
      return msg.channel.send(`🚫** | ${getName(msg)}**, Invalid arguments!!`);
    cf.money = Number(req[1]);
  }

  if (balance(msg.author.id) < cf.money) return msg.channel.send(
    `**🚫 | ${getName(msg)}** you don't have enough coin!`
  );

  if (req[2]) {
    switch (req[2].toLowerCase()) {
      case "t":
      case "tail":
      case "tails":
        cf.bit = "tails";
        break;
      case "h":
      case "head":
      case "heads":
        cf.bit = "heads";
        break;
      default:
        msg.channel.send(`🚫** | ${getName(msg)}**, Invalid arguments!!`);
        return;
    }
  }

  const msgRef = await msg.channel.send(`**${getName(msg)}** spent 💵 **${formatNumberM(cf.money)}** and chose **${cf.bit}**\n The coin spins... 🪙`);

  const flip = pFlip[Math.floor(Math.random() * pFlip.length)];

  if (cf.bit == flip) {
    cf.msg = `won 💵 **${formatNumberM(cf.money * 2)}**`;
    changeMoney(msg.author.id, +cf.money);
  } else {
    changeMoney(msg.author.id, -cf.money);
    cf.msg = `lost it all... :(`;
  }

  setTimeout(() => {
    msgRef.edit(`**${getName(msg)}** spent 💵 **${formatNumberM(cf.money)}** and chose **${cf.bit}**\n The coin spins... 🪙 and you ${cf.msg}`);
  }, 1000);
};

module.exports = {
  gameFlip,
};

function isNumber(value) {
  return typeof value === "number";
}

async function gFlip(msg, req) {
  if (!req[1]) {
    sendEB(msg, "Please provide the correct amount of arguments...");
    return;
  }

  let betMoney = convertMoney(req[1]);
  if (betMoney != "all" && betMoney != "All" && isNaN(betMoney)) {
    sendEB(msg, "Please provide the correct amount of arguments...");
    return;
  }

  if (!req[2]) {
    sendEB(msg, "Please select heads or tails.");
    return;
  }

  if (talkedRecently.has(msg.author.id)) {
    sendEB(msg, "This command is on cooldown. Please wait 2 seconds");
  } else {
    let money = 0;
    money = await checkMoney(msg, msg.author.id, false);

    if (money <= 0) {
      sendEB(msg, "You do not have money");
      return;
    } else if (money < betMoney || betMoney == "all" || betMoney == "All") {
      betMoney = money;
    }

    var TH = req[2];
    if (
      TH == "h" ||
      TH == "H" ||
      TH == "head" ||
      TH == "Head" ||
      TH == "heads" ||
      TH == "Heads" ||
      TH == "HEADS"
    ) {
      TH = "HEADS";
    } else if (
      TH == "t" ||
      TH == "T" ||
      TH == "tail" ||
      TH == "Tail" ||
      TH == "tails" ||
      TH == "Tails" ||
      TH == "TAILS"
    ) {
      TH = "TAILS";
    } else {
      sendEB(msg, "Please select heads or tails.");
      return;
    }

    var results = Math.floor(Math.random() * 2) === 0 ? "HEADS" : "TAILS";

    if (results == TH) {
      money += +betMoney;
    } else {
      money += -betMoney;
    }

    await bokdokluy(msg, money);
    sendEB(
      msg,
      results +
      "! Your new balance is: " +
      new Intl.NumberFormat().format(money)
    );

    //cooldonw
    talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 2000);
  }
}
