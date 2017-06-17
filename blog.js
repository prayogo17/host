var pos;
    
    function ukur(){
        var menu = $("#menuutama");
		pos = menu.offset();
        console.log(pos);
    }
     $(window).resize(fuction(){
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

