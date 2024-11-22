const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const lang = require('../../events/loadLanguage');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription(lang.supportDescription),
    async execute(interaction) {
        const supportServerLink = 'https://discord.gg/Ssdpj6X3vX';

        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
                name: lang.supportTitle,
                iconURL: lang.supportIconURL,
                url: supportServerLink
            })
            .setDescription(`
                ➡️ **${lang.supportDescriptionTitle}:**
                - ${lang.discord} - ${supportServerLink}
            `)
            .setImage('https://share.creavite.co/673fc815b23406fceac14ea2.png')
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
