const { Client } = require('discord.js')
const client = new Client({ intents: 32767 })

client.on('ready', () => {
  console.log(`${client.user.tag) is online`)
  )}
  
  client.login('token')
