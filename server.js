// npm install connect serve-static

var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});

// application alternative 
// npm install -g light-server 
// reg.exe add HKCR\Directory\shell\LightServer\command /ve /t REG_EXPAND_SZ /f /d "\"C:\nodejs\light-server.cmd\" \"-s\" \"%V\""