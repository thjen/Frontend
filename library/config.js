module.exports.env = function(){
    var env = require('../config/env.json');
    return env.env;
}
module.exports.setting = function(env){
    var env = require('../config/env/' + env + '.json');
    return env;
}