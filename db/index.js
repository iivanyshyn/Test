var phrases;

exports.connect = function () {
    phrases = require('./ua');
}

exports.getPhrases = function (name) {
    if(!phrases[name]){
        throw new Error("Нема такої фрази: " + name);
    }
    return phrases[name];
}