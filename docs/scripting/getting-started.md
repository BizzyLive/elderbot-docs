---
sidebar_position: 1
---

# Getting Started
Commands are good for basic output and some simple variables, but they lack the more complex logic and operations you might find you need.
To help out with this, ElderBot includes the ability to create commands that run a custom JS script and return the output.

Now, the script context doesn't run within a function but instead you return the response using a `resolve` callback. This allows you to perform operations that may not run immediately(async/callback functions) and still be able to return the response. An example of this is the built-in web request functions that we'll talk about later.

You may also call `reject` if an error occurred, but at the moment it has the same outcome as using `resolve`(simply returning the response to the calling context). This will likely remain the case for Twitch, but special error embeds maybe be shown on Discord at some point when using `reject`.

:::caution
Scripts have a maximum execution time of 5 seconds. If a script takes longer than 5 seconds to complete, the execution will be cancelled and a timeout error will be returned.
:::

## Creating a Command
Setting up a scripted command is quite simple, all you have to do is change the `type` of your command from `Command` to `Script`, place your script in the `Script` field 
that appears when you select the Script type.

:::caution
Twitch's max message size is 500 characters. If your script's response exceeds this size, it will be cut off. Including for Discord.
:::

## Script Basics
Scripts run JavaScript in a sandboxed environment with a few variables and functions passed in you can access.
This means you can **not** import any librarys, BUT you still have access to JS builtins(such as the Math library for random numbers, etc).

## Variables
The script functions are detailed in following pages within the Script category of these docs, but for now, here are the variables we pass in containing information regarding the command request that you can access.

### Command
The `command` variable available in scripts is a string containing the name of the command. This could be useful if you are using one script across multiple commands and don't wish to update each one with the command name.

### Arguments
The `args` variable is a string array of parameters passed along with the command(so `!mycmd a b c` would give you `['a', 'b', 'c']`)

### Location
The `location` variable informs you whether this command was run on Twitch or Discord, and is mostly important for ensuring you access the correct one of the below variables. The two possible values are `Twitch` and `Discord`.

### Discord
If the `location` variable is set to `Discord`, you will be given access to a variable named `discord` containing the following fields:

 * `discord.isAdministrator`: Whether the executing user has the Administrator permission in the server this command was executed in.
 * `discord.userName`: The executing user's Discord username.
 * `discord.nickName`: The executing user's nickname in the server this command was executed in.
 * `discord.userId`: The Discord ID of the executing user. Could be useful for having specific actions per user.
 * `discord.channel`: The name(not id) of the channel this command was executed in.

### Twitch
If the `location` variable is set to `Twitch`, you will be given access to a variable named `twitch` containing the following fields:

 * `twitch.isBroadcaster`: Whether the executing user is the twitch broadcaster
 * `twitch.isMod`: Whether the executing user is a moderator in the channel
 * `twitch.isSubscriber`: Whether the executing user is a subscriber in the channel
 * `twitch.userName`: The executing user's twitch username
 * `twitch.userId`: The executing user's twitch user ID
 * `twitch.channel`: The name of the channel this command was executed in

:::caution
The isBroadcaster variable is determined by checking the user ID between the executing user and the user signed into ElderBot, meaning this will *only* ever be true for the owner of the bot, even if the command is executed in a different channel(which shouldn't actually be possible anyway).
:::


### Config
The `config` variable contains some settings configured in the bot, such as custom currency name.
```typescript
interface ClientConfig {
    /** Custom name for your bot currency(Example: dollars) */
    currencyName: string

    /** Custom shorthand code for your bot currency(Example: $) */
    currencyCode: string
}
```

