

 function IsPC() {
     if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
         document.write("<script src='__PUBLIC__/assets/plugins/zepto.min.js'></script>");
         document.write("<script src='__PUBLIC__/assets/js/index_mobile.js'></script>");
         document.write("<script src='__PUBLIC__/assets/js/zeptoCarousel.js'></script>");
     }
     else {
         document.write("<script src='__PUBLIC__/assets/plugins/jquery-1.9.1.min.js'></script>");
         document.write("<script src='__PUBLIC__/assets/js/index.js'></script>");
         document.write("<script src='__PUBLIC__/assets/js/responsiveImg.js'></script>");
         document.write("<script src='__PUBLIC__/assets/js/lunbo.js'></script>");
         if(document.body.clientWidth>998){
             document.write("<script src='__PUBLIC__/assets/plugins/jquery.fullPage.min.js' class='fullpage'></script>");
         }
     }
 }

 IsPC();
