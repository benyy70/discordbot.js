//Copyright https://github.com/xbeny | https://bennyleaks.xyz | Powered by Benny Leaks & xbeny community.
const botconfig = require("./benyyconfig.json");
const Discord = require("discord.js");
const prefix = " "/*Bot Prefix*/
var nazwabota = " "/*Bot Name*/


const client = new Discord.Client({disableEveryone: true})

client.on("ready", async () => {
    client.user.setActivity(" ", { type: "WATCHING"})/*Bot Activity*/
    console.log(`Login in: ${client.user.tag}`)
});

client.on("message", message => {
    if (message.content === "ping") {
        message.reply('pong');/*Reply Message*/
    }
});

client.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()


if (command == "say") {/*Say*/
    message.delete();
    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3))
    else
    return message.channel.send("You don't have permission!")
}

if(command == "botauthor"){ /*Bot Author (If you are using this bot then remove this command or leave it. Under no circumstances can you assign yourself the copyright to this bot;)*/
    var embed = new Discord.MessageEmbed()
    .setColor("BLUE")/*Embed Color*/
    .setAuthor("xbeny#4907")

    return message.channel.send(embed)

}
if(command == "botinfo"){/*Bot Info (If you are using this bot then remove this command or leave it. Under no circumstances can you assign yourself the copyright to this bot;)*/
    var embed = new Discord.MessageEmbed()
    .addField("Information:", "This bot was written by xbeny#4907. It is used to make it easier for users to use server. When you see any bug related to the bot, contact the author.")
    .setColor("BLUE")/*Embed Color*/
    .setTimestamp()
    .setFooter(message.member.user.tag, message.member.user.avatarURL())
    .setAuthor(message.member.user.username, message.author.avatarURL())
    .setThumbnail(message.guild.iconURL())


    return message.channel.send(embed)
}
if(command == "serverinfo"){/*Server Info*/
    var embed = new Discord.MessageEmbed()
    .addField("Server Name:", message.guild.name, false)
    .addField("Server Owner:", message.guild.owner.user.tag, false)
    .addField("Information:", " ")/*Information*/
    .setColor("BLUE")/*Embed Color*/
    .setTimestamp()
    .setFooter(message.member.user.tag, message.member.user.avatarURL())
    .setAuthor(message.member.user.username, message.author.avatarURL())
    .setThumbnail(message.guild.iconURL())


    return message.channel.send(embed)
}
if(command == "help"){
    var embed = new Discord.MessageEmbed()
    .setTitle("SERVER ASSISTANCE")
    .addField("Bot author:", message.guild.owner.user.tag, false)
    .addField("Server commands:", `${prefix}botauthor\n${prefix}botinfo\n${prefix}serverinfo`)
    .setColor("BLUE")
    .setTimestamp()
    .setFooter(message.member.user.tag, message.member.user.avatarURL())
    .setAuthor(message.member.user.username, message.author.avatarURL())
    .setThumbnail(message.guild.iconURL())
    return message.channel.send(embed)
}
if(command == "polls"){
    if(!args[0]) return message.channel.send("Write what u would to text in polls!");
    var wiadomosc = message.content.slice([prefix.length+5])
    var embed = new Discord.MessageEmbed()
    .setAuthor(message.member.user.username, message.member.user.avatarURL())
    .setColor("BLUE")/*Embed Color*/
    .setFooter("😈Your Choice!😈")/*Embed Footer*/
    .setTimestamp()
    .setAuthor(message.member.user.username, message.author.avatarURL())
    .setThumbnail(message.guild.iconURL())
    let yourchannel = message.guild.channels.cache.get(" ")/*Channel ID*/

    let ez = yourchannel.send(embed)
    .then(async message => {
        await message.react(" ")/*Emoji ID*/
        await message.react(" ")/*Emoji ID*/
    })
    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3))
    else
    return message.channel.send("You don't have permissions!")
}
if(command === 'kick'){
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("You don't have permission!");
    let toKick = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(!args[0]) return message.channel.send('Enter the nick of the user you want to kick!');
    if(!toKick) return message.channel.send(`${args[0]} not a member of this community`);
    if(!reason) return message.channel.send('Enter a reason for kicking this user!');

    if(!toKick.kickable){
        return message.channel.send('Users who are in administration cannot be kicked out!');
    }

    if(toKick.kickable){
        let x = new Discord.MessageEmbed()
        .setTitle('Kick')
        .addField('Kicked person:', toKick)
        .addField('Kicked by:', message.author)
        .addField('Reason:', reason)
        .setTimestamp()
        .setFooter(message.member.user.tag, message.member.user.avatarURL())
        .setThumbnail(message.guild.iconURL())
        .setColor("RED");/*Embed Color*/

        message.channel.send(x);
        toKick.kick();
    }
}
if(command === 'ban'){
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission!");
    let toBan = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(!args[0]) return message.channel.send('Enter the nick of the user you want to ban!');
    if(!toBan) return message.channel.send(`${args[0]} not a member of this community`);
    if(!reason) return message.channel.send('Enter a reason for banning this user!');

    if(!toBan.bannable){
        return message.channel.send('Users who are in administration cannot be banned out!');
    }

    if(toBan.bannable){
        let x = new Discord.MessageEmbed()
        .setTitle('Ban')
        .addField('Banned Person:', toBan)
        .addField('Banned by:', message.author)
        .addField('Reason:', reason)
        .setTimestamp()
        .setFooter(message.member.user.tag, message.member.user.avatarURL())
        .setThumbnail(message.guild.iconURL())
        .setColor("RED");/*Embed Color*/

        message.channel.send(x);
        toBan.ban();
    }
}
if(command == "announce"){/*Announce*/
    if(!args[0]) return message.channel.send('Write what do you change!');
    var wiadomosc = message.content.slice([prefix.length+8])
    var embed = new Discord.MessageEmbed()
    .setAuthor(message.member.user.username, message.member.user.avatarURL())
    .setColor("BLUE")/*Embed Color*/
    .setTimestamp()
    .setThumbnail("https://www.botghost.com/img/icons/announcements.png")
    let yourchannel2 = message.guild.channels.cache.get(" ")/*Channel ID*/
    let ez2 = yourchannel2.send(embed)

}
if(command == "dw"){/*Dark Web*/
    message.delete();
    if(!args[0]) return message.channel.send("Write what you wanted to write on the darkweb!");
    var wiadomosc = message.content.slice([prefix.length+2])
    var embed = new Discord.MessageEmbed()
    .addField("DW:", wiadomosc, false)
    .setColor("BLACK")/*Embed Color*/
    .setTimestamp()
    .setFooter("🕵🏿🇩​🇦​🇷​🇰​🇼​🇪​🇧​🕵🏿")
    .setThumbnail("https://i.pinimg.com/originals/49/5f/ef/495fef912c4f0dacb7ae37a6682b73be.jpg")
    let yourchannel3 = message.guild.channels.cache.get(" ")/*Channel ID*/
    let ez3 = yourchannel3.send(embed)
}

if(command == "clear"){/*Messages Cleaner*/
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission!");
    if(!args[0]) return message.channel.send("Choose how many messages you want to delete.");
    message.delete();
    message.channel.bulkDelete(args[0]).catch(e => { message.channel.send("You can only delete 100 messages at a time.")});
    message.channel.send(`Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
}
});

client.login(botconfig.token)
