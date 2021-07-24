import { NorthCommand, NorthCommandOptions } from '../../lib/Structures/Command'
import { ApplyOptions } from '@sapphire/decorators'
import { Message, MessageEmbed } from 'discord.js'
import { Image } from '@aero/ksoft'

@ApplyOptions<NorthCommandOptions>({
	name: 'fox',
	aliases: ['foxx'],
	description: 'Returns an image of a fox',
	cooldownLimit: 3,
	cooldownDuration: 2000
})
export default class Fox extends NorthCommand {
	public async run (message: Message): Promise<Message> {
		const { url }: Image = await this.container.client.ksoft.images.random('fox', { nsfw: false })
		const embed = new MessageEmbed()
			.setTitle('Foxx')
			.setFooter('Powered by api.ksoft.si')
			.setURL(url)
			.setColor('BROWN')
			.setTimestamp()
			.setImage(url)
		return await message.channel.send(embed)
	}
}
