const { Listener } = require('discord-akairo');
const L = require('../logger');

class ReadyListener extends Listener {
	constructor() {
		super('ready', {
			emitter: 'client',
			event: 'ready'
		});
	}

	async exec() {
		await this.client.user.setActivity('Among Us'); // game status
		L.log(`Logged in as ${this.client.user.tag}`);
	}
}

module.exports = ReadyListener;
