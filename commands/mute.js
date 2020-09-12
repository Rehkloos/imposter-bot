const {
  Command
} = require('discord-akairo');
const L = require('../logger');


var alreadyMuted = false;

class MuteCommand extends Command {
  constructor() {
    super('mute', {
      aliases: ['mute', 'm'],
      channel: 'guild'
    });
  }

  async exec(msg) {
    // deafen and mutme evryone
    var _game = "";
    try {
      _game = msg.guild.channels.cache.find(channel => channel.name.includes("Among"));
    } catch (err) {}
    if (msg.member.voice.channel) { // check if people are in channel
      if (msg.member.voice.channel.id === _game.id) { // check for channel titled "among"
        var channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
        alreadyMuted = !alreadyMuted;
        for (const [memberID, member] of channel.members) {
          if (alreadyMuted) {
            member.voice.setMute(true);
            //member.voice.setDeaf(true);
            msg.channel.send(`Sssh, the round begins, silence.`).then(msg => {
                msg.delete({
                  timeout: 10000
                });
              })
              .catch(console.error);

          } else {

            member.voice.setMute(false);
            //member.voice.setDeaf(false);
            msg.channel.send(`The round of discussion initiated.`).then(msg => {
                msg.delete({
                  timeout: 10000
                });
              })
              .catch(console.error);
          }
        }
      } else {
        msg.channel.send("You must be in the game channel to use this command!");
      }
    } else {
      msg.channel.send("You must be in the game channel to use this command!").then(msg => {
          msg.delete({
            timeout: 10000
          });
        })
        .catch(console.error);
    }
  }
}
module.exports = MuteCommand;
