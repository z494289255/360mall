
function Stairs(selector){
	this.ele = $(selector).get(0);
	this.isClick = false;
	this.scrollAction();
	this.stairClick();
}

Stairs.prototype.scrollAction = function(){
	var oSelf = this;
	$(window).scroll(function(){
		if($(window).scrollTop()>600){
			$(oSelf.ele).find('.stairs').css({
				transform:'scale(1)',
			})
		}else{
			$(oSelf.ele).find('.stairs').css('transform','scale(0)');
		}
		$(oSelf.ele).find('.part-smart').each(function(index){

			if($(window).scrollTop() >= ($(this).offset().top - 100) && oSelf.isClick == false){
				
				$(oSelf.ele).find('.stairs li span').removeClass().eq(index).addClass('select');
				
			}
			
		})
	})
}
Stairs.prototype.stairClick = function(){
	
	var oSelf = this;
	$(oSelf.ele).find('.stairs li').on({
		click:function(){		
			oSelf.isClick = true;
			$(oSelf.ele).find('.stairs li span').removeClass();
			$(this).find('span').addClass('select');			
			var index = $(this).index();
			$('html,body').animate({
				scrollTop:$(oSelf.ele).find('.part-smart').eq(index).offset().top
			},function(){
				oSelf.isClick = false;				
			});
		}
	})	
}

