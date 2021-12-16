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

## Counter
The counter function stores a number that is incremented on each call, returning the new number. This allows you to create commands such as death counters for your chat.

The basic function usage for an automatically incrementing counter is just ``{{counter}}``. 
But, the counter function can accept a few arguments for other operations. If you wish to use the below functions, you'll need to pass the counter name too.
When using a counter with ``{{counter}}`` the counter name simply defaults to the name of your command(so if you had the command !mycounter the name is `mycounter`).

To specify a name, simply do ``{{counter::mycountername}}``.

If you wish for a command to increment a specific counter, you may use ``{{counter::mycountername::increment}}``(this is the same as ``{{counter::mycountername}}``).

If you wish for a command to decrement the counter, you may use ``{{counter::mycountername::decrement}}``.

If you wish for a command to reset the counter, you may use ``{{counter::mycountername::reset}}``.

For a basic death counter, you might try adding a command with the response: ``I've died {{counter}} times!``


## Time
The time function is quite simple, include it in your response and it'll be replaced with the full time of the system running the bot. Good for letting your users know what time it is.

Create a command with `{{time}}` in the response and it should return a value similar to `11:37 PM`.

If you wish to get the timezone, add the `tz` argument. 
Create a command with `{{time:tz}}` in the response and it should return your timezone, similar to `Australia/Sydney`.

Example time command: `{{time}} {{time:tz}}` would return `11:37 PM Australia/Sydney`.

## Random Percentage
Simple function, just returns a number between 1 and 100 with `%` on the end.
Example: `{{randomperc}}` will become something like `25%`