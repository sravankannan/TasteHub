const jsonServer = require('json-server')
const HubServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()

const PORT = 3000

 HubServer.use(middleware) 
 HubServer.use(router) 

 HubServer.listen(PORT,() =>{ 
 console.log(`Hub-Server started running at PORT:${PORT} successfully...`);
 
 })