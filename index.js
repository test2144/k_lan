require('dotenv').config();
const { Client, Intents } = require('discord.js');
const TOKEN = process.env.TOKEN;

const bot = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS, //also enable in discord developer portal
		Intents.FLAGS.GUILD_PRESENCES // This line is required to track presence data
    ] 
})
bot.login(TOKEN);
let game="за сервером";
let stream="";
bot.on('ready', () => {
  bot.user.setActivity(game, { type: 'WATCHING'});
  console.info(`Logged in as ${bot.user.tag}!`);
});
bot.on('presenceUpdate', async (oldPresence, newPresence) => {
    let guild = oldPresence.guild;
	const member = newPresence.member;
    const activities = member.presence.activities[0];
    const role = newPresence.guild.roles.cache.get('950377866342846494')
	console.info(String(activities))
	
	switch (String(activities)) {
	case "Counter-Strike: Global Offensive" :
		return newPresence.member.roles.add(role);
	case "Dota2" :
		return newPresence.member.roles.add(role);
	}
});
