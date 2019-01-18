$(document).ready(function(){
    user_info('introduction','#introduction');
    user_info('address','#address');
});
function update_intrpducton(){
    var data_key = "introduction";
    var data_value = $("#introduction").val();
    update_info(data_key,data_value);
}
function update_address(){
    var data_key = "address";
    var data_value = $("#address").val();
    update_info(data_key,data_value);
}