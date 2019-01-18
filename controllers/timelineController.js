var config = require('../library/config.js');
var settings = config.setting(config.env());
var data = {
    'base_url':settings.site_url,
    'api_url':settings.api_url,
    'site_setting':settings.site_setting
};
module.exports.timeline = (req, res, next) => {
    res.render('timeline/timeline',data);
};

module.exports.timelineImage = (req, res, next) => {
    res.render('timeline/timeline-image',data);
};

module.exports.timelineFriends = (req, res, next) => {
    res.render('timeline/timeline-friends',data);
};

module.exports.timelineAbout = (req, res, next) => {
    res.render('timeline/timeline-about',data);
};
module.exports.timelineUpdateAbout = (req,res,next) => {
    res.render('timeline/timeline-update-about',data);
}