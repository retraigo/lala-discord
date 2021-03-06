import Command from "../../structures/Command.js";
import lala from "@nekooftheabyss/lala";

export default class EmailCommand extends Command {
  constructor(client) {
    super(client, {
      name: "email",
      description: "Generate a random email ID.",
      group: "misc",
      options: [{
        type: 5,
        name: "common",
        required: true,
        description: "Use a common email instead of a random one?",
      }],
    });
  }
  async run(message, command) {
    const len = command.options.common;
    const response = lala.random.genEmail(len);
    const embed = new this.client.util.Embed()
      .setColor("#ff00c3")
      .setDescription(`\`${response}\``)
      .setAuthor(
        `${command.author.username}'s email:`,
        command.author.iconURL
      );

    return message.createMessage({ embeds: [embed.json()] });
  }
};
