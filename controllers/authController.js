var request = require("request");
var config = require('../library/config.js');
var settings = config.setting(config.env());
var data = {
    'base_url':settings.site_url,
    'api_url':settings.api_url,
    'site_setting':settings.site_setting
};
module.exports.register = (req, res, next) => {
    res.render('authentication/authregister',data);
};  
module.exports.login = (req, res, next) => {
    res.render('authentication/authlogin',data);
}; 
