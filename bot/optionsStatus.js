const { ActivityType } = require("discord.js");

module.exports = client => {
    // const options = [
    //     { type: ActivityType.Watching, content: 'រឿង' },
    //     { type: ActivityType.Listening, content: 'ចម្រៀង' },
    //     { type: ActivityType.Playing, content: 'ជាមួយអូន' },
    //     { type: ActivityType.Competing, content: 'ផ្ទះ' }
    // ];
    // setInterval(() => {
    //     const index = Math.floor(Math.random() * options.length);
    //     client.user.setActivity(options[index].content, { type: options[index].type });
    // }, 1000)
    
    client.user.setActivity("VxV", { type: ActivityType.Playing });
}