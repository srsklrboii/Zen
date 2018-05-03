/*
    Zen Discord bot created by <₳₴₱Ɇ₵₮> [Ɏ₮] ł₵ØĐɆⱫⱫ ₵Ø₥₥Ʉ₦ł₮Ɏ#5784
    This bot was entirely rewritten on Friday the 6th of April, 2018
    Don't fork or skid any of the commands, or you will be exposed.
*/
const Discord = require("discord.js")
const prefix = "]"
const owner = "<₳₴₱Ɇ₵₮> [Ɏ₮] ł₵ØĐɆⱫⱫ ₵Ø₥₥Ʉ₦ł₮Ɏ#5784"
const ytdl = require("ytdl-core")
const encode = require("strict-uri-encode")
const superagent = require("superagent")

var ball = [
    "Yes.",
    "No.",
    "I don't know.",
    "You're asking a bot this.",
    "What?",
]

var sixsided = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
]

var eightsided = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
]

var tensided = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
]

var gayrate = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
]

var rps = [
    "Rock",
    "Paper",
    "Scissors",
]

var rpswinlose = [
    "You won!",
    "I won!",
]

var bot = new Discord.Client;
var feedbackwebhook = new Discord.WebhookClient(process.env.feedbackapiid, process.env.feedbackapitoken)

bot.on('ready', () => {
    console.log("CoolBot is up and running!"),
    bot.user.setActivity('for ]help', { type: 'WATCHING' })
});

