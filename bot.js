var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "." //The text before commands, you can put anything that you prefer

    if(message.author.id != "598499537023270912" && message.channel.id === "595636121124208640"){
        if(msg.startsWith('.', 0)){
            if(msg === prefix + "j1" && message.channel.id === "595636121124208640"){
                message.channel.send('========QUESTION NO. 1========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "j2" && message.channel.id === "595636121124208640"){
                message.channel.send('========QUESTION NO. 2========') // Sends a message to the channel, with the content
                }
             if(msg === prefix + "j3" && message.channel.id === "595636121124208640"){
                message.channel.send('========QUESTION NO. 3========') // Sends a message to the channel, with the content
             }
            if(msg === prefix + "j4" && message.channel.id === "595636121124208640"){
                message.channel.send('========QUESTION NO. 4========') // Sends a message to the channel, with the content
            }
            if(msg === prefix + "j5" && message.channel.id === "595636121124208640"){
                message.channel.send('========QUESTION NO. 5========') // Sends a message to the channel, with the content
            }
            if(msg === prefix + "j6" && message.channel.id === "595636121124208640"){
                message.channel.send('========QUESTION NO. 6========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "j7" && message.channel.id === "595636121124208640"){
                message.channel.send('========QUESTION NO. 7========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "j8" && message.channel.id === "595636121124208640"){
                message.channel.send('========QUESTION NO. 8========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "c9" && message.channel.id === "595640668924280848"){
                message.channel.send('========QUESTION NO. 9========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "c10" && message.channel.id === "595640668924280848"){
                message.channel.send('========QUESTION NO. 10========') // Sends a message to the channel, with the content
            }
        
           
        }
    }
});

bot.login(process.env.BOT_TOKEN)
