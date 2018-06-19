//请先用加密器生成密文，再将密文输入对应的引号内。
//请先用加密器生成密文，再将密文输入对应的引号内。
//请先用加密器生成密文，再将密文输入对应的引号内。
//请先用加密器生成密文，再将密文输入对应的引号内。
//请先用加密器生成密文，再将密文输入对应的引号内。
function userZU(){
    var jsonUserPage = {
        //将生成的密码密文按格式写入用户名对应的引号内
        //将生成的密码密文按格式写入用户名对应的引号内
        //将生成的密码密文按格式写入用户名对应的引号内
        //将生成的密码密文按格式写入用户名对应的引号内
        //将生成的密码密文按格式写入用户名对应的引号内
        "aaaaaaa":"0x1a666c23e8862bf1",
        "bbbbb":"0xd87d04e348fdbbf625ce9c758d71759b",
        "ccccc":"0xf4d8aa8d209b956c",
        "ddddd":"0xca09f87ef60ec9e0",
        "eeeee":"0x9fec6964c8b4c738",
        "fffff":"0xdfa9f5387f334d3d6",
        "ggggg":"sdfsdfsadfsafdsasasdf",
        //格式如下：
        //"用户名":"密码密文",
        //"用户名":"密码密文",
        //"用户名":"密码密文",
        //"用户名":"密码密文",
        //"用户名":"密码密文"最后一条不加逗号
    }
    aaa(jsonUserPage);
}










function aaa(jsonUserPage){
    var str = "<select id='sele'><option>选择用户</option></select>";
    document.getElementById("J_OtherLogin").innerHTML += str;
    for( var a in jsonUserPage){
        var optionStr = "<option value='"+jsonUserPage[a]+"'>"+a+"</option>";
        document.getElementById("sele").innerHTML += optionStr;
    }
}
function loginWaganjin(){
    var pwd = $('#sele').val();
    var usern = $('#sele').find('option:selected').text();
    $('#TPL_username_1').val(usern);
    $('#TPL_username_1').focus();
    var decrypt_pwdtext=decrypt_pwd(pwd,"123").replace(/(\0*$)/g,"");
    $('#TPL_password_1').val(decrypt_pwdtext);
    $('#TPL_password_1').focus();
}
function addPwd(pwdStr, key) {
    var jiamistr = stringToHex(des(key,pwdStr,1,0));
    return jiamistr;
}
function decrypt_pwd(pwdStr, key){
    var jiemisstr = des(key,hexToString(pwdStr),0,0);
    return jiemisstr;
}
function optionClick(){
    document.getElementById("sele").onchange = function(){
        loginWaganjin();
    }
}
$(function(){
    userZU();
    optionClick();
})