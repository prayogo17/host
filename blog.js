var pos;
var gambar;    
    function ukur(){
        var menu = $("#menuutama");
		pos = menu.offset();
	    var scr=$(".artikel");
	    gambar = scr.offset();
  
    }
     $(window).resize(function(){
	ukur();
tombol();
fontsize();
		      });
$(document).ready(function(){
ukur();
tombol();
fontsize();
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
function fontsize(){
if ($(window).width() <= 554) {
 var k=554-$(window).width();
 k=14-(k*0.036);
$('#menustatic').find('li').css({'font-size': k+'px'});
}
else {
	$('#menustatic').find('li').css({'font-size': '14px'});
}
}

$(document).on('click', '.slider' ,function() {

$('html, body').animate({
    scrollTop: "0px"
}, 'slow');

});

var relatedTitles=new Array();
var relatedTitlesNum=0;
var relatedUrls=new Array();
var relatedImg=new Array();
var relatedDesk=new Array();
function related_results_labels(json){
	for(var i=0;i<json.feed.entry.length;i++){
		var entry=json.feed.entry[i];
		relatedTitles[relatedTitlesNum]=entry.title.$t;
		relatedImg[relatedTitlesNum]=entry.media$thumbnail.url;
		relatedDesk[relatedTitlesNum]=entry.summary.$t;
		for(var k=0;k<entry.link.length;k++){
			if(entry.link[k].rel=='alternate')
			{
				
			relatedUrls[relatedTitlesNum]=entry.link[k].href;
			 relatedTitlesNum++;break;
			}
		}
	}
}
function removeRelatedDuplicates(){
	var tmp=new Array(0);
	var tmp2=new Array(0);
	var tmp3=new Array(0);
	var tmp4=new Array(0);
	for(var i=0;i<relatedUrls.length;i++){
		if(!contains(tmp,relatedUrls[i])){
			tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];
			tmp2.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];
			tmp3.length+=1;tmp3[tmp3.length-1]=relatedImg[i];
			tmp4.length+=1;tmp4[tmp4.length-1]=relatedDesk[i];
		}
	}
relatedTitles=tmp2;
	relatedUrls=tmp;
	relatedImg=tmp3;
	relatedDesk=tmp4;
}
function contains(a,e){
	for(var j=0;j<a.length;j++)
	if(a[j]==e)
		return true;
		       return false;
}
function printRelatedLabels(){
	var r=Math.floor((relatedTitles.length-1)*Math.random());
	var i=0;document.write('<ul id="terkait">');
	while(i<relatedTitles.length&&i<6)
	{
		var y=relatedImg[r].replace(/\\/g, '');
	          y=y.replace("s72-c", "s100");
		var des=relatedDesk[r].replace(/\n/g,'');
		
		//document.write('<li><img src='+y+' height="100" width="100"/>  <a href='+relatedUrls[r]+'>'+relatedTitles[r]+'</a></li>');
		document.write('<div class="kait"><a href='+relatedUrls[r]+'><img src='+y+' alt='+relatedTitles[r]+'></a><a href='+relatedUrls[r]+'><h4>'+relatedTitles[r]+'</h4></a><p>'+des+'</p></div>');
					    if(r<relatedTitles.length-1){r++;
					    }else{
						    r=0;
					      }
i++;
	}
document.write('</ul>');document.write();
}
