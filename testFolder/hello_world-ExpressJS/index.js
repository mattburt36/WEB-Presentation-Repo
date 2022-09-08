var express = require('express');
const bodyParser= require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({extended: true}))

__dirname = '/Users/36sli/Desktop/testFolder/hello_world-ExpressJS'

app.get('/', function(req, res){
   res.send("Hello world!");
});


/*app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
   // Note: __dirname is the path to your current working directory.
 })*/


app.listen(3000, function(){console.log('listening on port 3000')});

