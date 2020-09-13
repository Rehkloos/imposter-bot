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
    const gen = 'Among-gen';
    const categoryName = 'Among Us';
    const codes = 'codes';
    const queue = 'queue';
    //const parentCat = msg.guild.channels.cache.find(channel => channel.name.includes(categoryName));

    const everyoneTEXT = [
      // everyone
      {
        id: msg.guild.id,
        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
      },
    ];


    const everyoneVC = [
      // everyone
      {
        id: msg.guild.id,
        allow: ['VIEW_CHANNEL', 'SPEAK', 'CONNECT'],
      },
    ];

    const maxCAP = 10;

    if ((!msg.guild.channels.cache.find(c => c.name === categoryName))) {
      msg.guild.channels.create(categoryName, {
        type: 'category',
        permissionOverwrites: everyoneTEXT
      }).then(createdChannel => {
        var id = createdChannel.id;
        msg.guild.channels.create(gen, {
          type: 'voice',
          parent: id,
          userLimit: maxCAP,
          permissionOverwrites: everyoneVC
        });
      });
    } else if ((msg.guild.channels.cache.find(c => c.name === categoryName))) {
      msg.channel.send(`Among Us Channel exists`).then(msg => {
          msg.delete({
            timeout: 10000
          });
        })
        .catch(console.error);
    }

    if ((!msg.guild.channels.cache.find(c => c.name === gen)) || (!msg.guild.channels.cache.find(c => c.name === codes)) || (!msg.guild.channels.cache.find(c => c.name === queue))) {
      for (var i = 1; i < 3; i++) { // CREATE 2 text rooms
        msg.guild.channels.create(codes + String(i), {
          type: 'text',
          permissionOverwrites: everyoneTEXT
        });
      }
      msg.guild.channels.create(queue, {
        type: 'voice',
        permissionOverwrites: everyoneVC
      });
    } else if ((msg.guild.channels.cache.find(c => c.name === gen)) || (msg.guild.channels.cache.find(c => c.name === codes)) || (msg.guild.channels.cache.find(c => c.name === queue))) {
      msg.channel.send(`General, Codes, & Queue Channels exists`).then(msg => {
          msg.delete({
            timeout: 10000
          });
        })
        .catch(console.error);
    }
  }
}

module.exports = CreateCommand;
