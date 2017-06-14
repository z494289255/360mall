

function SecondList(selector){
	this.ele = $(selector).get(0);
	this.show();
}
SecondList.prototype.show = function(){
	var oSelf = this;
	$(oSelf.ele).find('li').on({
		'mouseenter':function(){
			$(this).find('.second-list').toggle();
			$(this).css('background','#fff');
		},
		'mouseleave':function(){
			$(this).find('.second-list').toggle();
			$(this).css('background','rgba(224,225,226,.9)');
		}
	})
}


function NavSubList(selector){
	this.ele = $(selector).get(0);
	this.show();
}
NavSubList.prototype.show = function(){
	var oSelf = this;
	$(oSelf.ele).find('.nav_list>li').on({		
		'mouseenter':function(){
			var index = $(this).index();
			if(index>=1){
				$(oSelf.ele).find('.subBox').eq(index-1).toggle();
				$(oSelf.ele).find('.subBox').eq(index-1).css('height','228px')
			}		
		},
		'mouseleave':function(){
			var index = $(this).index();
			if(index>=1){
				$(oSelf.ele).find('.subBox').eq(index-1).toggle();
			}	
		}	
	})
	$(oSelf.ele).find('.subBox').on({
		'mouseenter':function(){
			$(this).toggle();	
		},
		'mouseleave':function(){
			$(this).animate({
				'height':0
			},function(){
				$(this).toggle();
			})
			
		}
	})
}