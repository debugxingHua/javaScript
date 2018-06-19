$(function() {
	//alert(navigator.plugins[]);注释掉的tr与td是chrome不支持的。
    $('#appCodeName').text(navigator.appCodeName);
    $('#appMinorVersion').text(navigator.appMinorVersion);
    $('#appName').text(navigator.appName);
    $('#appVersion').text(navigator.appVersion);
    //$('#browserLanguage').text(navigator.browserLanguage);
    $('#cookieEnabled').text(navigator.cookieEnabled);
    //$('#cpuClass').text(navigator.cpuClass);
    $('#onLine').text(navigator.onLine);
    $('#platform').text(navigator.platform);
    //$('#systemLanguage').text(navigator.systemLanguage);
    $('#userAgent').text(navigator.userAgent);
    //$('#userLanguage').text(navigator.userLanguage);

    //获取版本号，chrome不支持
    var br=navigator.userAgent.toLowerCase();  
	var browserVer=(br.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1];
	$('#broversion').text();
    $('#plus').text(navigator.plugins.length);

	var plugins ="";
	for( var i = 0; i < navigator.plugins.length; i++ ){
		plugins = navigator.plugins[i].name;
		plugins+= ","
    	$('#plu').text(plugins);
	}
	//userBrowser();
});
//判断浏览器
// function userBrowser(){
//     var browserName = navigator.userAgent.toLowerCase();
//     if(/msie/i.test(browserName) && !/opera/.test(browserName)){
//         alert("IE");
//         return;
//     }else if(/firefox/i.test(browserName)){
//         alert("Firefox");
//         return;
//     }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
//         alert("Chrome");
//         return;
//     }else if(/opera/i.test(browserName)){
//         alert("Opera");
//         return ;
//     }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
//         alert("Safari");
//         return;
//     }else{
//         alert("unKnow");
//     }
// }
//判断插件是否存在
// function yesNoPlugins(){
// 	var ga = navigator.userAgent.toLowerCase();
// 	for( var i = 0; i < navigator.plugins.length; i++ ){
		//alert(navigator.plugins[i]);
		// if( navigator.plugins[i].name.toLowerCase().indexOf(ga) > -1 ){
		// 	return true;
		// }
		// 	return false;
	//}
	// function hasIEPlugin( ga ){
	// 	if(new ActiveXObject( ga )){
	// 		return true;
	// 	}
	// 		return false;
	// }
	// function hasFlash( ga ){
	// 	var result = hasPlugin( ggg );
	// 	if( !result ){ // 判断是否为ie浏览器
	// 		result = hasIEPlugin( "ggg")
	// 	}
	// 	return result;
	// }
	//	alert(hasFlash("ggg")); // 判断否是有flash插件
//}