const botconfig = require("./benyyconfig.json");
const Discord = require("discord.js");
const prefix = "."
var nazwabota = "!Benny-Leaks"


const client = new Discord.Client({disableEveryone: true})

client.on("ready", async () => {
    client.user.setActivity("Benny-Leaks | .help", { type: "WATCHING"})
    console.log(`Zalogowano jako ${client.user.tag}`)
});

client.on("message", message => {
    if (message.content === "benny") {
        message.reply('to kox totalny!');
    }
});

client.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()


if (command == "say") {
    message.delete();
    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3))
    else
    return message.channel.send("Nie posiadasz permisji!")
}

if(command == "botauthor"){
    var embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor("benny70#1337")

    return message.channel.send(embed)

}
if(command == "botinfo"){
    var embed = new Discord.MessageEmbed()
    .addField("Bot name:", "Benny-Leaks")
    .addField("Bot author:", message.guild.owner.user.tag, false)
    .addField("Information:", "This bot was written by benny#1337. It is used to make it easier for users to use server. When you see any bug related to the bot, contact the author.")
    .setColor("BLUE")
    .setTimestamp()
    .setFooter(message.member.user.tag, message.member.user.avatarURL())
    .setAuthor(message.member.user.username, message.author.avatarURL())
    .setThumbnail(message.guild.iconURL())


    return message.channel.send(embed)
}
if(command == "serverinfo"){
    var embed = new Discord.MessageEmbed()
    .addField("Server Name:", message.guild.name, false)
    .addField("Server Owner:", message.guild.owner.user.tag, false)
    .addField("Information:", "This server was created by benny70#1337. Scripts and server packages with leaks are published on the server. We are currently developing dynamically and we are also working on other scripts, not only lua. If you have any problem with scripts contact the owners.")
    .setColor("BLUE")
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
    .addField("Benny-Leaks", wiadomosc, false)
    .setColor("BLUE")
    .setFooter("😈Your Choice!😈")
    .setTimestamp()
    .setAuthor(message.member.user.username, message.author.avatarURL())
    .setThumbnail(message.guild.iconURL())
    let yourchannel = message.guild.channels.cache.get("773149267064782858")

    let ez = yourchannel.send(embed)
    .then(async message => {
        await message.react("773160181328510976")
        await message.react("773160180874477569")
    })
    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3))
    else
    return message.channel.send("You don't have permissions!")
}
if(command === 'kick'){
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Nie posiadasz permisji!");
    let toKick = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(!args[0]) return message.channel.send('Podaj nick użytkownika, którego chcesz wyrzucić!');
    if(!toKick) return message.channel.send(`${args[0]} nie jest członkiem tej społeczności!`);
    if(!reason) return message.channel.send('Podaj powód wyrzucenia tego użytkownika!');

    if(!toKick.kickable){
        return message.channel.send(':x: Nie można wyrzucać użytkowników, którzy są w administacji! :x:');
    }

    if(toKick.kickable){
        let x = new Discord.MessageEmbed()
        .setTitle('Kick')
        .addField('Wyrzucony użytkownik:', toKick)
        .addField('Wyrzucił', message.author)
        .addField('Powód', reason)
        .setTimestamp()
        .setFooter(message.member.user.tag, message.member.user.avatarURL())
        .setThumbnail(message.guild.iconURL())
        .setColor("RED");

        message.channel.send(x);
        toKick.kick();
    }
}
if(command === 'ban'){
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nie posiadasz permisji!");
    let toBan = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(!args[0]) return message.channel.send('Podaj nick użytkownika, którego chcesz zbanować!');
    if(!toBan) return message.channel.send(`${args[0]} nie jest członkiem tej społeczności!`);
    if(!reason) return message.channel.send('Podaj powód zbanowania tego użytkownika!');

    if(!toBan.bannable){
        return message.channel.send('Nie można banować użytkowników, którzy są w administacji!');
    }

    if(toBan.bannable){
        let x = new Discord.MessageEmbed()
        .setTitle('Ban')
        .addField('Zbanowany użytkownik:', toBan)
        .addField('Zbanował', message.author)
        .addField('Powód', reason)
        .setTimestamp()
        .setFooter(message.member.user.tag, message.member.user.avatarURL())
        .setThumbnail(message.guild.iconURL())
        .setColor("RED");

        message.channel.send(x);
        toBan.ban();
    }
}
if(command === "warn"){
    if(!message.member.hasPermission("WARN_MEMBERS")) return message.channel.send("Nie posiadasz permisji!");
    let toWarn = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(!args[0]) return message.channel.send("Podaj nick użytkownika, którego chcesz zwrócić uwagę!");
    if(!toWarn) return message.channel.send(`${args[0]} nie jest członkiem tej społeczności`);
    if(!reason) return message.channel.send("Podaj powód ostrzeżenia tego użytkownika!");

    if(!toWarn.warns){ 

    }
}
if(command == "announce"){
    if(!args[0]) return message.channel.send('Napisz co zostało zmienione.');
    var wiadomosc = message.content.slice([prefix.length+8])
    var embed = new Discord.MessageEmbed()
    .setAuthor(message.member.user.username, message.member.user.avatarURL())
    .addField("Benny-Leaks", wiadomosc, false)
    .setColor("BLUE")
    .setTimestamp()
    .setThumbnail("https://www.botghost.com/img/icons/announcements.png")
    let yourchannel2 = message.guild.channels.cache.get("772571359930351636")
    let ez2 = yourchannel2.send(embed)

}
if(command == "dw"){
    message.delete();
    if(!args[0]) return message.channel.send("Napisz co chciałeś napisać na darkwebie!");
    var wiadomosc = message.content.slice([prefix.length+2])
    var embed = new Discord.MessageEmbed()
    .addField("Anonimowa wiadomość:", wiadomosc, false)
    .setColor("BLACK")
    .setTimestamp()
    .setFooter("🕵🏿🇩​🇦​🇷​🇰​🇼​🇪​🇧​🕵🏿")
    .setThumbnail("https://i.pinimg.com/originals/49/5f/ef/495fef912c4f0dacb7ae37a6682b73be.jpg")
    let yourchannel3 = message.guild.channels.cache.get("750389972066107532")
    let ez3 = yourchannel3.send(embed)
}

if(command == "clear"){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie posiadasz permisji!");
    if(!args[0]) return message.channel.send("Określ, ile wiadomości chcesz usunąć.");
    message.delete();
    message.channel.bulkDelete(args[0]).catch(e => { message.channel.send("Możesz usunąć tylko 100 wiadomości naraz.")});
    message.channel.send(`Pomyślnie usunięto \`${args[0]} wiadomości\``).then(m => m.delete({ timeout: 5000 }));
}
});

client.login(botconfig.token)
