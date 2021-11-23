---
sidebar_position: 1
---

# Getting Started
Quotes can be added in two ways:

1. A command in chat
2. Through the bot interface

The bot interface is primarily useful if you wish to add existing quotes you had at another time, as it allows you specify the adding user and creation date specifically.
I won't go through how to add the quotes using the UI because it is fairly straight forward.

To create, read and remove quotes, you need to setup custom commands with the appropriate functions. I will go over them briefly here, but quote functions can be found under the Commands sections in the sidebar. All going well, if you recieve the bot from me, I should also be sending a basic settings file with commands for quotes already added.

So, this guide exists more if you either are starting from scratch or wish to add new quote commands.
So head over to the Commands page and lets get started.

## Create Command
Create a new command and set the type to 'Custom Command'.
Set up the trigger, name, description and any other options you want(see Getting Started in commands for more info).

Now, when it comes to the Command Response section, all you have to do is add `{{addquote}}`. Parameters from the command will be parsed automatically.
Now, simply use your command like `!command quote here` and a quote will be added, returning a response with the ID.

## Get Quote
Get quote is a little more involved, as we also have options to retrieve specific quotes per command.

To get a random quote, setup a command as before and just set the response to `{{getquote}}`
Now use your command to get a random quote, or if you want a quote by ID, pass it as a parameter to the command like `!myquotecommand 15`

Now, if you want a command for a specific quote(for example, your quote is `I like turtles!` and you want a command to retrieve it like `!turtles`) then you need to specify the quote ID that was returned when you added the quote as an argument to the getquote function. You may also get this ID from the quote list on the quotes page of the bot UI.

So, say your quote is ID #5, create a new !turtles command, set the response to `{{getquote::5}}` and try it out!

## Remove Quote
This one is fairly simple. Create a command, set the response to `{{removequote}}` and run it with an ID like `!mycommand 15` to remove the quote with that ID.