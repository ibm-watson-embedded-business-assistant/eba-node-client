## EBA Client

This repository hosts source code for a websocket based client interface for EBA written in Node.js. For documentation on how to connect to EBA in headless mode please follow [these instructions](). For more information on EBA itself, please visit our home: https://eba.ai.


### Installation
`npm install https://github.com/ibm-watson-embedded-business-assistant/eba-node-client`

### Usage
For a full usage example of the client, check out of our [console application](https://github.com/ibm-watson-embedded-business-assistant/eba-example-agents/blob/master/samples/websocket-node-client/app.js)

```
// require and construct
const _ = reqiure('lodash')
const eba = require('eba-client')
const client = new eba.Client(settings.url)

// listen for messages
client.on('message', (message) => {
    console.log(message)
})

// listen for logs
client.on('log', (text) => {
    console.log(text)
})

// example interaction logic
function interact() {
    rl.question('', (text) => {
        client.ask(text)
        _.defer(interact)
    })
}

// given access token start session and run interact
client
    .start({ access_token })
    .then(() => {
        console.log('type your question or hit Ctrl+D to exit')
        interact()
    })
    .catch((ex) => {
        console.error('unable to connect:')
        console.error(`${ex}`)
        process.exit(1)
    })
```

### Tests

`npm test`
