const { Client, GatewayIntentBits, SlashCommandBuilder, EmbedBuilder, REST, Routes } = require('discord.js');
const chalk = require('chalk');

// Discord bot token from environment variables
const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;

if (!TOKEN || !CLIENT_ID) {
    console.log(chalk.red('❌ Error: Missing DISCORD_TOKEN or DISCORD_CLIENT_ID environment variables'));
    console.log(chalk.yellow('Please set these environment variables before running the bot'));
    process.exit(1);
}

// Create Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

// Define slash commands
const commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responds with 🏓 Pong!'),
    
    new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Display a user\'s avatar')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user whose avatar you want to see')
                .setRequired(false)
        )
];

// Register slash commands
async function deployCommands() {
    try {
        console.log(chalk.blue('🔄 Registering slash commands...'));
        
        const rest = new REST().setToken(TOKEN);
        
        await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            { body: commands.map(command => command.toJSON()) }
        );
        
        console.log(chalk.green('✅ Successfully registered slash commands'));
    } catch (error) {
        console.error(chalk.red('❌ Error registering commands:'), error);
    }
}

// Bot ready event
client.once('ready', async () => {
    console.log(chalk.green(`🤖 Bot is ready! Logged in as ${client.user.tag}`));
    console.log(chalk.cyan(`📊 Serving ${client.guilds.cache.size} servers`));
    
    // Deploy commands when bot starts
    await deployCommands();
});

// Handle slash commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    try {
        if (commandName === 'ping') {
            console.log(chalk.blue(`🏓 Ping command used by ${interaction.user.tag}`));
            await interaction.reply('🏓 Pong!');
        }
        
        else if (commandName === 'avatar') {
            const targetUser = interaction.options.getUser('user') || interaction.user;
            
            console.log(chalk.blue(`🖼️ Avatar command used by ${interaction.user.tag} for ${targetUser.tag}`));
            
            const avatarEmbed = new EmbedBuilder()
                .setTitle(`${targetUser.username}'s Avatar`)
                .setImage(targetUser.displayAvatarURL({ dynamic: true, size: 512 }))
                .setColor('#0099ff')
                .setFooter({ 
                    text: `Requested by ${interaction.user.username}`,
                    iconURL: interaction.user.displayAvatarURL({ dynamic: true })
                });
            
            await interaction.reply({ embeds: [avatarEmbed] });
        }
    } catch (error) {
        console.error(chalk.red('❌ Error handling command:'), error);
        
        if (interaction.deferred || interaction.replied) {
            await interaction.followUp({ content: 'An error occurred while processing the command.', ephemeral: true });
        } else {
            await interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
        }
    }
});

// Error handling
client.on('error', error => {
    console.error(chalk.red('❌ Discord client error:'), error);
});

process.on('unhandledRejection', error => {
    console.error(chalk.red('❌ Unhandled promise rejection:'), error);
});

// Login to Discord
console.log(chalk.yellow('🚀 Starting Discord bot...'));
client.login(TOKEN);