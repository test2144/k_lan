const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN;

bot.login(TOKEN);
let game="за сервером";
let stream="";
bot.on('ready', () => {
  bot.user.setActivity(game, { type: 'WATCHING'});
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('presenceUpdate', async (oldPresence, newPresence) => {
    const roleD2 = newPresence.guild.roles.cache.get('949641980433014837')
    const roleG = newPresence.guild.roles.cache.get('950231538090512415')
    const member = newPresence.member
    const activities = member.user.presence.activities[0];
  
    switch (String(activities)) {
	case "Genshin Impact" :
		return newPresence.member.roles.add(role);
	case "Dota 2" :
		return newPresence.member.roles.add(roleD2);
	}
})
