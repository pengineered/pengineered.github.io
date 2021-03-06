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
}
function fade() {
  setTimeout(function() {
    $('.fade').fadeTo(600, 1);
  }, 1500);
}
function hov(){
  setTimeout(function() {
    $(".projects > a").addClass("fx");
    $(".about > a").addClass("fx");
    $(".contact > a").addClass("fx");
    $(".blog > a").addClass("fx");
    $(".home > a").addClass("fx");
    $(".resume > a").addClass("fx");
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
    $(".blog > a").hover(function(){
      $(".l").css("color", "#000");
      }, function(){
      $(".l").css("color", "#946E4F");
    });
    $(".home > a").hover(function(){
      $(".e").css("color", "#000");
      }, function(){
      $(".e").css("color", "#946E4F");
    });
    $(".resume > a").hover(function(){
      $(".e2").css("color", "#000");
      }, function(){
      $(".e2").css("color", "#946E4F");
    });
  }, 2100);
}
function chain(){
  $.when(fade()).then(hov());
}
$(document).ready(function () {
	$.when(anim()).then(chain());
});
