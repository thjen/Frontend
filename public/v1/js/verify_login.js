$(document).ready(function(){
    var _verify = new __http();
    _verify.verify_login('api/v1/User/has_login',{},'GET');
});