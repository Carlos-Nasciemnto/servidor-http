const http = require( 'http' )

const host = '127.0.0.1'
const port = 3000

const servidor = http.createServer( ( req , res ) => {
    res.end( ' Olá mundo ' )
})
servidor.listen( port, host , () => {
    console.log( ' Servidor rodando em http:// ' +  host + ':' + port )
 
})






