---
sidebar_position: 1
---

# Getting Started
With a shoutout command, you can of course shoutout ANY user, but ElderBot also allows you to have custom shoutout messages for specific users and even have the bot automatically shout them out when they turn up for the first time during a stream!

:::info
You can change the default shoutout for users you haven't setup a custom shoutout for on the ShoutOuts tab of the settings page.
:::

## Creating Command
So, if you got a default settings file from me, there should be an !so command built in. But, if you do not have one, setting up up is fairly simple.

Follow the usual instructions on the Getting Started page of the commands documentation, then set the command response to `{{shoutout}}` and it will work.
:::info
Unlike how it is with most bots, you do NOT need seperate commands for custom shoutouts. They are all integrated with the same shoutout command you use for everyone else. Custom messages are automatically returned instead for users who you have set them up for.
:::

## Creating a Shoutout
To add a custom shoutout, head over to the Shoutouts page and hit Add Shoutout.
Set the twitch username of the user who you wish this shoutout to be for.

Tick the `auto` box if you wish to automatically shout out the user.

Now, the message section has a few special arguments you can use to substitue information like the last played game, stream title, URL and name of the user.
The available parameters are listed below.

### Username
You can use `{{username}}` to render the username of the person(though if you are creating a custom shoutout, you may just want to type it yourself or use a nickname)

### User ID
Whilst this is probably not useful for much outside of specialised scripted commands, you can access their twitch ID(numerical user id) with `{{userId}}`.

### URL
The `{{url}}` tag returns a full URL to the users twitch page.

### Game
The `{{game}}` tag will render the game currently set on the users Twitch page.

### Title
The `{{title}}` tage will render the title currently set on the users Twitch page.

## Example
So, knowing all we know, lets create a special message for one of our friends!
Say your Favourite twitch friend is named `ILoveElderBot` and you want a cool personal message for them, create your Shoutout and set the message as `Hey look everyone, its my best friend, the lover of ElderBot! Looks like they last played {{game}}! Please check them out over at {{url}} for all the elderbot action.`

Now, if you set the Shoutout to auto, then when they turn up this message should automatically be posted, otherwise try it out with your shoutout command(EG: `!so ILoveElderBot`) and you should get a message like `Hey look everyone, its my best friend, the lover of ElderBot! Looks like they last played The Legend of Bizz! Please check them out over at https://twitch.tv/iloveelderbot for all the ElderBot action.`

Go forth and mock your friends!

:::info
Fun fact! If you create a shoutout command that allows Discord, you can also do shoutouts there too! Why? Why not!
:::