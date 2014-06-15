 var $j = jQuery.noConflict();  

 $j(document).ready(function() { 

     $j(".n01").click(function () {
        $j(this).toggleClass("active");
        $j(".girl_list").fadeToggle("slow");
      }); 
     $j(".n02").click(function () {
        $j(this).toggleClass("active");
        $j(".camp_list").fadeToggle("slow");
      });
      $j(".n03").click(function () {
        $j(this).toggleClass("active");
        $j(".cold_list").fadeToggle("slow");
      });
      $j(".n04").click(function () {
        $j(this).toggleClass("active");
        $j(".sun_list").fadeToggle("slow");
      });
      $j(".n05").click(function () {
        $j(this).toggleClass("active");
        $j(".rain_list").fadeToggle("slow");
      });
      $j(".n06").click(function () {
        $j(this).toggleClass("active");
        $j(".tourism_list").fadeToggle("slow");
      });
      $j(".n07").click(function () {
        $j(this).toggleClass("active");
        $j(".mount_list").fadeToggle("slow");
      });
      $j(".n08").click(function () {
        $j(this).toggleClass("active");
        $j(".swim_list").fadeToggle("slow");
      });
      $j(".n09").click(function () {
        $j(this).toggleClass("active");
        $j(".fish_list").fadeToggle("slow");
      });
	  $j(".n10").click(function () {
        $j(this).toggleClass("active");
        $j(".hunt_list").fadeToggle("slow");
      });
	  $j(".n11").click(function () {
        $j(this).toggleClass("active");
        $j(".tablet_list").fadeToggle("slow");
      });
      $j(".n12").click(function () {
        $j(this).toggleClass("active");
        $j(".photo_list").fadeToggle("slow");
      });
	  $j(".n13").click(function () {
        $j(this).toggleClass("active");
        $j(".medicine_list").fadeToggle("slow");
      });


     $j(".c01").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.abroad_list").fadeToggle("slow");
      }); 
     $j(".c02").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.tour_list").fadeToggle("slow");
      });
      $j(".c03").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.cold_list").fadeToggle("slow");
      });
      $j(".c04").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.sun_list").fadeToggle("slow");
      });
      $j(".c05").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.rain_list").fadeToggle("slow");
      });
      $j(".c06").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.swim_list").fadeToggle("slow");
      });
      $j(".c07").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.board_list").fadeToggle("slow");
      });
      $j(".c08").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.swim_list").fadeToggle("slow");
      });
      $j(".c09").click(function () {
        $j(this).toggleClass("active");
        $j(".tablet_list").fadeToggle("slow");
      });
	  $j(".c10").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.notebook_list").fadeToggle("slow");
      });
	  $j(".c11").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.photo_list").fadeToggle("slow");
      });
	  $j(".c12").click(function () {
        $j(this).toggleClass("active");
        $j(".civil-list > article .list >.medicine_list").fadeToggle("slow");
      });

	$j(".check").click(function () {
        $j(".start").slideUp("slow");
		$j(".change").slideDown("slow");
	});


	$j(".mm01").click(function () {
        $j(this).addClass("visible");
        $j(".cat__nat").slideDown("slow");
        $j(".civil").slideUp("slow");
        $j(".natural-list").slideDown("slow");
        $j(".civil-list").slideUp("slow");

        $j(".mm02").removeClass("visible ");


	});
	$j(".mm02").click(function () {
        $j(this).addClass("visible");
        $j(".civil").slideDown("slow");
        $j(".cat__nat").slideUp("slow");

         $j(".civil-list").slideDown("slow");
        $j(".natural-list").slideUp("slow");
		$j(".mm01").removeClass("visible");
	});


	

	

		$j('.btn-info').click(function(){ 
			$j('.info').slideToggle("slow");
		});
		$j('.btn-remember').click(function(){ 
			$j('.remember').slideToggle("slow");
		});
  });