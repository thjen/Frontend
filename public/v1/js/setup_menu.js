$(document).ready(function(){
    var user_id = GetQueryStringParams('user_id');
    if(user_id > 0 ) {
        $(".profile-menu li a").each(function(i,data){
            var href = $(this).attr('href');
            $(this).attr('href',href + '?user_id=' + user_id);
        });
        var update_info = $("#link_to_update_about").attr('href');
        $("#link_to_update_about").attr('href',update_info + '?user_id=' + user_id);
    }
});