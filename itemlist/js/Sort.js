
function Sort(selector){
	this.ele = $(selector).get(0);
	this.change();
	this.count = 0;
}
Sort.prototype.change = function(){
	var priceArr = [];
	var oSelf = this;
	$(oSelf.ele).find('.priceBtn').click(function(){
		oSelf.count++;
		$(oSelf.ele).find('.list-item').each(function(){
			priceArr.push($(this));
		})
		
		for (var i = 0; i < priceArr.length; i++) {	
		 	for (var j = 0; j < priceArr.length-1-i; j++) {					
		 			if(parseFloat((priceArr[j]).find('.price').html())>parseFloat((priceArr[j+1]).find('.price').html())){
		 					var temp=priceArr[j];
		 					priceArr[j]=priceArr[j+1];
		 					priceArr[j+1]=temp;
		 			}
		 	}		 	
		}
				
		$(oSelf.ele).find('.list-item').remove();
		
		if(oSelf.count%2 == 0){
			priceArr.reverse()
		}
		for(var i=0; i < priceArr.length; i++){
			priceArr[i].appendTo($(oSelf.ele).find('.list'))

		}

	})	
}


function Select(selector){
	this.ele = $(selector).get(0);
	this.change();
}
Select.prototype.change = function(){
	var oSelf = this;
	var titleArr = [];
	
	$(oSelf.ele).find('a[title]').click(function(){
		var a = $(this).html();
		$(oSelf.ele).find('.list-item').each(function(){
			titleArr.push($(this).find('.title').html())
		})
		for(var i=titleArr.length-1;i>=0; i--){
			if(titleArr[i].indexOf(a) == -1){
				$(oSelf.ele).find('.list-item').eq(i).css('display','none');
			}else{
				$(oSelf.ele).find('.list-item').eq(i).css('display','block');
			}
		}		
	})		
}

function PopupBtn(selector){
	this.ele = $(selector).get(0);
	this.count = 0;
	this.popup();	
}
PopupBtn.prototype.popup = function(){
	var oSelf = this;
	$(oSelf.ele).find('.findmore').click(function(){
		oSelf.count++;
		if(oSelf.count%2 == 0){
			$(oSelf.ele).find('.option1').css({
				'height':'48px',
				'overflow':"hidden"
			})
		}else{
			$(oSelf.ele).find('.option1').css({
				'height':'250px',
				'overflow':"scroll"
			})
		}
		
	})
	
}
