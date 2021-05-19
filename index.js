const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN;

bot.login(TOKEN);
let game="за сервером";
let stream="";
bot.on('ready', () => {
  bot.user.setActivity(game, { type: 'WATCHING', url: "https://www.youtube.com/watch?v=KeINtGHxfHU&ab_channel=14REGIONGAMING" });
  console.info(`Logged in as ${bot.user.tag}!`);
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
	case "stream" :
		game=args[0];
		stream=args[1]
		StreamingVideo();
		msg.channel.send('> Теперь я стримлю '+args[0]+" "+stream);
		break;
	case "send" :
		let channelId = args[0].replace(/[^0-9]/g, "");
		let message="";
		var k=0;
		for (k=1;k<args.length;k++){
			message=message+" "+args[k];
		}
		const channel = bot.channels.find(channel => channel.id === channelId)
		if (channel==null){
		msg.channel.send('> Искомый текстовый канал не найден, попробуйте еще раз');	
		} else {
		channel.send(""+message)
		msg.channel.send('> Я отправил Ваше сообщение на '+args[0]+' с текстом:'+message);
		console.info(message);
		}
		break;
		
}
});
function playGame() {
  bot.user.setActivity(game, {type: 'Playing'});
}
function watchGame() {
  bot.user.setActivity(game, {type: 'WATCHING'});
}
function StreamingVideo() {
   bot.user.setActivity(game, { type: "STREAMING", url: stream });
}