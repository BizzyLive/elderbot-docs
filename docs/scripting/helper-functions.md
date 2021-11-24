---
sidebar_position: 3
---

# Helper Functions
These are a collection of small and useful functions to make things easier.

## randomInt
The `randomInt` function allows you to easily get a random whole number between `min`(inclusive) and `max`(exlusive). It is defined as: `randomInt(min: number, max: number)`.

:::info
With the inclusive and exlusive values, we mean that in the random number, `min` is a possible value, but you will never get `max` as a number(min is *included* and max is *excluded*).
:::

### Example
Say you wanted to get yourself a fancy new number between 1 and 10 but there are just so many to choose from and you can't decide. Well, our randomInt function can help you with that! Create your command with the following script:

```js
resolve(`My really cool new number is: ${randomInt(1, 10)}`)
```