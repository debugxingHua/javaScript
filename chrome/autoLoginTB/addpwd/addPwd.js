$(function(){
	var objbutn = document.getElementById("butn");
	objbutn.addEventListener("click",function(){
		var pwd = $("#text1").val();
		//alert("密码"+pwd);
		var key = $("#keyv").val().toString();
		//alert("key"+key);
		if(key != "" && key != null && pwd != "" && pwd != null){
			var addpwd = addPwd(key,pwd);
			$("#text2").val(addpwd);
			$('#text2').focus();
		}else{
			alert("密文或key不能为空");
		}
	},false);
	var objbutn = document.getElementById("butn2");
	objbutn.addEventListener("click",function(){
		var pwd = $("#text2").val();
		var key = $("#keyv").val().toString();
		if(key != "" && key != null && pwd != "" && pwd != null){
			var depwd = decrypt_pwd(key,pwd).replace(/(\0*$)/g,"");
			$("#text1").val(depwd);
			$('#text1').focus();
		}else{
			alert("密文或key不能为空");
		}
		
	},false);
})
//加密
function addPwd(key,pwdStr) {
    var jiamistr = stringToHex(des(key,pwdStr,1,0));
    return jiamistr;
}
//解密
function decrypt_pwd(key,pwdStr){
    var jiemisstr = des(key,hexToString(pwdStr),0,0);
    return jiemisstr;
}