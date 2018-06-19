[].map.call(document.getElementsByTagName('img'), function(img){
	var newimg = document.createElement('img');
	newimg.src = img.src;
	// var width = parseInt(newimg.width);
	// var height = parseInt(newimg.height);
	// alert(newimg.width + ' ' + newimg.height);
	// if(width < 200 || height < 200){
	// 	return "";
	// }else{
  	// 	return img.src;
	// }
    	return img.src;
});
