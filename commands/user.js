const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("Provides information about the user"),
    async execute(interaction) {
        let joinedDate = new Date(interaction.member.joinedAt);
        joinedDate = joinedDate.toLocaleDateString();
        await interaction.reply(
            `This command was run by ${interaction.user.username}, who joined on ${joinedDate}`
        );
    },
};
