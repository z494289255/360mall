function Glass(selector) {
	this.ele = $(selector).get(0);
	this.move();
}

Glass.prototype.move = function() {
	var oSelf = this;
	$(oSelf.ele).find('.hide').on({
		'mouseenter': function() {
			$(oSelf.ele).find('.select').toggle();
			$(oSelf.ele).find('.big').toggle();
		},
		'mouseleave': function() {
			$(oSelf.ele).find('.select').toggle();
			$(oSelf.ele).find('.big').toggle();
		},
		'mousemove': function(oEvent) {
			var left = oEvent.offsetX - $(oSelf.ele).find('.select').width() / 2;
			var top = oEvent.offsetY - $(oSelf.ele).find('.select').height() / 2;

			if(left <= 0) {
				left = 0;
			} else if(left >= $(this).width() - $(oSelf.ele).find('.select').width()) {
				left = $(this).width() - $(oSelf.ele).find('.select').width();
			}
			if(top <= 0) {
				top = 0;
			} else if(top >= $(this).height() - $(oSelf.ele).find('.select').height()) {
				top = $(this).height() - $(oSelf.ele).find('.select').height();
			}
			$(oSelf.ele).find('.select').css({
				'left': left + 'px',
				'top': top + 'px'
			})
			var n = $(oSelf.ele).find('.big').width() / $(oSelf.ele).find('.select').width()
			$(oSelf.ele).find('.big').css({
				'background-positionX': -left * n + 'px',
				'background-positionY': -top * n + 'px'
			})
		}
	})
}