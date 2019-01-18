function register(){
    var __setting = new __http();
    var email = $("#email").val();
    var password = $("#password").val();
    var confirm_password = $("#confirm_password").val();
    var data = { email:email , password:password , confirm_password:confirm_password };
    if( password != '' && password === confirm_password && password != '') {
        __setting.register('api/v1/User/register',data,'POST','/');
    } else {
        modal_open("Form Empty");
    }
}