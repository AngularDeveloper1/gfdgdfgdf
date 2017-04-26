var pathToDest = [];

	//content position			
	var index = 36;
	//38 up, 40down
	
	var maxCellIndex = $('#navigate tr td').length;
	
	
document.onkeydown = function(e) {
	if (e.keyCode === 13) {
	
	$('#navigate tr td:eq(' + 36 + ')').removeClass('selected');
	
	var columns = $('#navigate tr:eq(1) td').length;
	
	
	for (i=0; i<pathToDest.length; i++)	{
	var k =0;
 setTimeout(function () {    
      k++;                    
      if (k < 5) {            
         MoveImage();            
      }                       
   }, 3000)
	
	}
	//pathToDest = [];
};
function MoveImage(){	 
		$('#navigate tr td:eq(' + index + ')').removeClass('selected');
		
		if(pathToDest[i] == "right") {
			while( !$('#navigate tr td:eq(' + (++index) + ')').hasClass('can_be_selected') ) {
				if (index >= maxCellIndex) {
					// wrap both ways:
					index = -1;
				}
			}			
			if($('#navigate tr td:eq(' + index + ')').html() == 2){
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				alert("success");
				$("#select-left").remove();
			}else if($('#navigate tr td:eq(' + index + ')').html() == 1){
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				//alert ("good going");
				//pathToDest[0].css('left', '-102px');
				//$(".selected").css('transform', 'translate(100%,0)');
				//$(".selected").css('left', '-102px');
				
			} else {
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				alert ("You are not suppose to move this way!");
				--index;
				if (index < 0) {
					index = maxCellIndex;
				}
				while( !$('#navigate tr td:eq(' + (index) + ')').hasClass('can_be_selected') ) {
					if (index < 0) {
						// wrap both ways:
						index = maxCellIndex;
					} else {
						--index;
					}
				}
				$(".imger").removeClass('selected');
			}
		}
		if(pathToDest[i] == "left") {
			--index;
			if (index < 0) {
				index = maxCellIndex;
			}
			while( !$('#navigate tr td:eq(' + (index) + ')').hasClass('can_be_selected') ) {
				if (index < 0) {
					// wrap both ways:
					index = maxCellIndex;
				} else {
					--index;
				}
			}		
			if($('#navigate tr td:eq(' + index + ')').html() == 2){
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				alert("success");
				$("#select-left").remove();
			}else if($('#navigate tr td:eq(' + index + ')').html() == 1){
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				//alert ("good going");
			} else {
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				alert ("You are not suppose to move this way!");
				while( !$('#navigate tr td:eq(' + (++index) + ')').hasClass('can_be_selected') ) {
					if (index >= maxCellIndex) {
						// wrap both ways:
						index = -1;
					}
				}
				$(".imger").removeClass('selected');
			}
		}
		if(pathToDest[i] == "up") {
			
			index -= columns;
			if (index < 0) {
				index += maxCellIndex;
			}
			while( !$('#navigate tr td:eq(' + (index) + ')').hasClass('can_be_selected') ) {
				if (index < 0) {
					// wrap both ways:
					index += maxCellIndex;
				} else {
					index -= columns;
				}
			}			
			if($('#navigate tr td:eq(' + index + ')').html() == 2){
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				alert("success");
				pathToDest = [];
				$("#select-left").remove();
			}else if($('#navigate tr td:eq(' + index + ')').html() == 1){
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				//alert ("good going");
			} else {
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				alert ("You are not suppose to move this way!");
				index += columns;
				if (index >= maxCellIndex) {
					index -= maxCellIndex;
				}
				while( !$('#navigate tr td:eq(' + (index) + ')').hasClass('can_be_selected') ) {
					if (index >= maxCellIndex) {
						// wrap both ways:
						index -= maxCellIndex;
					} else {
						index += columns;
					}
				}
				$(".imger").removeClass('selected');
			}
		}
		if(pathToDest[i] == "down") {
			index += columns;
			if (index >= maxCellIndex) {
				index -= maxCellIndex;
			}
			while( !$('#navigate tr td:eq(' + (index) + ')').hasClass('can_be_selected') ) {
				if (index >= maxCellIndex) {
					// wrap both ways:
					index -= maxCellIndex;
				} else {
					index += columns;
				}
			}		
			if($('#navigate tr td:eq(' + index + ')').html() == 2){
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				alert("success");
				$("#select-left").remove();
			}else if($('#navigate tr td:eq(' + index + ')').html() == 1){
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				//alert ("good going");
			} else {
				$('#navigate tr td:eq(' + index + ')').addClass('selected');
				alert ("You are not suppose to move this way!");
				index -= columns;
				if (index < 0) {
					index += maxCellIndex;
				}
				while( !$('#navigate tr td:eq(' + (index) + ')').hasClass('can_be_selected') ) {
					if (index < 0) {
						// wrap both ways:
						index += maxCellIndex;
					} else {
						index -= columns;
					}
				}
				$(".imger").removeClass('selected');
			}
		}
		

		$('#navigate tr td:eq(' + index + ')').addClass('selected');						
	}
}


$(document).ready(function(){
	
	document.getElementById('navigate').focus();
	
	//content position			
	
	$('#navigate tr td:eq(' + index + ')').addClass('selected');
	
	//38 up, 40down
	
	var maxCellIndex = $('#navigate tr td').length;
	
	$('#navigate').keydown(function(e) {
		$('#navigate tr td:eq(' + index + ')').removeClass('selected');
		
		var rows = $('#navigate tr').length;
		
		
		if (e.keyCode === 39) { //move right or wrap
			$("#apend").append("<img src='images/right.jpg' alt='right' />");
			pathToDest.push("right");			
		}
		if (e.keyCode === 37) { // move left or wrap
			$("#apend").append("<img src='images/left.jpg' alt='left' />");
			pathToDest.push("left");
		}
		
		if (e.keyCode === 38) {  // move up
			$("#apend").append("<img src='images/top.jpg' alt='top' />");
			pathToDest.push("up");
		}
		if (e.keyCode === 40) { // move down
			$("#apend").append("<img src='images/down.jpg' alt='bottom' />");
			pathToDest.push("down");

		
		}
		$('#navigate tr td:eq(' + index + ')').addClass('selected');
		if (e.keyCode === 8) { // back space
			$('#apend img:last').remove()
			pathToDest.pop("back");
		}
			var height = 0;
			$('#messagewindow p').each(function(i, value){
				height += parseInt($(this).height());
			});

			height += '';

			$('#messagewindow').animate({scrollTop: height});
	});
	
	
	/*p = p.transition()
          .transition()
          .attr("x", d.x * fieldSize)
          .attr("y", d.y * fieldSize)
          .each("end", repeat);*/
		
	
});