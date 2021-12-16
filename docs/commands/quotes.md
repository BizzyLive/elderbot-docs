---
sidebar_position: 4
---

# Quotes
Here I'll go over the functions you can use if you ever need to build your own Quotes commands.

## Add Quote
This function is pretty simple, include it in your command response as `{{addquote}}` then use your command like `!command my great quote`.
It will add the quote, then return the ID.
:::caution
If you enable this command in Discord, it will still work, but the quotes will be added under your Broadcaster Twitch name as opposed to a specific Twitch user(as the bot has no way of knowing which Discord users belong to which Twitch users).
:::

## Get Quote
Get quote can be used in two ways.

One, without any parameters, will either return a random quote or specific quote based on command useage(EG `!command` or `!command 25`).
To set this up, just create a command with `{{getquote}}` as the response

Two, is providing a specific command ID making your command always return a specific quote.
To set it up, get the ID of your quote(find it on your quotes page in the bot) and add `{{getquote::25}}`(25 as an example, substitue your ID) to the response.

## Remove Quote
Setup is as simple as AddQuote. Just set the command response to `{{removequote}}` and use the command like `!command 25`(25 as an example substitue the quote you wish to remove).

:::caution
Remember to set appropriate permissions on your quotes commands when creating them to prevent all users from removing or creating quotes as per your requirements.
:::