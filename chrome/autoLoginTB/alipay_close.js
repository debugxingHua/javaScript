function dele(){
    var urlDQ = document.location.href;
    //alert(urlDQ);
    if(urlDQ.indexOf("pay") > 0){
        location.replace("https://login.taobao.com/");//到淘宝
        //alert("表点支付宝");
        //location.replace("about:blank");到空白页
        //document.title="禁止进入支付宝";
        window.open('','_self','');
        window.close();
    }
}
// function chajianStatus(){
//     var cj = window.navigator;
//     alert("对象："+cj);
//     var cj2=navigator.plugins[];
//     alert("对象2："+cj2);
// }
dele();