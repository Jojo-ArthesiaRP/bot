const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.login('NjUxODc3NTI3MzEyMTM4MjQy.Xe047g.yfo3hKP5L6iFMaG79uYYJKEDaN0');

client.on("guildMemberAdd", user => {
    user.guild.channels.get("653290531476209685").send("**Bienvenue à toi " + user + " sur _" + user.guild.name + "_  !**")
});

client.on("guildMemberRemove", user => {
    user.guild.channels.get("653290531476209685").send("**Merci d'avoir visité _" + user.guild.name + "_  mais aujourd'hui on te dit bye bye " + user + " !** :cry:")
});