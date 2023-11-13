const { user, saveData } = require("../core/datauser")

const Balance = (userId) => {
    saveData()
    console.log(user);
    return user[userId] ? user[userId].money.toLocaleString() : 0
}


const ChangeMoney = (userId, money) => {
    if (!user[userId]) return 
    const userMoney = user[userId].money
    return user[userId].money = userMoney + money
}



module.exports = {
    Balance,
    ChangeMoney

}