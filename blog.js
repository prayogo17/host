var pos;
    
    function ukur(){
        var menu = $("#menuutama");
		pos = menu.offset();
        console.log(pos);
    }
     $(window).resize(ukur);
$(document).ready(function(){
ukur();
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
                
                 $('#banner').css({'margin-bottom': '72px';
			} else if($(this).scrollTop() <= pos.top){

               $("#menuutama").clone().prependTo('#wrapper')
                 $("#menuutama").remove();
                $("#menuutama").removeClass("fix").addClass("tidakfix");
                   $'#banner').css({'margin-bottom': '0px'});
			}
		});

});
