
const Discord = require('discord.js')
const client = new Discord.Client()


var prefix = '/'
client.login(process.env.TOKEN)

client.on('ready', function(){
     console.log("je suis connecté")
});

client.on('message' , function(message){
              if(message.content === (prefix + "stop")){
			 message.channel.send('au revoir... :sleeping: ')
             console.log("je me déconnecte")
             message.delete().then(client.destroy())
              }
});

client.on('message', function(message){
	if(message.content === ('ping')){
    message.channel.send('Pong!');
	}
})

client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
})
	
client.on('message', function(message){
		if(message.content === ('Trol')){
    	const webAttachment = new Discord.Attachment('https://static.anidub.com/blog/2011/04/49811.jpg')
		message.channel.send(webAttachment)
		}
})

client.on('message', function(message){
		if(message.content === ('Lol')){
    	const webAttachment = new Discord.Attachment('http://gif-finder.com/wp-content/uploads/2015/05/LOL-Trol-Face.gif')
		message.channel.send(webAttachment)
		}
})


