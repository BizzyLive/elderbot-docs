---
sidebar_position: 2
---

# Basic Functions
This page lists some basic `{{}}` functions you can use in your Command Result section.

Before we start, just note that to supply arguments of information to functions, simply seperate them with `::`. An example can be seen in the below section.

## Arguments
You can include arguments from the command being run in your response with the {{args}} function.
To get the first argument in a command, you might run `{{args::1}}`.

**Example**
Create a command with instructions from the previous page and set the trigger to `!mycmd`.
Set the command response to `{{args::1}} {{args::2}}`.

Now, go to your channel chat and type `!mycmd hello world`
The bot should respond with `hello world`

:::info
As you may have noted above, the arguments start at `1` and not `0`. This is for simplicitys sake amongst those who are not developers.
:::

## Time
The time function is quite simple, include it in your response and it'll be replaced with the full time of the system running the bot. Good for letting your users know what time it is.

Create a command with `{{time}}` in the response and it should return a value similar to `11:37 PM`.

If you wish to get the timezone, add the `tz` argument. 
Create a command with `{{time:tz}}` in the response and it should return your timezone, similar to `Australia/Sydney`.

Example time command: `{{time}} {{time:tz}}` would return `11:37 PM Australia/Sydney`.