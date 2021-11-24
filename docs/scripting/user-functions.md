---
sidebar_position: 3
---

# User Functions
These functions allow you to query information the bot has stored about specific users, such as their points, message count, etc.

## getUserInfo
This function returns a handful of useful fields regarding the user with the specific Twitch ID. The function is defined as: `getUserInfo(id: string, cb: (res: UserInfo | null, err: string | null) => void)`.

### Returns
This function returns an object containing a handful of fields.

Definition:
```ts
interface UserInfo {
    /** The total number of points this user has accrued */
    points: number

    /** 
     * The total time(in seconds) the bot has registered the user as being present in chat
     * This is based on active chatting, NOT twitch's viewer list.
     * So, it will only go up if you talk.
     */
    totalTime: number

    /** Total number of messages the bot has seen this user send */
    totalMessages: number

    /** Date the user's last seen message was sent */
    lastMessage: Date
}
```

### Example
This is an example script that will tell you how many points the executing user has

```js
getUserInfo(twitch.userId, (res, err) => {
    if(res) resolve(`You have ${res.points} points!`)
    else if(err) reject(`Command failed! Error: ${err}`)
    else reject('An unknown error occurred')
})
```