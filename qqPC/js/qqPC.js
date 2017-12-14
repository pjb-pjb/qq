

var mp4 = document.getElementById("mp4");

$(function(){
	page1();
	playvideo();
	close();
	
});


function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

function page1(){
		$("#firstpage_play_gif").css({"display":"block"});
		$("#firstpage_play_gif").addClass('a-fadeinB');
		setTimeout(function () {
				$("#firstpage_h1").css({"display":"block"});
               $("#firstpage_h1").addClass('a-fadeinB');
               setTimeout(function(){
               		$("#firstpage_h2").css({"display":"block"});
               		$("#firstpage_h2").addClass('a-fadeinB');
               		setTimeout(function(){
               			$("#firstpage_xiazai").css({"display":"block"});
               			$("#firstpage_xiazai").addClass('a-fadeinB');
               		},500);
              	 },500);
            }, 500);
	}


window.onscroll = function(){
	//第二页
	if(scroll().top>400 && scroll().top<1600){
		$("#jiangxin").css({"display":"block"});
		$("#jiangxin").addClass('a-fadeinB');
		setTimeout(function () {
				$("#jianjie").css({"display":"block"});
               $("#jianjie").addClass('a-fadeinB'); 
               setTimeout(function(){
	               	$("#secondpageimg").css({"display":"block"});
	               $("#secondpageimg").addClass('a-fadeinB'); 
               },500);              
            }, 500);
	}
	
	//第三页
	if(scroll().top>1600 && scroll().top<2000){
		$("#quanfangwei").css({"display":"block"});
		$("#quanfangwei").addClass('a-fadeinB');
		setTimeout(function () {
			$("#baiduokuan").css({"display":"block"});
               $("#baiduokuan").addClass('a-fadeinB');              
	               setTimeout(function(){
	               		$("#skin4").css({"display":"block"});
	               		$("#skin4").addClass('a-fadeinR');
	               		setTimeout(function(){
		               		$("#skin3").css({"display":"block"});
		               		$("#skin3").addClass('a-fadeinR');
		               			setTimeout(function(){
				               		$("#skin2").css({"display":"block"});
				               		$("#skin2").addClass('a-fadeinR');
				               			setTimeout(function(){
						               		$("#skin1").css({"display":"block"});
						               		$("#skin1").addClass('a-fadeinR');
	            		   },500);
	              		 },500);
	              	 },500);
	               },500);                          
            }, 500);
	}
	
	//第四页
	if(scroll().top>2100 && scroll().top<2900){
		$(".HQ").css({"display":"block"});
		$(".HQ").addClass('a-fadeinB');
		setTimeout(function () {
				$(".qianwan").css({"display":"block"});
               $(".qianwan").addClass('a-fadeinB');    
               setTimeout(function(){
	               	$(".page4_img").css({"display":"block"});
	               $(".page4_img").addClass('a-fadeinL');                	
               },500);
            }, 500);
	}
	
	//第五页
	if(scroll().top>3000 && scroll().top<3900){
		$(".page5_img1").css({"display":"block"});
		$(".page5_img1").addClass('a-fadeinB');
		setTimeout(function () {
				$(".dujia").css({"display":"block"});
               $(".dujia").addClass('a-fadeinB');    
               setTimeout(function(){
	               	$(".gengjia").css({"display":"block"});
	               $(".gengjia").addClass('a-fadeinB');
	               setTimeout(function(){
	               		$(".page5_img2").css({"display":"block"});
	              		 $(".page5_img2").addClass('a-bouncein');
	               },500);
               },500);
            }, 500);
	}
	
	//第六页
	if(scroll().top>4000 && scroll().top<4900){
		$(".page6_img").css({"display":"block"});
		$(".page6_img").addClass('a-fadeinB');
		/*setTimeout(function () {
				$(".page6_xiazai").css({"display":"block"});
               $(".page6_xiazai").addClass('a-fadeinB');                
            }, 500);*/
	}
	
	
}



function playvideo(){
	$("#firstpage_play_gif").click(function(){
		$(".firstpage_playvideo").css({"display":"block"});
		$(".firstpage_play").css({"background-color":"black"});
		$(".firstpage_gif").css({"display":"none"});
		mp4.play();		
	});

}

function close(){
	$(".closevideo").click(function(){
		/*alert("jaj");*/
		$(".firstpage_playvideo").css({"display":"none"});
		$(".firstpage_play").css({"background-color":"#0DCECE"});
		$(".firstpage_gif").css({"display":"block"});
		mp4.pause();
	});
}
