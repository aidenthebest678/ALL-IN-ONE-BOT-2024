const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const lang = require('../../events/loadLanguage');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription(lang.supportDescription),
    async execute(interaction) {
        const supportServerLink = 'https://discord.gg/N9zVN7nGNP'; // Updated Discord invite link

        const embed = new EmbedBuilder()
            .setColor('#b300ff') // Embed color
            .setAuthor({
                name: lang.supportTitle,
                iconURL: lang.supportIconURL,
                url: supportServerLink, // Clickable author name linking to Discord invite
            })
            .setDescription(`
                ➡️ **${lang.supportDescriptionTitle}:**
                - ${lang.discord} - ${supportServerLink}
            `)
            .setImage(lang.supportImageURL) // Optional image (from language file)
            .setTimestamp(); // Adds a timestamp at the bottom of the embed

        await interaction.reply({ embeds: [embed] }); // Sends the embed as a reply
    },
};
