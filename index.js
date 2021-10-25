var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

var obstunatitlefile = './obs/title.txt'
var trackconfigfile = './obs/config.json'

// demo.lnbits.com
var lnbitsinvoicekey = '3ddf3614591b45a4940e938e27e0f446'
var tipthreshold = 10;

//app.use(express.static(__dirname)); // Current directory is root
// app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('public', __dirname);
app
    .use(express.static(path.join(__dirname, 'public')))
    .get('/qr', (req, res) => {
        res.sendFile(path.join(__dirname+'/public/index.html'))
    })
    .get('/qrapi', (req, res) => {
        let trackconfig = JSON.parse(fs.readFileSync(trackconfigfile, 'utf8'));
        // console.log(`got trackconfig: `, trackconfig);
        let currenttrack = fs.readFileSync(obstunatitlefile, 'utf8');
        let nowplaying = trackconfig.find(element => element.trackfilename == currenttrack);
        res.send(nowplaying);
    })
    .get('/animation', (req, res) => {
        res.render('animation.html',{lnbitsinvoicekey: lnbitsinvoicekey, tipthreshold: tipthreshold});
    })

app.listen(3000);
console.log('Listening on port 3000');