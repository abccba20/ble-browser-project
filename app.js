const express = require('express')
app = express()

const path = require('path')

const port = process.env.PORT || 5000

app.use((req, res, next)=>{
  console.log(req.path)
  next()
})

//app.set('views', (__dirname +'/public/views')); //directory of views
//app.engine('html', require('ejs').renderFile); //if not 'cannot find module html'
app.set('view engine', 'html')
//app.set('view engine', 'html') //default extension for views

app.use(express.static(__dirname +'/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/views/index.html'))
})

app.get('*', function(req, res) {
    res.redirect('/');
})


app.listen(port, function() {
	console.log('Server on port ',port);
	//log.info('Servidor escuchando a través del puerto ',port)
})