bot.on('message', async function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.channel.type === "dm") return message.channel.send("Please execute this command in a server!")
    var args = message.content.substring(prefix.length).split(" ")
    switch (args[0].toLowerCase()) {
        case "help":
	if (!args[1]) {
		message.channel.send(`Commands are in your DM's, ${message.author}!`)
        	var embed = new Discord.RichEmbed()
            		.setAuthor("Available Commands")
            		.addField("Normal Commands", "]help, ]ping, ]pong, ]cookie, ]say <whatever here>, ]noticeme")
            		.addField("Info Commands", "]userinfo <optional user>, ]serverinfo, ]getavatar <optional user>")
            		.addField("8ball Commands", "]8ball <question here>")
            		.addField("Rolling Dice", "]6sided, ]8sided, ]10sided")
            		.addField("Rating Commands", "]gayrate <optional user>, ]lesbianrate <optional user>, ]straightrate <optional user>, ]bisexualrate <optional user>, ]dankrate <optional user>, ]waifurate <optional user>")
            		.addField("Fun Commands", "]punch <user>, ]stab <user>, ]shoot <user>, ]bomb <user>, ]annihilate <user>, ]rps <whatever here>, ]dog. ]bean")
            		.addField("Fun Music Commands", "]nootnoot, ]imgay")
            		.addField("Search Commands", "]search <search query here>")
            		.addField("Moderation Commands", "]kick <user> <reason>, ]ban <user> <reason>, ]purge <number between 1 and 100>, ]mute <user>, ]unmute <user>")
            		.addField("Bot Commands", "]botinfo, ]feedback <feedback here>, ]invite, ]credits")
            		.addBlankField()
            		.addField("Please join our Discord server! It really helps us grow!", "https://discord.gg/9JTSAvH")
            		.setFooter(`Credits: created by ${owner}`)
	    		.setColor("RANDOM")
        	message.author.send(embed).catch(e => {
            		message.channel.send("Woops! Looks like I can't send messages/embeds to you! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
        	})
		return;
	}
	if ("ping".includes(args[1])) {
		message.channel.send("Command Name: ping\nUsage: ]ping\nReturn: a really specific ping.")
		return;
	}
	if ("pong".includes(args[1])) {
		message.channel.send("Command Name: pong\nUsage: ]pong\nReturn: what would you expect?")
		return;
	}
	if ("cookie".includes(args[1])) {
	    message.channel.send("Command name: cookie\nUsage: ]cookie\nReturn: a cookie.")
	    return;
	}
	if ("say".includes(args[1])) {
		message.channel.send("Command name: say\nUsage: ]say <put anything here>\nReturn: the bot will repeat what you put after the \say command, and delete your original message.")
		return;
	}
	if ("noticeme".includes(args[1])) {
		message.channel.send("Command name: noticeme\nUsage: ]noticeme\nReturn: the bot will ping you 10 times.")
		return;
	}
	if ("userinfo".includes(args[1])) {
		message.channel.send("Command name: userinfo\nUsage: ]userinfo <optional user mention>\nReturn: gives you the userinfo of you if no one is mentioned, and the person you mentioned, if anyone was mentioned.")
		return;
	}
	if ("serverinfo".includes(args[1])) {
		message.channel.send("Command name: serverinfo\nUsage: ]serverinfo\nReturn: the server information.")
		return;
	}
	if ("getavatar".includes(args[1])) {
		message.channel.send("Command name: getavatar\nUsage: ]getavatar <optional user mention>\nReturn: gets the avatar of you and/or anyone you mention.")
		return;
	}
	if ("8ball".includes(args[1])) {
		message.channel.send("Command name: 8ball\nUsage: ]8ball <question here>\nReturn: an answer for your question")
		return;
	}
	if ("6sided".includes(args[1])) {
		message.channel.send("Command name: 6sided\nUsage: ]6sided\nReturn: rolls a six sided dice and returns the number.")
		return;
	}
	if ("8sided".includes(args[1])) {
		message.channel.send("Command name: 8sided\nUsage: ]8sided\nReturn: rolls an eight sided dice and returns the number.")
		return;
	}
	if ("10sided".includes(args[1])) {
		message.channel.send("Command name: 10sided\nUsage: ]10sided\nReturn: rolls a 10 sided dice and returns the number.")
		return;
	}
	if ("gayrate".includes(args[1])) {
		message.channel.send("Command name: gayrate\nUsage: ]gayrate <optional user mention\nReturn: it will rate your/their gayness randomly.")
		return;
	}
	if ("lesbianrate".includes(args[1])) {
		message.channel.send("Command name: lesbianrate\nUsage: ]lesbianrate <optional user mention\nReturn: it will rate your/their lesbianness randomly.")
		return;
	}
	if ("straightrate".includes(args[1])) {
		message.channel.send("Command name: straightrate\nUsage: ]straightrate <optional user mention>\nReturn: it will rate your/their straightness randomly.")
		return;
	}
	if ("dankrate".includes(args[1])) {
		message.channel.send("Command name: dankrate\nUsage: ]dankrate <optional user mention>\nReturn: it will rate your/their dankness randomly.")
		return;
	}
	if ("waifurate".includes(args[1])) {
		message.channel.send("Command name: waifurate\nUsage: ]waifurate <optional user>\nReturn: it will rate your/their waifuness randomly.")
		return;
	}
	if ("punch".includes(args[1])) {
		message.channel.send("Command name: punch\nUsage: ]punch <user mention>\nReturn: will virtually punch the mentioned user.")
		return;
	}
	if ("stab".includes(args[1])) {
		message.channel.send("Command name: stab\nUsage: ]stab <user mention>\nReturn: will virtually stab the mentioned user.")
		return;
	}
	if ("shoot".includes(args[1])) {
		message.channel.send("Command name: shoot\nUsage: ]shoot <user mention>\nReturn: will virtually shoot the mentioned user.")
		return;
	}
	if ("bomb".includes(args[1])) {
		message.channel.send("Command name: bomb\nUsage: ]bomb <user mention>\nReturn: will virtually bomb the mentioned user.")
		return;
	}
	if ("annihilate".includes(args[1])) {
		message.channel.send("Command name: annihilate\nUsage: ]annihilate <user mention>\nReturn: will virtually annihilate the mentioned user.")
		return;
	}
	if ("rps".includes(args[1])) {
		message.channel.send("Command name: rps\nUsage: ]rps <whatever you choose>\nReturn: the bot will compete in rock paper scissors with you.")
		return;
	}
	if ("dog".includes(args[1])) {
		message.channel.send("Command name: dog\nUsage: ]dog\nReturn: will send an image of a dog to the chat.")
		return;
	}
	if ("bean".includes(args[1])) {
		message.channel.send("Command name: bean\nUsage: ]bean <user mention>\nReturn: will virtually bean the mentioned user.")
		return;
	}
	if ("nootnoot".includes(args[1])) {
		message.channel.send("Command name: nootnoot\nUsage: ]nootnoot\nReturn: plays the famous 'NOOT NOOT' by Pingu in the voice chat you're in.")
		return;
	}
	if ("imgay".includes(args[1])) {
		message.channel.send("Command name: imgay\nUsage: ]imgay <user mention>\nReturn: plays the famous 'i'm gay' by iDubZz in the voice chat you're in.")
		return;
	}
	if ("search".includes(args[1])) {
		message.channel.send("Command name: search\nUsage: ]search <query here>\nReturn: returns an LMGTFY link for the search query.")
		return;
	}
	if ("kick".includes(args[1])) {
		message.channel.send("Command name: kick\nUsage: ]kick <user mention> <reason>\nReturn: kicks the mentioned user for the reason specified.")
		return;
	}
	if ("ban".includes(args[1])) {
		message.channel.send("Command name: ban\nUsage: ]ban <user mention>\nReturn: bans the mentioned user for the reason specified.")
		return;
	}
	if ("purge".includes(args[1])) {
		message.channel.send("Command name: purge\nUsage: ]purge <number between 1 and 100>\nReturn: purges the amount of messages specified.")
		return;
	}
	if ("mute".includes(args[1])) {
		message.channel.send("Command name: mute\nUsage: ]mute <user mention>\nReturn: mutes the mentioned user.")
		return;
	}
	if ("unmute".includes(args[1])) {
		message.channel.send("Command name: unmute\nUsage: ]unmute <user mention>\nReturn: unmutes the person mentioned.")
		return;
	}
	if ("feedback".includes(args[1])) {
		message.channel.send("Command name: feedback\nUsage: ]feedback <feedback here>\nReturn: sends feedback about the bot to the developers of the bot.")
		return;
	}
	message.channel.send("If you want to view a specific command, type ``]help <command>``")
	break;

        case "ping":
        message.channel.send(`:ping_pong: Pong! It took ${bot.ping}ms to deliver this message!`)
        break;

        case "pong":
        message.channel.send("Ping?")
        break;

        case "cookie":
        message.channel.send(":cookie:")
        break;

        case "say":
        if (!args[1]) return message.channel.send("You need to specify a string of words after the command that you want me to say!")
        message.delete()
        message.channel.send(args.join(" ").slice(3))
        break;

        case "noticeme":
        message.channel.send(`${message.author} ${message.author} ${message.author} ${message.author} ${message.author} ${message.author} ${message.author} ${message.author} ${message.author} ${message.author}\nThere you just got noticed.`)
        break;

        case "userinfo":
        var userCreated = message.author.createdAt.toString().split(" ");
            var userinfotoget = message.mentions.users.first()
            if (!userinfotoget) {
                var embed = new Discord.RichEmbed()
                    .setAuthor(`User info for you`)
                    .addField("Discord name", `${message.author.username}`)
                    .addField("Discord ID", `${message.author.id}`)
                    .addField("Date of creation", "**" + userCreated[0] + '**, **' + userCreated[1] + ' ' + userCreated[2] + ' ' + userCreated[3] + '**, at **' + userCreated[4] + "**")
                    .addField("Highest role", message.member.highestRole.name)
                    .setThumbnail(message.author.avatarURL)
                    .setFooter(`Credits: made by ${owner}`)
                    .setColor("RANDOM")
                message.channel.send(embed).catch(e => {
                    nessage.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
                });
                return
            }
            var userinfoembed = new Discord.RichEmbed()
                .setAuthor(`User info for ${userinfotoget.username}`)
                .addField("Discord name", `${userinfotoget.username}`)
                .addField("Discord ID", `${userinfotoget.id}`)
                .setThumbnail(userinfotoget.avatarURL)
                .setFooter(`Credits: made by ${owner}`)
                .setColor("RANDOM")
            message.channel.send(userinfoembed).catch(e => {
                message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
            });
        break;

        case "serverinfo":
        var serverCreated = message.guild.createdAt.toString().split(" ");
        var embed = new Discord.RichEmbed()
            .setAuthor("Info about this Discord Server:")
            .addField("Server name", `${message.guild}`)
            .addField("Creation date", serverCreated[0] + ', ' + serverCreated[1] + ' ' + serverCreated[2] + ' ' + serverCreated[3] + ' at ' + serverCreated[4])
            .addField("Server ID", `${message.guild.id}`)
	    .addField("Server Region", `${message.guild.region}`)
            .addField("Members", message.guild.memberCount)
            .setColor("RANDOM")
            .setFooter(`Credits: made by ${owner}`)
            message.channel.send(embed).catch(e => {
                message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
            });
        break;

        case "getavatar":
        var avatartoget = message.mentions.users.first()
        if (!avatartoget) return message.channel.send(`${message.author}, your avatar is here: ${message.author.displayAvatarURL}`)
        message.channel.send(`${message.author}, here is the avatar of ${avatartoget}: ${avatartoget.displayAvatarURL}`)
        break;

        case "8ball":
        if (args[1]) {
            message.channel.send(ball[Math.floor(Math.random() * ball.length)]);
            return;
        } else {
            message.channel.send("There is no question for me to answer!");
            return;
        }
        
        case "6sided":
        message.channel.send("You rolled a **" + sixsided[Math.floor(Math.random() * sixsided.length)] + "**!");
        break;

        case "8sided":
        message.channel.send("You rolled a **" + eightsided[Math.floor(Math.random() * eightsided.length)] + "**!");
        break;

        case "10sided":
        message.channel.send("You rolled a **" + tensided[Math.floor(Math.random() * tensided.length)] + "**!");
        break;

        case "gayrate":
        var gaymember = message.mentions.users.first()
        if (!gaymember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Gay Rater")
                .addField(`Gay rate below :gay_pride_flag:`, `You are ${gayrate[Math.floor(Math.random() * gayrate.length)]}% gay.`)
                .setFooter(`Credits: created by ${owner}`)
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
            })
            return
        }
        var gayembed = new Discord.RichEmbed()
            .setAuthor("Gay Rater")
            .addField(`Gay rate below :gay_pride_flag:`, `${gaymember.username} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% gay.`)
            .setFooter(`Credits: created by ${owner}`)
            .setColor("RANDOM")
        message.channel.send(gayembed).catch(e => {
            message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
        })
        break;

        case "lesbianrate":
        var lesbianmember = message.mentions.users.first()
        if (!lesbianmember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Lesbian Rater")
                .addField("Lesbian rate below :gay_pride_flag:", `You are ${gayrate[Math.floor(Math.random() * gayrate.length)]}% lesbian.`)
                .setFooter(`Credits: created by ${owner}`)
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
            })
            return
        }
        var lesbianembed = new Discord.RichEmbed()
            .setAuthor("Lesbian Rater")
            .addField("Lesbian rate below :gay_pride_flag:", `${lesbianmember.username} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% lesbian.`)
            .setFooter(`Credits: created by ${owner}`)
            .setColor("RANDOM")
        message.channel.send(lesbianembed).catch(e => {
            message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
        })
        break;

        case "straightrate":
        var straightmember = message.mentions.users.first()
        if (!straightmember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Straight Rater")
                .addField("Straight rate below :gay_pride_flag:", `You are ${gayrate[Math.floor(Math.random() * gayrate.length)]}% straight.`)
                .setFooter(`Credits: created by ${owner}`)
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
            })
            return
        }
        var straightembed = new Discord.RichEmbed()
            .setAuthor("Straight Rate")
            .addField("Straight rate below :gay_pride_flag:", `${straightmember.username} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% straight.`)
            .setFooter(`Credits: created by ${owner}`)
            .setColor("RANDOM")
        message.channel.send(straightembed).catch(e => {
            message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
        })
        break;

        case "bisexualrate":
        var bisexualmember = message.mentions.users.first()
        if (!bisexualmember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Bisexual Rate")
                .addField("Bixesual rate below :gay_pride_flag:", `You are ${gayrate[Math.floor(Math.random() * gayrate.length)]}% bisexual.`)
                .setFooter(`Credits: created by ${owner}`)
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
            })
            return;
        }
        var bisexualembed = new Discord.RichEmbed()
            .setAuthor("Bisexual Rate")
            .addField("Bisexual rate below :gay_pride_flag:", `${bisexualmember.username} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% bisexual.`)
            .setFooter(`Credits: created by ${owner}`)
            .setColor("RANDOM")
        message.channel.send(bisexualembed).catch(e => {
            message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH") 
        })
        break;

        case "dankrate":
        var dankmember = message.mentions.users.first()
        if (!dankmember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Dank Rate")
                .addField("Dank rate below", `You are ${gayrate[Math.floor(Math.random() * gayrate.length)]}% dank.`)
                .setFooter(`Credits: created by ${owner}`)
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
            })
            return
        }
        var dankembed = new Discord.RichEmbed()
            .setAuthor("Dank Rate")
            .addField("Dank rate below", `${dankmember.username} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% dank.`)
            .setFooter(`Credits: created by ${owner}`)
            .setColor("RANDOM")
        message.channel.send(dankembed).catch(e => {
            message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
        })
        break;

        case "waifurate":
        var waifumember = message.mentions.users.first()
        if (!waifumember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Waifu Rate")
                .addField("Waifu rate below :shrug:", `You are ${gayrate[Math.floor(Math.random() * gayrate.length)]}/100 waifu.`)
                .setFooter(`Credits: created by ${owner}`)
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
            })
            return
        }
        var waifuembed = new Discord.RichEmbed()
            .setAuthor("Waifu Rate")
            .addField("Waifu rate below :shrug:", `${gayrate[Math.floor(Math.random() * gayrate.length)]}/100 waifu.`)
            .setFooter(`Credits: created by ${owner}`)
            .setColor("RANDOM")
        message.channel.send(waifuembed).catch(e => {
            message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
        })
        break;

        case "punch":
        var punchmember = message.mentions.users.first()
        if (!punchmember) return message.channel.send("You need to mention a person you want to punch!")
        message.channel.send(`${message.author}, you just punched **${punchmember.username}**! :punch: :scream:`)
        break;

        case "stab":
        var stabmember = message.mentions.users.first()
        if (!stabmember) return message.channel.send("You need to mention a person you want to stab!")
        message.channel.send(`${message.author}, you just stabbed **${stabmember.username}**! :knife: :dagger: :scream:`)
        break;

        case "shoot":
        var shootmember = message.mentions.users.first()
        if (!shootmember) return message.channel.send("You need to mention a person you want to shoot!")
        message.channel.send(`${message.author}, you just shot **${shootmember.username}**! :gun: :scream:`)
        break;

        case "bomb":
        var bombmember = message.mentions.users.first()
        if (!bombmember) return message.channel.send("You need to mention a person you want to bomb!")
        message.channel.send(`${message.author}, you just bombed **${bombmember.username}**! :bomb: :scream:`)
        break;

        case "annihilate":
        var annihilatemember = message.mentions.users.first()
        if (!annihilatemember) return message.channel.send("You need to mention someone you want to annihilate!")
        message.channel.send(`${message.author}, you just annihilated **${annihilatemember.username}**! :gun: :knife: :dagger: :punch: :bomb: :scream:`)
        break;

        case "rps":
        if (!args[1]) return message.channel.send("You need to specify something to battle me with!")
        message.channel.send(`You chose **${args[1]}** while I chose **${rps[Math.floor(Math.random() * rps.length)]}**!`)
        message.channel.send(rpswinlose[Math.floor(Math.random() * rpswinlose.length)])
        break;
	
        case "nootnoot":
        var voiceChannel = message.member.voiceChannel
        if (!voiceChannel) return message.channel.send("You are not in a voice channel!")
        if (!voiceChannel.joinable) return message.channel.send("I cannot join that voice channel!")
        try {
            var connection = await voiceChannel.join()
        } catch (error) {
            message.channel.send("I could not play in the voice channel for an undefined reason!")
        }
        var dispatcher = connection.playStream(ytdl("https://www.youtube.com/watch?v=Fs3BHRIyF2E"))
            .on('end', () => {
                voiceChannel.leave()
            })
        dispatcher.setVolumeLogarithmic(5 / 5)
        break;
            
        case "imgay":
        var voiceChannel = message.member.voiceChannel
        if (!voiceChannel) return message.channel.send("You are not in a voice channel!")
        if (!voiceChannel.joinable) return message.channel.send("I cannot join that voice channel!")
        try {
            var connection = await voiceChannel.join()
        } catch (error) {
            message.channel.send("I could not play in the voice channel for an undefined reason!")
        }
        var dispatcher = connection.playStream(ytdl("https://www.youtube.com/watch?v=_AZDaW3GLQw"))
            .on('end', () => {
                voiceChannel.leave()
            })
        dispatcher.setVolumeLogarithmic(5 / 5)
        break;

        case "search":
		let question = encode(args.join(" ").slice(7))
		let link = `https://www.lmgtfy.com/&q=${question}`
		message.channel.send(link).catch(e => {
			message.channel.send("Woops! Looks like I can't send links in here!")
		})
	    break;
		    
	case "dog":
		let {body} = await superagent
		.get(`http://random.dog/woof.json`);
		var embed = new Discord.RichEmbed()
			.setAuthor("Here's a dog for you!")
			.setImage(body.url)
			.setFooter(`Credits: created by ${owner}`)
			.setColor("RANDOM")
		message.channel.send(embed).catch(e => {
			message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
		})
	break;
		    
	case "bean":
	var beanmember = message.mentions.users.first()
	if (!beanmember) return message.channel.send("There is no one mentioned for you to bean!")
	message.channel.send(`${message.author}, you just beaned **${beanmember.username}**!`)
	break;
        
        case "kick":
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You do not have the permission to do this!");
        var kickedmember = message.mentions.members.first()
        if (!kickedmember) return message.reply("Please mention a valid member of this server!")
        if (kickedmember.hasPermission("KICK_MEMBERS")) return message.reply("I cannot kick this member because he/she is a mod/admin!")
        var kickreasondelete = 10 + kickedmember.user.id.length
        var kickreason = message.content.substring(kickreasondelete).split(" ");
        var kickreason = kickreason.join(" ");
        if (!kickreason) return message.reply("Please indicate a reason for the kick!")
        kickedmember.send(`You have been kicked from ${message.guild} for the following reason: ${kickreason}.`)
        kickedmember.kick(kickreason)
            .catch(error => message.reply(`Sorry @${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${kickedmember.user.username} has been kicked by ${message.author.username} because: ${kickreason}`);
        break;

        case "ban":
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You do not have the permission to do this!");
        var banmember = message.mentions.members.first()
        if (!banmember) return message.reply("Please mention a valid member of this server!")
        if (banmember.hasPermission("BAN_MEMBERS")) return message.reply("I cannot ban this member because he/she is a mod/admin!")
        var banreasondelete = 10 + banmember.user.id.length
        var banreason = message.content.substring(banreasondelete).split(" ");
        var banreason = banreason.join(" ");
        if (!banreason) return message.reply("Please indicate a reason for the ban!")
        banmember.send(`You have been banned from ${message.guild} for the following reason: ${banreason}.`)
        banmember.ban(banreason).catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${banmember} has been kicked by ${message.author.username} because: ${banreason}`);
        break;

        case "purge":
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the permission to do this!")
            if (!args[1]) return message.channel.send("Please specify a number!")
            if (args[1] >= 100) return message.channel.send("Please specify a number between 1 and 100!")
            if (args[1] <= 1) return message.channel.send("Please specify a number between 1 and 100!")
            if (isNaN(args[1])) return message.channel.send("Please specify a vaild number!")
            message.delete();
            message.channel.bulkDelete(args[1]).catch(e => {
                console.error(e)
            })
            message.channel.send(`Purged **${args[1]}** messages!`)
        break;

        case "mute":
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have the permission to do this!")
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("Please specify a valid user!");
        if(tomute.hasPermission("MUTE_MEMBERS")) return message.reply("I cannot mute this member since he/she is a mod/admin!");
        let muterole = message.guild.roles.find(`name`, "Muted");
        if(!muterole){
            try {
                muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
        } catch(e){
        console.log(e.stack);
            }
        }
        await(tomute.addRole(muterole.id));
        message.channel.send(`${tomute} has been successfully muted!`)
        break;

        case "unmute":
        var unmuterole = message.guild.roles.find("name", "muted")
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have the permission to do this!")
        var tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if (!tounmute) return message.channel.send("Please specify a valid user!")
        await(tounmute.removeRole(unmuterole.id))
        message.channel.send(`${tounmute} has been successfully unmuted!`)
        break;
		    
	case "botinfo":
        var embed = new Discord.RichEmbed()
            .setAuthor("Info for me!")
            .addField("Name", bot.user.username)
            .addField("Discriminator", bot.user.discriminator)
            .addField("ID", bot.user.id)
            .setThumbnail(bot.user.avatarURL)
            .setFooter(`Credits: created by ${owner}`)
            .setColor("RANDOM")
        message.channel.send(embed).catch(e => {
            message.channel.send("Woops! Looks like I can't send embeds to the chat! Join our Discord if this issue is persisting: https://discord.gg/9JTSAvH")
        })
	break;

        case "invite":
        message.channel.send("Thank you for taking the time to invite me to your Discord server! The link is below:\nhttps://discordapp.com/api/oauth2/authorize?client_id=433492902900137984&permissions=8&scope=bot")
        break;
		   
	case "feedback":
	if (!args[1]) return message.channel.send("You need to give the feedback, not just leave it empty you know.")
	var serverembed = new Discord.RichEmbed()
		.setAuthor("New feedback!")
		.addField("Who is it from?", message.author.username + "#" + message.author.discriminator + " " + "(" + message.author.id + ")")
		.addField("What is the feedback?", args.join(" ").slice(10))
		.setFooter(`Credits: created by ${owner}`)
		.setColor("RANDOM")
	feedbackwebhook.send(serverembed)
	var clientserverembed = new Discord.RichEmbed()
		.setAuthor("Feedback for Zen")
		.setDescription(`Thanks for sending feedback! ${owner} really appreciates it!`)
		.addField("Your feedback", args.join(" ").slice(10))
		.setFooter(`Credits: created by ${owner}`)
		.setColor("RANDOM")
	message.channel.send(clientserverembed)
	break;

        case "credits":
        message.channel.send(`I was created by ${owner}!`)
        break;
    }
})
bot.login(process.env.TOKEN)
