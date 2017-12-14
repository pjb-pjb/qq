 $(function () {
 	 var scrollUD = $(document).scrollTop();
    anmites();
    $(window).scroll(function () {
        anmites();
    });
 slideshow(".bg1", ".bg2", ".bg3", 200);

 slideshow(".pbg1", ".pbg2", ".pbg3", 200);
  slideshow(".mapping1", ".mapping2", ".mapping3", 200);
//背景图片切换效果
 })
 function slideshow(bg1, bg2, bg3, speed) {
        $(bg1).animate({
            zIndex: "0",
            opacity: "0"
        }, 1000, "linear", function () {
            $(bg2).css({"zIndex": "2", "opacity": "1"});
            $(bg3).css({"zIndex": "1", "opacity": "1"});
            setTimeout(function () {
                $(bg2).animate({	
                    zIndex: "0",
                    opacity: 0
                }, 1000, "linear", function () {
                    $(bg3).css({"zIndex": "2", "opacity": "1"});
                    $(bg1).css({"zIndex": "1", "opacity": "1"});
                    setTimeout(function () {
                        $(bg3).animate({
                            zIndex: "0",
                            opacity: "0"
                        }, 1000, "linear", function () {
                            setTimeout(function () {
                                $(bg1).css({"zIndex": "2", "opacity": "1"});
                                $(bg2).css({"zIndex": "1", "opacity": "1"});
                                slideshow(bg1, bg2, bg3, speed)
                            }, speed);
                        });
                    }, speed);
                });
            }, speed);
        });
    }
     function anmites() {
        scrollUD = $(document).scrollTop();
        if (scrollUD < 600) {
           $(".qingting").animate({height:'70px'},2000,function(){
 	       $(".p1-pic").animate({height:'70px'},2000,function(){
 	       $(".download").animate({height:'70px'},2000);
 
 });
 });
        }
        if (scrollUD > 800 && scrollUD < 1700) {
 	         $(".ttext").animate({left:'15%'},2000);
 	        $(".tphone").animate({right:'140px'},2000);
        }
        if (scrollUD >1500 && scrollUD < 3000) {
            $(".three1").fadeIn(1000,function(){
            	$(".three2").fadeIn(1000,function(){
            		$(".three3").fadeIn(1000,function(){
            			
            				$(".threetxt").fadeIn(1000,function(){
            			
            			$(".threepic img").fadeIn(1000);
            		
         });
            		});
         
            });
            });
        }
        if (scrollUD > 3000 && scrollUD < 3600) {
             $(".fourmobile").animate({left:'35px'},800);
             $(".fourtxt").animate({left:'520px'},800);
        }
        if (scrollUD > 3600&& scrollUD <4200) {
           $(".fivemobile").animate({right:'200px'},800);
             $(".fivetxt").animate({left:'160px'},800);
        }
        if (scrollUD > 4400 && scrollUD < 5200) {
             $(".voices li img").addClass("play");
             $(".sixtxt").addClass("play");
              $(".sixknowmore").addClass("play");
        }
        if (scrollUD > 5200 && scrollUD < 6000) {
           $(".seventxt").addClass("play");
            $(".sevendownload").addClass("play");
        }
    }