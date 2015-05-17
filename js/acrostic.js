function anim(){
	$(".animsition").animsition({
  
    		inClass               :   'fade-in-left-sm',
    		outClass              :   'fade-out-left-sm',
    		inDuration            :    1500,
    		outDuration           :    800,
    		linkElement           :   '.animsition-link',
    		loading               :    true,
    		loadingParentElement  :   'body',
    		loadingClass          :   'animsition-loading',
    		unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    		overlay               :   false,
    
    		overlayClass          :   'animsition-overlay-slide',
    		overlayParentElement  :   'body'
	});	
	
    $(document).trigger('anim_complete');

}

function fade() {
  setTimeout(function() {
    /*$('.fade').css('visibility','visible').hide().fadeIn('slow');*/
    $('.fade').fadeTo("slow", 1)
  }, 1500);
}

$(document).bind('anim_complete', fade());

$(document).ready(function () {
	anim();
    fade();
});


$(".projects > a").hover(function(){
    	$(".j").css("color", "#000");
    	}, function(){
    	$(".j").css("color", "#A39082");
});

$(".about > a").hover(function(){
    	$(".t").css("color", "#000");
    	}, function(){
    	$(".t").css("color", "#A39082");
});
    
$(".contact > a").hover(function(){
   		$(".n").css("color", "#000");
        }, function(){
        $(".n").css("color", "#A39082");
});

$(".resume > a").hover(function(){
   		$(".e2").css("color", "#000");
   		}, function(){
   		$(".e2").css("color", "#946E4F");
});

$(".blog > a").hover(function(){
   		$(".l").css("color", "#000");
   		}, function(){
   		$(".l").css("color", "#946E4F");
});