const discord = require('discord.js');

const bot = new discord.Client();

const token = "YourOwnToken";

bot.on('ready', () => {
    console.log("I'm up and running now!");
});

bot.on('message', (message) => {
    switch (message.content) {
        case "!ping":
            message.channel.send(bot.ping + "ms, Pong!");
        break;
        case "!help":
            message.channel.send("-- Commands --");
            message.channel.send("- !ping");
            message.channel.send("- !setbotstatus");
        break;
        case "!setbotstatus":
            bot.user.setGame("with InspectorGadget");
            message.reply("My Status has been set!");
        break;
    }
});

bot.login(token);