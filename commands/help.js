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
      .setDescription('*The bot will automatically set its nickname and the name of the voice channel to match the latest four-letter code sent.*')
      .setFooter('Bot made by Rehkloos. Check out my website at https://rehkloos.com', 'https://avatars1.githubusercontent.com/u/1954355?s=460&v=4')
      .setColor(0x8f00ff)
      .addField('!queue', 'Adds yourself to the end of the queue. You will be auto-removed after 3 hours.')
      .addField('!dequeue', 'Removes yourself from the queue.')
      .addField('!list', 'Displays a list of everyone in the queue, without pinging them.')
      .addField('!ping', 'Pings everyone in the queue, to be used when a slot becomes available in-game.')
      .addField('!ping first', 'Pings only the first person in line in the queue.')
      .addField('!overlay [channel name]', 'Generates a Discord Overlay URL for the given channel (defaults to the channel you\'re currently in).')
    );
  }
}

module.exports = HelpCommand;
