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
			
			}else if(($(this).scrollTop()+20) <= gambar.top){
			 $('.slider').fadeOut("slow");
			}
		});

});
var relatedTitles=new Array();
var relatedTitlesNum=0;
var relatedUrls=new Array();
//var relatedImg=new Array();
//var relatedDesk=new Array();
function related_results_labels(json){
	for(var i=0;i<json.feed.entry.length;i++){
		var entry=json.feed.entry[i];
		relatedTitles[relatedTitlesNum]=entry.title.$t;
	//	relatedImg[relatedTitlesNum]=entry.media$thumbnail.url;
		//relatedDesk[relatedTitlesNum]=entry.summary.$t;
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
	//var tmp3=new Array(0);
	//var tmp4=new Array(0);
	for(var i=0;i<relatedUrls.length;i++){
		if(!contains(tmp,relatedUrls[i])){
			tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];
			tmp2.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];
			//tmp3.length+=1;tmp3[tmp3.length-1]=relatedImg[i];
			//tmp4.length+=1;tmp4[tmp4.length-1]=relatedDesk[i];
		}
	}
relatedTitles=tmp2;
	relatedUrls=tmp;
//	relatedImg=tmp3;
	//relatedDesk=tmp4;
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
	while(i<relatedTitles.length&&i<10)
	{
	//	var y=relatedImg[r].replace(/\\/g, '');
	 //         y=y.replace("s72-c", "s100");
// 		var des=relatedDesk[r].replace(/\n/g,'');
// 		des=des.substr(0,235);
		
		//document.write('<li><img src='+y+' height="100" width="100"/>  <a href='+relatedUrls[r]+'>'+relatedTitles[r]+'</a></li>');
		document.write('<div class="kait"><a href='+relatedUrls[r]+'><h4>'+relatedTitles[r]+'</h4></a></div>');
					    if(r<relatedTitles.length-1){r++;
					    }else{
						    r=0;
					      }
i++;
	}
document.write('</ul>');document.write();
}
$(document).on('click', '#ikonn' ,function() {
var po=$('#ikonn .glyphicon').hasClass('glyphicon-th-list');
	if(po){
	$('.glyphicon').removeClass('glyphicon-th-list');
        $('.glyphicon').addClass('glyphicon-remove');
	}else{
	$('.glyphicon').removeClass('glyphicon-remove');
        $('.glyphicon').addClass('glyphicon-th-list');
	}
	

});
