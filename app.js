// MODULES
const express = require( "express" );
const app = express();
const port = 3000;

const logger = require("morgan");

app.use(logger("dev"));
app.use(express.static(__dirname + '/public'));

// ROUTERS
app.get( "/", ( req, res ) => {
    console.log("GET /");
    res.sendFile( __dirname + "/views/index.html" );
} );

app.get( "/about", ( req, res ) => {
    res.sendFile( __dirname + "/views/about.html" );
} );``

app.get( "/board", ( req, res ) => {
    res.sendFile( __dirname + "/views/board.html" );
} );

app.get( "/contact", ( req, res ) => {
    res.sendFile( __dirname + "/views/contact.html" );
} );

app.get( "/gallery", ( req, res ) => {
    res.sendFile( __dirname + "/views/gallery.html" );
} );

app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );