const {
  Command
} = require('discord-akairo');
const L = require('../logger');
const {
  MessageEmbed
} = require('discord.js');


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
    let amongus = 'amongus';
    const amongus0 = 'amongus0';
    const amongus1 = 'amongus1';
    const queue = 'queue';

    const everyone = ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'CONNECT', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'];

    const maxCAP = 10;

    let role = msg.member.roles.cache.find(r => r.name === amongus);

    if (role) {
      msg.channel.send(new MessageEmbed()
          .setTitle("ATTENTION!")
          .setDescription(`Role exists`)
          .setColor(0xDC143C)
        ).then(msg => {
          msg.delete({
            timeout: 10000
          });
        })
        .catch(console.error);
    } else if (!role) {
      msg.guild.roles.create({
          data: {
            name: amongus,
            color: '#DC143C',
            permissions: everyone
          },
        })
        .then(console.log)
        .catch(console.error);
    }

    if ((!msg.guild.channels.cache.find(c => c.name === categoryName))) {
      msg.guild.channels.create(categoryName, {
        type: 'category',
        permissionOverwrites: everyone
      }).then(createdChannel => {
        var id = createdChannel.id;
        msg.guild.channels.create(gen, {
          type: 'voice',
          parent: id,
          userLimit: maxCAP,
          permissionOverwrites: everyone
        });
      });
    } else if ((msg.guild.channels.cache.find(c => c.name === categoryName))) {
      msg.channel.send(new MessageEmbed()
          .setTitle("ATTENTION!")
          .setDescription(`Among Us channels exists`)
          .setColor(0xDC143C)
        ).then(msg => {
          msg.delete({
            timeout: 10000
          });
        })
        .catch(console.error);
    }

    if (msg.guild.channels.cache.find(c => c.name === amongus0) && msg.guild.channels.cache.find(c => c.name === amongus1) || msg.guild.channels.cache.find(c => c.name === queue) && msg.guild.channels.cache.find(c => c.name === codes)) {
      msg.channel.send(new MessageEmbed()
          .setTitle("ATTENTION!")
          .setDescription(`codes & queue Channels exists`)
          .setColor(0xDC143C)
        ).then(msg => {
          msg.delete({
            timeout: 10000
          });
        })
        .catch(console.error);
    } else if (!msg.guild.channels.cache.find(c => c.name === amongus0) && !msg.guild.channels.cache.find(c => c.name === amongus1)) {
      for (var i = 0; i < 2; i++) { // CREATE 2 text rooms
        msg.guild.channels.create(amongus + String(i), {
          type: 'text',
          permissionOverwrites: everyone
        });
      }
      setTimeout(async () => {
        const mychannel = await (msg.guild.channels.cache.find(c => c.name === amongus0));
        if (mychannel) mychannel.setName(codes);
      }, 2000);

      setTimeout(async () => {
        const mychannel = await (msg.guild.channels.cache.find(c => c.name === amongus1));
        if (mychannel) mychannel.setName(queue);
      }, 3000);
    }
  }
}

module.exports = CreateCommand;
