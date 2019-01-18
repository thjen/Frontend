function login(){
    var _setting = new __http();
    var email = $("#email").val();
    var password = $("#password").val();
    if(email != '' && password != '') {
        _setting.login('/api/v1/User/login',{email:email,password:password},'POST','/timeline');
    } else {
        modal_open("Form Empty");
    }
}