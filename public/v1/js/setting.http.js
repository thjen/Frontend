function GetQueryStringParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}
function __http(){
    this.status = false;
    this.data = {};
    this.base_url = function(){
        return $("#base_url").attr('content');
    }
    this.api_url = function (){
        return $("#api_url").attr('content');;
    }
    this.get = function(){
        var data = this.data;
        return data;
    }
    this.api = function(endpoint,data,method,redirect = ''){
        var api = $("#api_url").attr('content');
        var base_url = $("#base_url").attr('content');
        var room_live_account = localStorage.getItem('room_live_account');
        console.log(room_live_account);
        $.ajax({
            beforeSend: function(xhr){
                xhr.setRequestHeader('Authorization', 'Bearer ' + room_live_account);
            },
            url:api + endpoint,
            data:data,
            contentType: 'application/x-www-form-urlencoded',
            type:method,
            success: function(success){
                if(redirect != '') {
                    window.location.href = base_url + redirect;
                }
                if(success.response.message != '') {
                    modal_open(success.response.message);
                }
            },
            error: function (err) {
                modal_open(err.responseJSON.response.message)
            }
        });
    }
    this.verify_login = function(endpoint,data,method,redirect = ''){
        var api = $("#api_url").attr('content');
        var base_url = $("#base_url").attr('content');
        var room_live_account = localStorage.getItem('room_live_account');
        console.log(room_live_account);
        $.ajax({
            beforeSend: function(xhr){
                xhr.setRequestHeader('Authorization', 'Bearer ' + room_live_account);
            },
            url:api + endpoint,
            data:data,
            contentType: 'application/x-www-form-urlencoded',
            type:method,
            success: function(success){
                
            },
            error: function (err) {
               window.location.href = base_url; 
            }
        });
    }
    this.login = function(endpoint,data,method,redirect = ''){
        var api = $("#api_url").attr('content');
        var base_url = $("#base_url").attr('content');
        $.ajax({
            url:api + endpoint,
            data:data,
            contentType: 'application/x-www-form-urlencoded',
            type:method,
            success: function(success){
                localStorage.removeItem('room_live_account');
                localStorage.removeItem('room_live_account_id');
                localStorage.setItem('room_live_account',success.response.token);
                localStorage.setItem('room_live_account_id',success.response.id);
                if(redirect != '') {
                    window.location.href = base_url + redirect + '?user_id=' + success.response.id;
                }
                if(success.response.message != '') {
                    modal_open(success.response.message);
                }
            },
            error: function (err) {
                modal_open(err.responseJSON.response.message)
            }
        });
    }
    this.register = function(endpoint,data,method,redirect = ''){
        var api = $("#api_url").attr('content');
        var base_url = $("#base_url").attr('content');
        $.ajax({
            url:api + endpoint,
            data:data,
            contentType: 'application/x-www-form-urlencoded',
            type:method,
            success: function(success){
                if(redirect != '') {
                    window.location.href = base_url + redirect;
                }
                if(success.response.message != '') {
                    modal_open(success.response.message);
                }
            },
            error: function (err) {
                modal_open(err.responseJSON.response.message)
            }
        });
    }
    this.getTokenLogin = function(){
        return localStorage.getItem('room_live_account');
    }
    this.getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
    return this;
}