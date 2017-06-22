$(document).on('click', '.slider' ,function() {

$('html, body').animate({
    scrollTop: "0px"
}, 'slow');

});

$(function(){
	
		var gambar = $(".artikel").offset();
		$(window).scroll(function(){
			if(($(this).scrollTop()+20) > gambar.top){
			 $('.slider').fadeIn("slow");
			
			}else if((($(this).scrollTop()+20) <= gambar.top){
			 $('.slider').fadeOut("slow");
			}
		});

});
