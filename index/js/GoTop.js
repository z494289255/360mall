
function GoTop(selector){
	this.ele = $(selector).get(0);
	this.move();
}
GoTop.prototype.move = function(){
	var oSelf = this;
	$(window).scroll(function(){
		if($(window).scrollTop()>600){
			$(oSelf.ele).find('.gotopBtn').css('display','block');
		}else{
			$(oSelf.ele).find('.gotopBtn').css('display','none');
		}
	})
	$(oSelf.ele).find('.gotopBtn').click(function(){
		$('body,html').animate({scrollTop:0});
	})
}