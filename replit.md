# Discord Bot Project

## Overview

This is a simple Discord bot built with Discord.js v14 that implements basic slash commands functionality. The bot currently supports two commands: a ping command for basic connectivity testing and an avatar command for displaying user profile pictures. The project is designed as a lightweight, easily extensible Discord bot foundation with modern slash command implementation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Bot Framework
- **Discord.js v14**: Modern Discord API wrapper with full slash command support
- **Node.js Runtime**: Single-file architecture for simplicity and easy deployment
- **Slash Commands**: Uses Discord's native slash command system for better user experience and API compliance

### Command System
- **Static Command Registration**: Commands are defined as an array and registered globally on startup
- **REST API Integration**: Uses Discord's REST client for command deployment separate from the main bot client
- **Modular Command Structure**: Each command is built using SlashCommandBuilder for type safety and validation

### Error Handling & Logging
- **Environment Variable Validation**: Checks for required Discord credentials on startup with graceful failure
- **Chalk Logging**: Color-coded console output for better development experience and debugging
- **Graceful Degradation**: Bot exits cleanly if essential configuration is missing

### Bot Permissions & Intents
- **Minimal Intent Configuration**: Only requests Guilds intent to reduce permissions footprint
- **Global Command Scope**: Commands are registered application-wide rather than per-guild for simplicity

## External Dependencies

### Core Dependencies
- **discord.js (^14.22.1)**: Primary Discord API interaction library
- **chalk (^4.1.2)**: Terminal output styling and color formatting

### Environment Configuration
- **DISCORD_TOKEN**: Bot authentication token from Discord Developer Portal
- **DISCORD_CLIENT_ID**: Application ID for command registration and bot identification

### Discord Platform Integration
- **Discord API v10**: Utilizes latest Discord API features through discord.js
- **Gateway Connection**: Maintains persistent WebSocket connection for real-time events
- **REST API**: Separate REST client for command management and registration