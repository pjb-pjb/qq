var i=0;
var x=1;
var y=0;
var z=0;
var size=$(".b-ul li").size()/4;
var size1=$(".c-1-2 li").size();
$(function(){
	$(".a-1-3-1").click(function(){
	$(".a-1-3-2").css({display:"block"});
	});
	$(".a-1-3-2").click(function(){
		$(".a-1-3-2").css({display:"none"});
	});
	$(".b .btn").hover(function(){
		$(".b .btn").animate({width:"80px"},500);
	},function(){
		$(".b .btn").animate({width:"60px"},500);		
	});
	$(".b").hover(function(){
		$(".b .btn").animate({width:"60px"},500);
	},function(){
		$(".b .btn").animate({width:"0px"},500);		
	});
	 	
	$(".c .c-1-2").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
		x++;
		y++;
		if(x==10){
			$(".c-1-2 li").eq(10).addClass("bianda");
			$(".c-1-2 li").eq(9).removeClass("bianda");
			$(".c-1-2 li").eq(1).addClass("bianda");
			$(".c-1-2").stop().animate({left:-400*x},500,function(){
			$(".c-1-2").stop().animate({left:-400},0,function(){});
			$(".c-1-2 li").eq(10).removeClass("bianda");
			x=1;
			y=0;
			$(".c5 span").eq(0).addClass("c5-1");
			$(".c5 span").eq(8).removeClass("c5-1");
			});			
		}
		else{
		move1();
		}
	},1000);
	});
	$(".c").hover(function(){
		$(".c .btn").animate({width:"60px"},500);
	},function(){
		$(".c .btn").animate({width:"0px"},500);
	});
	$(".c .btn").hover(function(){
		$(".c .btn").animate({width:"80px"},500);
		clearInterval(t);
	},function(){
		$(".c .btn").animate({width:"60px"},500);
		t=setInterval(function(){
		x++;
		y++;
		if(x==10){
			$(".c-1-2 li").eq(10).addClass("bianda");
			$(".c-1-2 li").eq(9).removeClass("bianda");
			$(".c-1-2 li").eq(1).addClass("bianda");
			$(".c-1-2").stop().animate({left:-400*x},500,function(){
			$(".c-1-2").stop().animate({left:-400},0,function(){});
			$(".c-1-2 li").eq(10).removeClass("bianda");
			x=1;
			y=0;
			$(".c5 span").eq(0).addClass("c5-1");
			$(".c5 span").eq(8).removeClass("c5-1");
			});			
		}
		else{
		move1();
		}
	},1000);
	});
	$(".b .btn .right1").click(function(){
		i++;
		if(i==4){
			$(".b-ul").stop().animate({left:-1200*i},100,function(){
			$(".b-ul").stop().animate({left:0},0,function(){});
			i=0;
			$(".b5 span").eq(0).addClass("b5-1");
			$(".b5 span").eq(3).removeClass("b5-1");
			});			
		}
		else{
		move();		
		}
	});
	$(".b .btn .left1").click(function(){
		i--;	
		if(i==-1)
		{
			i=size-2;
			$(".b-ul").stop().animate({left:-1200*4},0,function(){
			$(".b-ul").stop().animate({left:-1200*i},200,function(){});
			});
			$(".b5 span").eq(3).addClass("b5-1");
			$(".b5 span").eq(0).removeClass("b5-1");
		}
		else{
		move();
		}
//		console.log(i);
	});
	$(".c .btn .right1").click(function(){
		y++;
		x++;
		if(x==10){
			$(".c-1-2 li").eq(10).addClass("bianda");
			$(".c-1-2 li").eq(9).removeClass("bianda");
			$(".c-1-2 li").eq(1).addClass("bianda");
			$(".c-1-2").stop().animate({left:-400*x},500,function(){
			$(".c-1-2").stop().animate({left:-400},0,function(){});
			$(".c-1-2 li").eq(10).removeClass("bianda");
			x=1;
			y=0;
			$(".c5 span").eq(0).addClass("c5-1");
			$(".c5 span").eq(8).removeClass("c5-1");
			});			
		}
		else{
		move1();		
		}
	});
	$(".c .btn .left1").click(function(){
		y--;
		x--;	
		if(x==0)
		{
			x=size1-2;
			y=size1-3;
			$(".c-1-2").stop().animate({left:-400*10},0,function(){
			$(".c-1-2").stop().animate({left:-400*x},500,function(){});
			});
			$(".c-1-2 li").eq(1).removeClass("bianda");
			$(".c-1-2 li").eq(9).addClass("bianda");
			$(".c5 span").eq(8).addClass("c5-1");
			$(".c5 span").eq(0).removeClass("c5-1");
		}
		else{
		move1();
		}
//		console.log(i);
	});
	$(".b5 li").click(function(){
		var index=$(this).index();
		i=index;
		move();
	});
	$(".c5 li").click(function(){
		var index1=$(this).index();
//		console.log(index1);
		if(x<index1)
		{z=index1;console.log(z);}
		if(x>index1)
		{z=index1+2;console.log("da");}
		if(x==index1)
		{z=index1+1;}
		x=index1+1;
		y=index1;
		move2();
	});
	$(".c5 li").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
		x++;
		y++;
		if(x==10){
			$(".c-1-2 li").eq(10).addClass("bianda");
			$(".c-1-2 li").eq(9).removeClass("bianda");
			$(".c-1-2 li").eq(1).addClass("bianda");
			$(".c-1-2").stop().animate({left:-400*x},500,function(){
			$(".c-1-2").stop().animate({left:-400},0,function(){});
			$(".c-1-2 li").eq(10).removeClass("bianda");
			x=1;
			y=0;
			$(".c5 span").eq(0).addClass("c5-1");
			$(".c5 span").eq(8).removeClass("c5-1");
			});			
		}
		else{
		move1();
		}
	},1000);
	});
	$("#dialog").dialog({
        autoOpen: false,
        width: 520,
    });
	$(".e-1 .e1").delegate($("img,.icon-play,.title5")).click(function (event) {
      $("embed").attr("src", ($(this).find("img").attr("title")));
      $("#dialog").dialog("open");
      event.preventDefault();
      console.log($(this));
    });
});
function move(){
	$(".b-ul").stop().animate({left:-1200*i},200);
	$(".b5 span").eq(i).addClass("b5-1");
	for(var j=0;j<4;j++){
		if(j!=i)
		$(".b5 span").eq(j).removeClass("b5-1");
	}
}
function move1(){
	$(".c-1-2").stop().animate({left:-400*x},500,function(){
	});
	$(".c-1-2 li").eq(x).addClass("bianda");		
	$(".c5 span").eq(y).addClass("c5-1");
	for(var j=0;j<9;j++){
		if(j!=y){
			$(".c5 span").eq(j).removeClass("c5-1");
		}
	}
	for(var h=0;h<11;h++){
		if(h!=x){
			$(".c-1-2 li").eq(h).removeClass("bianda");
		}
	}
}
function move2(){
	$(".c-1-2").stop().animate({left:-400*z},0,function(){		
	$(".c-1-2").stop().animate({left:-400*x},500,function(){});
	$(".c-1-2 li").eq(x).addClass("bianda");		
	$(".c5 span").eq(y).addClass("c5-1");
	for(var j=0;j<9;j++){
		if(j!=y){
			$(".c5 span").eq(j).removeClass("c5-1");
		}
	}
	for(var h=0;h<11;h++){
		if(h!=x){
			$(".c-1-2 li").eq(h).removeClass("bianda");
		}
	}
	});
}