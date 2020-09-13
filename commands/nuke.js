const {
  Command
} = require('discord-akairo');
const L = require('../logger');

class NukeCommand extends Command {
  constructor() {
    super('nuke', {
      aliases: ['nuke'],
      channel: 'guild'
    });
  }

  async exec(msg) {
    if (msg.member.guild.me.hasPermission("MANAGE_MESSAGES")) { // first check if user has permissions to MANAGE_MESSAGES
      if ((msg.guild.channels.cache.find(c => c.name === "codes"))) { // second check nuke command in codes room
        (async () => {
          let deleted;
          do {
            deleted = await msg.channel.bulkDelete(100); // delete last 100 messages in channel
          } while (deleted.size != 0);
        })();
      } else if ((!msg.guild.channels.cache.find(c => c.name === "codes"))) {
        msg.channel.send(`You can't clear this channel`).then(msg => {
            msg.delete({
              timeout: 10000
            });
          })
          .catch(console.error);
      }
    } else if (!msg.member.guild.me.hasPermission("MANAGE_MESSAGES")) {
      msg.channel.send(`You dont have permissions to run this command`).then(msg => {
          msg.delete({
            timeout: 10000
          });
        })
        .catch(console.error);
    }
  }
}
module.exports = NukeCommand;
