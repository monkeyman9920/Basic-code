const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.user.tag) is online`)
  )}
  
  client.login('token')
  
///you need discord.js 12.5.3 and nodejs for this to work
