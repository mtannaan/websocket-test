const ws = require('ws')

const conn = new ws('ws://localhost:3001', {
    headers: {authorization: 'asdfasdfa'}
})
conn.on('open', () => {
    console.log('open')
    conn.send('asdf')
})
