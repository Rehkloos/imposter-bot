const {
  Command
} = require('discord-akairo');
const L = require('../logger');

const {
  MessageEmbed
} = require('discord.js');

const blacklistedWords = new Set(['NICE', 'OKAY', 'STFU', 'WHOA', 'GUYS', 'LMAO', 'ROFL', 'FUCK', 'BRUH', 'SHIT', 'WHAT', 'LULW', 'KEKW', 'LOLW', 'DUDE', 'HAHA', 'AHAH', 'LMOA', 'JOIN', 'COME']);

class CodeCommand extends Command {
  constructor() {
    super('code', {
      regex: /^[A-Z]{4}$/,
      channel: 'guild',
      clientPermissions: ['MANAGE_CHANNELS']
    });
  }

  async exec(msg) {
    if (!blacklistedWords.has(msg.content)) {

      var gamechannelID = "";
      gamechannelID = msg.guild.channels.cache.find(channel => channel.name.includes("AmongUs | "));

      let oldCode = await this.client.settings.get(msg.guild.id, 'code', '');
      if (oldCode === msg.content) return;
      await this.client.settings.set(msg.guild.id, 'code', msg.content);

      let maxMembers = -1;
      let maxChannel = null;
      for (let vc of msg.guild.channels.cache.values()) {
        if (vc.type === 'voice') {
          if (vc.members.has(msg.author.id)) {
            maxChannel = vc;
            break;
          } else if (vc.members.size > maxMembers) {
            maxMembers = vc.members.size;
            maxChannel = vc;
          }
        }
      }

      if (msg.member.voice.channel && gamechannelID) {
        try {
          var codesID = msg.guild.channels.cache.find(channel => channel.name === "codes").id;
          const mychannel = (msg.guild.channels.cache.find(c => c.name === "codes"));
          if (mychannel) mychannel.send(new MessageEmbed()
            .setColor("#3A92EF")
            .setTitle(`${msg.content}`)
            .setDescription(`The code is ${msg.content}.\n\nCheck the voice channel name too!\n*sometimes the voice channel name wont change due to being rate limited*`) // make this look better
            .setTimestamp()
            .setFooter(`Requested by ${msg.author.username}`, msg.author.avatarURL)
          ).then(msg => {
            msg.delete({
              timeout: 1000 * 60 * 60 * 5
            });
          });
          if (!msg.channel.id === codesID) {
            // check if the command wasnt sent in the codes channel
            msg.channel.send(`Sent in <#${codesID}>`).then(msg => {
              msg.delete({
                timeout: 5000
              });
            });
          }

        } catch (err) {
          msg.channel.send(mychannel);
        }

        maxChannel.edit({
          name: `AmongUs | ${msg.content}`
        });
        msg.guild.me.edit({
          nick: `${msg.content} | ${this.client.user.username}`
        });
        L.log(`Updated code to ${msg.content}`);
      } else {
        msg.channel.send("**Error:** Please join a voice channel.");
      }
    }
  }
}

module.exports = CodeCommand;
