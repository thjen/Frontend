
function user_info(key = '',class_append = '',string = '') {
    $(class_append).html("loading....");
    const _setting = new __http();
    var user_id = GetQueryStringParams('user_id');
    var room_live_account = localStorage.getItem('room_live_account');
    if(key != '') {
        $.ajax({
            beforeSend: function(xhr){
                xhr.setRequestHeader('Authorization','Bearer ' + room_live_account);
            },
            //headers:{Authorization:'Bearer ' + room_live_account},
            type:'GET',
            url:_setting.api_url() + 'api/v1/User/info?data_key=' + key + '&user_id=' + user_id,
            success:function(success){
                $(class_append).html(string + success.response.value);
            },
            error: function(err){
                console.log(err);
            }
        });
    }
}
function update_info(data_key = '',data_value = ''){
    var _setting = new __http();
    if(data_key == '' || data_value == '') {
        return false;
    }
    _setting.api('api/v1/User/update_info',{data_key:data_key,data_value:data_value},'PUT');
}
$(document).ready(function(){
    user_info('name','.profile-info h3');
    user_info('level','.profile-info .text-muted','Level - ');
});

// function user_avatar(key = '',class_append) {
//     var _setting = new __http();
//     var user_id = GetQueryStringParams('user_id');
//     console.log(user_id);
//     if(key != '') {
//         $.ajax({
//             url:_setting.api_url() + 'api/v1/User/info?data_key=avatar&user_id=42',
//             data:{data_key:key},
//             type:'GET',
//             success:function(success){
                
//             },
//             error: function(err){

//             }
//         });
//     }
// }