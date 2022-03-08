const { Client, Intents } = require('discord.js');
const TOKEN = process.env.BOT_TOKEN;

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
bot.on("presenceUpdate", (oldPresence, newPresence) => {
    let guild = newPresence.guild;
	const member = newPresence.member;
    const activities = member.presence.activities[0];
    let roleD2 = newPresence.guild.roles.cache.get('949641980433014837')
    let roleG = newPresence.guild.roles.cache.get('950231538090512415')
    let roleCS = newPresence.guild.roles.cache.get('950450953977466960')
	console.info(String(activities)+" "+newPresence.user);
    switch (String(activities)) {
	case "Genshin Impact" :
		 newPresence.member.roles.add(roleG);
	case "Dota 2" :
		return newPresence.member.roles.add(roleD2);
	case "Counter-Strike: Global Offensive" :
		return newPresence.member.roles.add(roleCS);
	}
});
bot.on('message', msg => {
	const args = msg.content.trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	switch (command) {
		case "play" :
		game="";
		var k=0;
		for (k=0;k<args.length;k++){
			game=game+" "+args[k];
		}
		playGame();
		msg.channel.send('> Теперь я играю в '+game);
		break;
	case "watch" :
		game="";
		var k=0;
		for (k=0;k<args.length;k++){
			game=game+" "+args[k];
		}
		watchGame();
		msg.channel.send('> Теперь я смотрю '+game);
		break;
	case "send" :
		let channelId = args[0].replace(/[^0-9]/g, "");
		let message="";
		var k=0;
		for (k=1;k<args.length;k++){
			message=message+" "+args[k];
		}
		const channel = bot.channels.find(channel => channel.id === channelId)
		
		channel.send(""+message)
		msg.channel.send('> Я отправил Ваше сообщение на '+args[0]+' с текстом:'+message);
		console.info(message);
		break;
	case "play" :
		game="";
		var k=0;
		for (k=0;k<args.length;k++){
			game=game+" "+args[k];
		}
		playGame();
		msg.channel.send('> Теперь я играю в '+game);
		break;
	}
});
function playGame() {
  bot.user.setActivity(game, {type: 'Playing'});
}
function watchGame() {
  bot.user.setActivity(game, {type: 'WATCHING'});
}
