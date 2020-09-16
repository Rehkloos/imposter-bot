const {
    Command
} = require('discord-akairo');
const {
    MessageEmbed
} = require('discord.js');
const L = require('../logger');

class MapsCommand extends Command {
    constructor() {
        super('maps', {
            aliases: ['maps']
        });
    }

    async exec(msg) {
        msg.channel.send(new MessageEmbed()
            .setTitle('All the Among Us maps')
            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HCuyxDU5qqVDlpp0FnPVJwAAAA%26pid%3DApi&f=1')
            .setFooter('Bot made by Rehkloos. Check out my website at https://rehkloos.com', 'https://avatars1.githubusercontent.com/u/1954355?s=460&v=4')
            .setColor(0xDC143C)
            .addFields({
                name: 'Skeled',
                value: 'https://www.fanbyte.com/wp-content/uploads/2020/08/xAmong-Us-Skeled-Vents.jpg,qx96128.pagespeed.ic.UQgyhfawhK.jpg',
                inline: 'true'
            }, {
                name: 'Mira',
                value: 'https://www.fanbyte.com/wp-content/uploads/2020/08/Among-Us-MIRA-UQ-Vents.jpg',
                inline: 'true'
            }, {
                name: 'Polas',
                value: 'https://www.fanbyte.com/wp-content/uploads/2020/09/xAmong-Us-Polas-Map-Vents.jpg,qx96128.pagespeed.ic.V7Tg_KkLi6.jpg',
                inline: 'true'
            }, )
        );
    }
}

module.exports = MapsCommand;