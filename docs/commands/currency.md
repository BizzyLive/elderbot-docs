---
sidebar_position: 3
---

# Currency
Here we'll go over the currency specific functions you can use in your commands.

## Add Points
This function allows you to build commands for giving points to users.

This command has no function arguments, just include it in your command response with ``{{addpoints}}`` and it will return a response indicating the success of the operation.

If you were to create an `!addpoints` command with the response ``{{addpoints}}``, the usage would be: `!addpoints [user] [points]`.

Example: `!addpoints bizzycolah 125` would return `125 points have been added to @bizzycolah`(the word `points` will be replaced with your configured points name).

:::caution
This is NOT a donate command, it will give users points freely, and as such your command permissions should be set to moderator or broadcaster.
:::

## Get Points
returns the current points value and hours for either the user issuing the command or a user specified in the command argument.

Example command `!points` with response `{{getpoints}}` would return a response similar to `@bizzycolah has 125 points and has spent 5 hour(s) in chat.`.

:::info
Want to customise the output of this command? Try checking out the [User Functions](/scripting/user-functions) page on Custom Scripting to create a scripted command.
:::