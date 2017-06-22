$(document).on('click', '.slider' ,function() {

$('html, body').animate({
    scrollTop: "0px"
}, 'slow');

});

$(function(){
	 var menu = $(".artikel");
		pos = menu.offset();
		$(window).scroll(function(){
			if(($(this).scrollTop()+10) > gambar.top){
			 $('.slider').fadeIn("slow");
			
			}else if((($(this).scrollTop()+10) <= gambar.top){
			 $('.slider').fadeOut("slow");
			}
		});

});
