// start your server here
const server = require('./api/server')

const port = process.env.PORT || 6000

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})