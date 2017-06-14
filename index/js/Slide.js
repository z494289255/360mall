
function Slide(selector){
	this.ele = $(selector).get(0);
	this.count = 0;
	this.change();
}


Slide.prototype.change =function(){
	var oSelf = this;
	$(oSelf.ele).find('.slider-film').eq(oSelf.count).animate({
			'opacity':1
			})
	$(oSelf.ele).find('.slider-film').eq(oSelf.count).siblings().animate({
			'opacity':0
			})
	$(oSelf.ele).find('ul li').eq(oSelf.count).css({
		'background':'#fff',
		'opacity':1
	})
	$(oSelf.ele).find('ul li').eq(oSelf.count).siblings().css({
		'background':'#000',
		'opacity':0.5
	})
	
	$(oSelf.ele).find('.slidePic').on({
		'mouseenter':function(){
			clearInterval(timerID);
		},
		'mouseleave':function(){
			timerID = setInterval(timerAction, 3000);
		}
	});
	var timerID = setInterval(timerAction, 3000);
	function timerAction(){
		if(++oSelf.count > 5) {
			oSelf.count = 0;
		}
		$(oSelf.ele).find('.slider-film').eq(oSelf.count).animate({
			'opacity':1
		})
		$(oSelf.ele).find('.slider-film').eq(oSelf.count).siblings().animate({
			'opacity':0
			})
		$(oSelf.ele).find('ul li').eq(oSelf.count).css({
			'background':'#fff',
			'opacity':1
		})
		$(oSelf.ele).find('ul li').eq(oSelf.count).siblings().css({
			'background':'#000',
			'opacity':0.5
		})
	}
	
	$(oSelf.ele).find('.left_btn').on({
		'click':function(){
			oSelf.count--;
			if(oSelf.count <0){
				oSelf.count = 5;
			}
			$(oSelf.ele).find('.slider-film').eq(oSelf.count).animate({
			'opacity':1
			})
			$(oSelf.ele).find('.slider-film').eq(oSelf.count).siblings().animate({
			'opacity':0
			})
			$(oSelf.ele).find('ul li').eq(oSelf.count).css({
				'background':'#fff',
				'opacity':1
			})
			$(oSelf.ele).find('ul li').eq(oSelf.count).siblings().css({
				'background':'#000',
				'opacity':0.5
			})
		}
	})
	$(oSelf.ele).find('.right_btn').on({
		'click':function(){
			oSelf.count++;
			if(oSelf.count >5){
				oSelf.count = 0;
			}
			$(oSelf.ele).find('.slider-film').eq(oSelf.count).animate({
			'opacity':1
			})
			$(oSelf.ele).find('.slider-film').eq(oSelf.count).siblings().animate({
			'opacity':0
			})
			$(oSelf.ele).find('ul li').eq(oSelf.count).css({
				'background':'#fff',
				'opacity':1
			})
			$(oSelf.ele).find('ul li').eq(oSelf.count).siblings().css({
				'background':'#000',
				'opacity':0.5
			})
		}
	})
	$(oSelf.ele).find('ul li').on({	
		'click':function(){
			var index = $(this).index();
			oSelf.count = index;
			$(this).css({
				'background':'#fff',
				'opacity':1
			})
			$(this).siblings().css({
				'background':'#000',
				'opacity':0.5
			})
			$(oSelf.ele).find('.slider-film').eq(oSelf.count).animate({
			'opacity':1
			})
			$(oSelf.ele).find('.slider-film').eq(oSelf.count).siblings().animate({
			'opacity':0
			})
			
		}
	})

}