const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

let client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', function () {
    console.log("Discord bot is ready!");
    onClientReady();
});

function onClientReady()
{
    // Listen to Messages in the channel
    client.on('message', (message) => onMessageReceived(message));
}

// Upon a message being received, handle how we interact
function onMessageReceived(message)
{
    if (message.content === 'hey')
    {
        console.log("Hey back at you!");
        message.reply("Hey buddy");
    }
}

client.login(token);