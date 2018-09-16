const Discord = require('discord.js');
const Client = new Discord.Client();

const prefix = 'k!'

Client.on('ready', () => {
  console.log('Ready!')
})

Client.on('message', message => {
  if (message.author !== Client.user) return;
    if (message.content.startsWith(`${prefix}ping`)) {
      message.channel.send('Pong!');
    }
    if (message.content.startsWith(`${prefix}birthday`)) {
      message.channel.send('...')
    }
  
})

Client.login(process.env.TOKEN)
