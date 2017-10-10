const discord = require('discord.js');

const bot = new discord.Client();

const token = "MzY2ODE4NzcyMDY3Mjg3MDQy.DLzTLQ.2wBfX9kZ-62H7hOMsSBSSuRdGxc";

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