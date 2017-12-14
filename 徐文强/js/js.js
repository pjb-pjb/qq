$(function(){
	
	$(".type2").click(function(){
		$(".mod_banner_mac").css({display:"block"});
		$(".mod_banner_pc").css({display:"none"});
		$(".mod_banner_iphone").css({display:"none"});
		$(".mod_banner_android").css({display:"none"});
	});
	$(".type3").click(function(){
		$(".mod_banner_mac").css({display:"none"});
		$(".mod_banner_pc").css({display:"none"});
		$(".mod_banner_iphone").css({display:"block"});
		$(".mod_banner_android").css({display:"none"});
	});
	$(".type4").click(function(){
		$(".mod_banner_mac").css({display:"none"});
		$(".mod_banner_pc").css({display:"none"});
		$(".mod_banner_iphone").css({display:"none"});
		$(".mod_banner_android").css({display:"block"});
	});
	$(".type1").click(function(){
		$(".mod_banner_mac").css({display:"none"});
		$(".mod_banner_pc").css({display:"block"});
		$(".mod_banner_iphone").css({display:"none"});
		$(".mod_banner_android").css({display:"none"});
	});
	 $(window).scroll(function () {
        huadong();
    });
	
})
function huadong(){
	 scrollUD = $(document).scrollTop();
//     -------------------------------- 滑轮滑到300
        if (scrollUD >300&&scrollUD<600) {
       
//   -----------------------------------明星照片淡入  
       $(".part_singer__pic1").fadeIn(500,function(){
		$(".part_singer__pic9").fadeIn(500);
		$(".part_singer__pic5").fadeIn(500,function(){
			$(".part_singer__pic16").fadeIn(500);
			$(".part_singer__pic22").fadeIn(500);		
		});
		$(".part_singer__pic12").fadeIn(500,function(){
			$(".part_singer__pic3").fadeIn(500,function(){
				$(".part_singer__pic10").fadeIn(500,function(){
						$(".part_singer__pic14").fadeIn(500);
						$(".part_singer__pic2").fadeIn(500,function(){
							$(".part_singer__pic18").fadeIn(500);
							$(".part_singer__pic25").fadeIn(500);						
						});
						$(".part_singer__pic28").fadeIn(500,function(){
							$(".part_singer__pic4").fadeIn(500);
							$(".part_singer__pic6").fadeIn(500);
							$(".part_singer__pic13").fadeIn(500);
							$(".part_singer__pic24").fadeIn(500,function(){
								$(".part_singer__pic19").fadeIn(500);
								$(".part_singer__pic27").fadeIn(500);
							});
							$(".part_singer__pic11").fadeIn(500,function(){
								$(".part_singer__pic7").fadeIn(500);
								$(".part_singer__pic8").fadeIn(500,function(){									
								$(".part_singer__pic15").fadeIn(500);
								$(".part_singer__pic26").fadeIn(500);
								});							
								$(".part_singer__pic20").fadeIn(500,function(){
									$(".part_singer__pic17").fadeIn(500);
									$(".part_singer__pic21").fadeIn(500);
									$(".part_singer__pic23").fadeIn(500);
									$(".part_singer__pic17").fadeIn(500);
				});
			  });
			});							
		 });
		});
	 });
	});

      } 
	 if (scrollUD >1300) {
	 	   $(".phonebox").addClass("play");
	 	   
	 	   	setTimeout(function(){
	 	   		$(".phone2").addClass("play2");
	 	   },1000);
	 }
 	if (scrollUD >2100) {
	 	   $(".phonebox2").addClass("play3");
	 	   setTimeout(function(){
	 	   	$(".phone3").addClass("play4");
	 	   },2000);
	 	   	
	 }
 	
 	if (scrollUD >2800) {
	 	   $(".mac1").addClass("play5");
	 	   $(".mac2").addClass("play6");
	 	   	$(".phone4").addClass("play7");
	 }
	 
}
