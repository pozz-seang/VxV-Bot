const { user, saveData } = require("../core/datauser");
const { formatNumberM } = require("./functions");
const { getName } = require("./user");

const balance = (userId) => {
  return user[userId] ? Number(user[userId].money) : 0;
};

const changeMoney = (userId, money) => {
  if (!user[userId]) return;
  const userMoney = user[userId].money;
  return (user[userId].money = Number(userMoney) + Number(money));
};

const addMoney = (msg, money) => {
  changeMoney(msg.author.id, money)
  msg.channel.send(`💵 **| ${getName(msg)}**, you have add **__${formatNumberM(money)}__ !**`);
}


module.exports = {
  balance,
  changeMoney,
  addMoney
};
