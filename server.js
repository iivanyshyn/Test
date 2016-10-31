var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function run() {
    var vasya = new User("Вася");
    var petia = new User("Петя");
    vasya.hello(petia);
    log(db.getPhrases("Run successful"));
}

if (module.parent){
    exports.run = run;
}else{
    run();
}