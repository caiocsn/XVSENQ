/*function changeContent(link){
	$('iframe').hide();
	document.getElementById("content-frame").src= link;
	$('iframe').toggle.('slide');
}*/


function changeContent(loc){
			
			$('iframe').delay(200).animate({ "left": "-80%" }, "slow", function(){
			document.getElementById("content-frame").src= loc;
			document.getElementById("content-frame").style.left = "100%";
			$('iframe').delay(200).animate({ "left": "10%" }, "slow" );;
		});
	}