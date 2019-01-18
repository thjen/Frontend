function create_timeline(){
    var _setting = new __http();
    var room_live_account = localStorage.getItem('room_live_account');
    var content = $("#create_time_line").val();
    if(content == '') {
        return false;
    }
    $("#create_time_line").val('');
    var image = '';
    var video = '';
    var data = {content:content,image:image,video:video}
        // $.ajax({
        //     beforeSend: function(xhr){
        //         xhr.setRequestHeader('Authorization','Bearer ' + room_live_account);
        //     },
        //     data:{content:content,image:image,video:video},
        //     contentType: 'application/x-www-form-urlencoded',
        //     type:'POST',
        //     url:_setting.api_url() + 'api/v1/Timeline/create',
        //     success:function(success){
        //         modal_open(success.response.message);
        //     },
        //     error: function(err){
        //         console.log(err);
        //     }
        // });
    _setting.api('api/v1/Timeline/create',data,'POST');    
}