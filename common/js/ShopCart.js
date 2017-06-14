
function ShopCart(selector){
	this.ele = $(selector).get(0);
	this.pullDownList();
}
ShopCart.prototype.pullDownList = function(){
	var oSelf = this;
	$(oSelf.ele).on({
		'mouseenter':function(){
			$(oSelf.ele).find('.cart').css('display','block');
			$(oSelf.ele).find('.shoppingCart').css({
				'background-color':'#fff',				
			});
		},
		'mouseleave':function(){
			$(oSelf.ele).find('.cart').css('display','none');

			$(oSelf.ele).find('.shoppingCart').css({
				'background-color':'#f9f9f9',				
			});
		}
	})
}
