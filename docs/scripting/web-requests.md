---
sidebar_position: 4
---

# Web Requests
The JS context scripts are executed in get passed 2 functions for making web requests and returning the object value(usually either a string or a JSON object depending on what you query).

## Get Requests
The first function is for making HTTP GET requests and is defined as `getWebRequest(url: string, cb: (res: any, err: string | null) => void)`.

### URL
The URI you wish to request. Apply url params to the end if you want, I dunno.

### CB
This is the callback function, as you can see it provides you with two parameters, `res` and `err`. If the query was successful, `res` will be an object or string returned from the URL and `err` will be null. If it was not, `res` will be null and `err` will contain the error string.

### Example
Here is an example request that retrieves a bad pickup line from my bad pickup line API and returns it in the command response:
```js
getWebRequest('https://bplapi.black-kro.dev/line/random', (res, err) => {
    if(res) resolve(res?.line?.line)
    else if(err) reject(`Command failed! Error: ${err}`)
    else reject('An unknown error occurred')
})
```

## Post Requests
Much like the GET request, but also optionally allows you to supply the call with a POST body(such as JSON) to send with the request.
The function is defined as `postWebRequest(url: string, data: any, cb: (res: any, err: string | null) => void)`

As you can see, the parameters are almost the same, except `data` is included for POST data. Set this to `undefined` if you don't wish to send a body.

### Example
Here we'll make a request to an API that doesn't exist, because I couldn't think of a good URL to POST to for an example.
```js
postWebRequest('https://mysite.com/api/bigchung', {my: 'data'}, (res, err) => {
    if(res) resolve(res)
    else if(err) reject(`Command failed! Error: ${err}`)
    else reject('An unknown error occurred')
})
```

And that's it! Now you can make your very own web requests.