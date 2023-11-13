const fs = require("fs");
let jsonFile = require("jsonfile");

const user = JSON.parse(fs.readFileSync("core/datauser.txt"));

const saveData = () => {
  jsonFile.writeFile("core/datauser.txt", user);
};

const checkUser = (userId) => {
  if (!user[userId]) {
    user[userId] = {
      money: 100,
    };
  }
};

module.exports = {
  user,
  saveData,
  checkUser  
};
