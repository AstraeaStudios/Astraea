import { AstraeaCommand, AstraeaCommandOptions } from '../../lib/Structures/Command'
import { Message, MessageAttachment } from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'
import { Args } from '@sapphire/framework'
import canvas from '../../lib/Canvas-SRA/requests'

@ApplyOptions<AstraeaCommandOptions>({
	name: 'passed',
	description: '+ Respect'
})
export default class Rainbow extends AstraeaCommand {
	public async run (message: Message, args: Args): Promise<Message> {
		let buffer
		const mention = (await args.pickResult('user')).value

		const wait = await message.channel.send('Please wait...')

		buffer = await canvas('passed', message.author.avatarURL({ format: 'png', size: 256 }))
		if (mention)buffer = await canvas('passed', mention.avatarURL({ format: 'png', size: 256 }))

		const image = new MessageAttachment(buffer, 'img.png')

		await message.channel.send({ files: [image] })
		return await wait.delete()
	}
}
