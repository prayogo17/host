var pos;
var gambar;    
    function ukur(){
        var menu = $("#menuutama");
		pos = menu.offset();
	    var scr=$(".artikel");
	    gambar = scr.offset();
        console.log(gambar);
    }
     $(window).resize(function(){
	ukur();
tombol();
		      });
$(document).ready(function(){
ukur();
tombol();
  $("#header-inner img:first").css({
    "width": "100%",
    "height":"auto"
  });
$("#header-inner").addClass('image-responsive');
})

    $(function(){
	
	
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top){
               
              $("#menuutama").clone().prependTo('body')
            $("#menuutama").remove();
			$("#menuutama").removeClass("tidakfix").addClass("fix");
                
                 $('#banner').css({'margin-bottom': '72px'});
			} else if($(this).scrollTop() <= pos.top){

               $("#menuutama").clone().prependTo('#wrapper')
                 $("#menuutama").remove();
                $("#menuutama").removeClass("fix").addClass("tidakfix");
                   $('#banner').css({'margin-bottom': '0px'});
			}
			
			if($(this).scrollTop() > gambar.top){
			 $('.slider').fadeIn("slow");
			
			}else if($(this).scrollTop() <= gambar.top){
			 $('.slider').fadeOut("slow");
			}
		});

});
function tombol(){
if ($(window).width() < 850) {
   $(".btn-lg").addClass("btn-md");
	$(".btn-lg").removeClass("btn-lg");
}
else {
      $(".btn-md").addClass("btn-lg");
	$(".btn-md").removeClass("btn-md");
}
}

$(document).on('click', '.slider' ,function() {

$("#wrapper").animate({ scrollTop: 0 }, 'slow');

});
