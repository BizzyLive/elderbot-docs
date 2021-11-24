---
sidebar_position: 1
---

# Getting Started
Commands could be considered daunting! They are templated, meaning there are lots of different variables and commands that can be executed within commands to change how they work! In fact, many built in features(such as quotes, shoutouts, etc) are triggered via an argument in custom commands, allowing you to make as many different commands as you wish for any of the built in bot functions.

## Creating a Command
When you click Add Command, you'll see a side panel open up with all the options available for creating a command. We'll now quickly review what each of these options are and how to use them. Note that the response section in this document won't cover special variables, as they will have their own pages to describe how they work.

### Type
This dropdown allows you to choose what kind of command this is. Either a normal command, or a scripted command for more advanced functionality.
### Command Name
This is the name of your command(not the trigger) and is available when querying commands via the online API sync for use on anything you want to query it with.

### Command
This is the trigger. The '!' is added automatically, so don't add it. Not much to say, this is just what people type to trigger it. Must be alphanumeric only, no spaces or weird characters and must contain at least 2 characters to be valid.

### Description
Similar to the name, but may also be shown in help commands.

### Command Response
This is what the command returns when triggered, and is also where you place your command functions and arguments. In the case of a script function, this is where you place your script. Command functions/special arguments are all placed within the `{{}}` template. An example would be `{{time}}` which returns the current time for the PC running the bot. Command responses are limited to 500 characters(the Twitch maximum message size).

More information on other command arguments can be found on other pages.

### Currency Cost
The amount of points this command costs to run. Can be a double(like 0.5 or 25.2). Point requirements are ignored for broadcaster.

### Permission
The minimum required permission level to use this command.
Minimum meaning if you select `Subscriber` for example, mods and broadcaster can use it. if you select `Moderator`, mods and broadcaster can use it.

### Cooldown Type
How the cooldown works on this(only if cooldown is above 0).

* User - Cooldown is applied on a per user basis
* Global - Cooldown is flat rate applied to all users.

:::info
Cooldowns are *not* shared between Twitch and Discord, and they have their own cooldown states.
:::

### Cooldown
The cooldown in seconds to be applied based on the type option. Set to 0 to disable cooldowns.

:::info
Cooldowns are ignored fir Broadcaster on Twitch and anyone in Discord with the Administrator permission in the server.
Commands will always work for them.
:::

### Twitch
Whether this command can be run on Twitch

### Discord
Whether this command can be run on Discord.

:::caution
The bot will not stop you turning both Twitch and Discord OFF, but doing so will result in your command not working.
:::

After creating your command, it will become active immediately and will be displayed in the command list.