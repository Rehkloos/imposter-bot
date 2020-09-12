const {
  Command
} = require('discord-akairo');
const L = require('../logger');

class CreateCommand extends Command {
  constructor() {
    super('create', {
      aliases: ['create'],
      channel: 'guild'
    });
  }

  async exec(msg) {
    msg.delete();
    const channelName = 'Among-gen';
    const categoryName = 'Among Us';

    msg.guild.channels.create(categoryName, {
      type: 'category',
      permissionOverwrites: [{
        id: msg.guild.id,
        allow: ['VIEW_CHANNEL'],
      }]
    }).then(createdChannel => {
      var id = createdChannel.id;
      msg.guild.channels.create(channelName, {
        type: 'voice',
        parent: id,
        permissionOverwrites: [{
          id: msg.guild.id,
          allow: ['VIEW_CHANNEL'],
        }]
      });
    });
  }
}

module.exports = CreateCommand;
