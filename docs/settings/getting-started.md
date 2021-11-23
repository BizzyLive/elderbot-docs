---
sidebar_position: 1
---

# Getting Started
The settings page is where you can configure some additional settings and features such as backups, default shoutout message, etc.
Here we will go over each tab and the options available in them.

## Bots
This section allows you to link your Twitch and Discord bot accounts with ElderBot to enable commands, alerts, etc.

### Twitch
Connecting the Twitch bot is already mentioned in the main Getting Started page.

### Discord
As for Discord, just paste in your bot token from the Discord developer page to link it.
Once this is done, you will have the option to select a Discord channel to automatically post your live announcements in automatically. Leave these unselected if you don't wish to have your live alerts posted.

## Quotes
This section has settings related to the Quotes feature of the bot(currently only one option)

### Allow from API
If this is enabled, and syncing is turned on, you will be access a list of your quotes via the ElderBot site's API for adding them to your sites or anything else that can consume a JSON REST API.

## SFX
This section has options related to Sound Effects but not related to a specific sound effect.

### Global Volume
This is the global volume for all sound effects. This is combined with the volume for the individual sound effect to produce a normalized volume that will be used when a sound effect is played.

This can be used to quickly and easily turn up/down the total volume of the bot.
:::info
Whilst currently labeled as SFX, this volume also globally affects alerts as well.
:::