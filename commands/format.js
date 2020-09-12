const {
  Command
} = require('discord-akairo');
const {
  MessageEmbed
} = require('discord.js');
const L = require('../logger');

class FormatCommand extends Command {
  constructor() {
    super('format', {
      aliases: ['format', 'recommended']
    });
  }

  async exec(msg) {
    msg.channel.send(new MessageEmbed()
      .setTitle('Recommended Settings for Among Us Lobbies')
      .setDescription('These are the most fair settings for both imposters and crewmates (also most used settings amongst large streamers)')
      .setThumbnail('https://assets.rockpapershotgun.com/images/2020/08/headert.jpg')
      .setFooter('Bot made by Rehkloos. Check out my website at https://rehkloos.com', 'https://avatars1.githubusercontent.com/u/1954355?s=460&v=4')
      .setColor(0xDC143C)
      .addFields({
        name: 'imposters:',
        value: '2 (limit: 1)',
        inline: 'true'
      }, {
        name: 'confirm ejects:',
        value: 'off',
        inline: 'true'
      }, {
        name: 'emergency cooldown:',
        value: '20s',
        inline: 'true'
      }, {
        name: 'emergency meetings:',
        value: '1',
        inline: 'true'
      }, {
        name: 'discussion time:',
        value: '15s',
        inline: 'true'
      }, {
        name: 'voting time:',
        value: '90s',
        inline: 'true'
      }, {
        name: 'player speed:',
        value: '1x',
        inline: 'true'
      }, {
        name: 'crewmate vision:',
        value: '0.5x',
        inline: 'true'
      }, {
        name: 'imposter vision:',
        value: '1.5x',
        inline: 'true'
      }, {
        name: 'kill cooldown:',
        value: '22.5s',
        inline: 'true'
      }, {
        name: 'kill distance:',
        value: 'short',
        inline: 'true'
      }, {
        name: 'visual tasks:',
        value: 'off',
        inline: 'true'
      }, {
        name: 'common tasks:',
        value: '2',
        inline: 'true'
      }, {
        name: 'long tasks:',
        value: '1',
        inline: 'true'
      }, {
        name: 'short tasks:',
        value: '5',
        inline: 'true'
      },)
    );
  }
}
module.exports = FormatCommand;
