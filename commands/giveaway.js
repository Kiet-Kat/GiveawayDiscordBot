const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("giveaway")
    .setDescription("Selects random user from specified role")
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("The user role to pick user from")
        .setRequired(true)
    ),
  async execute(interaction) {
    const role = interaction.options.getRole("role");
    const userList = role.members.map(x=> {return '<@'+ x.user.id + '>'});
    let winner = userList[Math.floor(Math.random()*userList.length)];

    await interaction.reply({ content: winner, ephemeral: true });
  },
};
