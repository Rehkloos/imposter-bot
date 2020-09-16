const {
  Command
} = require('discord-akairo');
const {
  MessageEmbed
} = require('discord.js');
const L = require('../logger');

class HelpCommand extends Command {
  constructor() {
    super('help', {
      aliases: ['help']
    });
  }

  async exec(msg) {
    msg.channel.send(new MessageEmbed()
      .setTitle('How To Use the Among Us Bot')
      .setDescription('*The bot will automatically set its nickname and the name of the voice channel to match the latest four-letter code sent (in all capital letters).*')
      .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HCuyxDU5qqVDlpp0FnPVJwAAAA%26pid%3DApi&f=1')
      .setFooter('Bot made by Rehkloos. Check out my website at https://rehkloos.com', 'https://avatars1.githubusercontent.com/u/1954355?s=460&v=4')
      .setColor(0xDC143C)
      .addField('!queue', 'Adds yourself to the end of the queue. You will be auto-removed after 3 hours.')
      .addField('!dequeue', 'Removes yourself from the queue.')
      .addField('!list', 'Displays a list of everyone in the queue, without pinging them.')
      .addField('!ping', 'Pings everyone in the queue, to be used when a slot becomes available in-game.')
      .addField('!ping first', 'Pings only the first person in line in the queue.')
      .addField('!format or !recommended', 'shows recommended lobbies settings')
      .addField('!create', 'create Among Us category, voice channel and queue voice channels')
      .addField('!mute or !m', 'Toggle mute everyone in the active VC')
      .addField('!nuke', 'admin can clear "codes" channel (limit: 100 messages)')
      .addField('!maps', 'all the "Among Us" maps')            
      .addField('!overlay [channel name]', 'Generates a Discord Overlay URL for the given channel (defaults to the channel you\'re currently in).')
      .addFields({
        name: '.',
        value: '---------------------------------------------------------------------',
        inline: 'true'
      }, {
        name: 'Github',
        value: '[Contribute Here!](https://github.com/Rehkloos/imposter-bot/)',
        inline: 'true'
      }, {
        name: 'Twitter',
        value: '[Follow me on Twitter!](https://www.twitter.com/rehkloos)',
        inline: 'true'
      }, )
    );
  }
}

module.exports = HelpCommand;
