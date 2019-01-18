function get_timeline(start = 0){
    const _setting = new __http();
    var user_id = GetQueryStringParams('user_id');
    var room_live_account = localStorage.getItem('room_live_account');
        $.ajax({
            beforeSend: function(xhr){
                xhr.setRequestHeader('Authorization','Bearer ' + room_live_account);
            },
            //headers:{Authorization:'Bearer ' + room_live_account},
            type:'GET',
            url:_setting.api_url() + 'api/v1/Timeline/get?timeline=0&start=' + start + '&user_id=' + user_id,
            success:function(success){
                $(success.response).each(function(i,data){
                    //var box = $("#javascript-data-post").html();
                    $("#javascript-data-post .post-date h5").html(data.name);
                    $("#javascript-data-post .post-date .text-grey").html(data.updated);
                    $("#javascript-data-post .post-container .user-info .profile-link").html(data.name);
                    $("#javascript-data-post .post-container .post-detail .text-muted").html(data.updated);
                    $("#javascript-data-post .post-container .post-detail .post-text p").html(data.content);
                    if(data.image == '') {
                        $("#javascript-data-post .post-content img.post-image").addClass('hide');
                    }
                    $("#javascript-data-post .post-container .reaction i").html(data.like);
                    $("#javascript-data-post .post-container .reaction a.btn.text-secondary").attr('class','btn text-secondary');
                    $("#javascript-data-post .post-container .reaction a").addClass('like-' + data.TL_ID);
                    $("#javascript-data-post .post-container .reaction a").attr('onclick',"user_like(" + data.TL_ID + ")");
                    var box = $("#javascript-data-post").html();
                    $(".create-post .row").after(box);
                });
            },
            error: function(err){
                console.log(err);
            }
        });
}
$(document).ready(function(){
    get_timeline(0);
});
    
function user_like(timeline_id){
    var _setting = new __http();
    _setting.api('api/v1/Timeline/like',{timeline_id:timeline_id},'PUT');
    var count = $("a.like-" + timeline_id + " i").html();
    var new_count = Number(count) + Number(1);
    $("a.like-" + timeline_id + " i").html(new_count);
}