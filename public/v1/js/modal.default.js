function modal_open(message){
    $("p#system-message").html(message);
    $("#site_modal").trigger('click');
}