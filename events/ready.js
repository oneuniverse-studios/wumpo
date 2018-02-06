exports.run = (client) => {
  client.user.setPresence({ game: { name: 'you', type: 2 } });
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
}
