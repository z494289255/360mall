
function GetGoodObj(selector){
	this.ele = $(selector).get(0);
	console.log(this.ele);
	this.getGoods();
	this.btnCount = 1;
	this.calculateTotalPrice();
	
}

GetGoodObj.prototype.getGoods = function(){
	
	var oSelf = this;
	var arr = JSON.parse($.cookie('productList'))
	if(arr.length==0){
		location.href = 'empty.html'
	}
	var num = 1
	for(var i=0;i<arr.length;i++){
		
		$(oSelf.ele).find('.cart-contain').append('<tr><td class="col1"><span class="CheckBox"></span></td><td class="col2"><a href="" class="goods"><img src="'+arr[i].imgSrc+'" alt="" /><span class="title">'+arr[i].title+'</span></a><div class="good-des"><span class="color"></span><br /><span class="model"></span></div><p class="zp"></p><p class="zp"></p><p class="zp"></p><p class="zp"></p></td><td class="col3"><strong class="price">￥'+arr[i].price+'</strong></td><td class="col4"><span class="minus">-</span><span class="count">'+num+'</span><span class="plus">+</span></td><td class="col5"><strong></strong>￥<span class="subtotal-price"></span></td><td class="col6"><a href="#" class="del">删除</a></td></tr>')
		$(oSelf.ele).find('.subtotal-price').eq(i).html(($(oSelf.ele).find('.count').html())*(arr[i].price))		
	}
	
	$(oSelf.ele).find('.plus').on({
		click:function(){
			$(this).parent().find('.count').html(++num)
			var index = $(this).parent().parent().index()
			$(oSelf.ele).find('.subtotal-price').eq(index).html(num*(arr[index].price))
			
			oSelf.calculateTotalPrice();
		}
	})
	$(oSelf.ele).find('.minus').on({
		click:function(){
			if(num>1){
				$(this).parent().find('.count').html(--num)
				var index = $(this).parent().parent().index()
				$(oSelf.ele).find('.subtotal-price').eq(index).html(num*(arr[index].price))
				oSelf.calculateTotalPrice();
			}
			
			
		}
	})
	
	$(oSelf.ele).find('.del').on({
		click:function(){
			var index = $(this).parent().parent().index();
			arr.splice(index,1)
			
			var arrString = JSON.stringify(arr);
			$.cookie('productList',arrString,{
	        	expires:7,
	        	path:'/'
	        })
			
			$(this).parent().parent().remove();
			oSelf.calculateTotalPrice();
			var arr1 = JSON.parse($.cookie('productList'))
			if(arr1.length==0){
				location.href = 'empty.html'
			}
			
		}
	})
	
	$(oSelf.ele).find('.allCheck').on({
		
		click:function(){
			oSelf.btnCount++;
			
			var facePrice = 0;
			var goodsCount = 0;
			if(oSelf.btnCount%2 == 1){
				$(this).css({
					'background':'#33A745 url(../../resource/img/gou.png)'	
				})
				$(oSelf.ele).find('.CheckBox').css({
					'background':'#33A745 url(../../resource/img/gou.png)'	
				})
				oSelf.calculateTotalPrice();
			}else{
				$(this).css({
					'background':'#fff'	
				})
				$(oSelf.ele).find('.CheckBox').css({
					'background':'#fff'	
				})
				$(oSelf.ele).find('.facePrice').html(0)
				$(oSelf.ele).find('.goods-count').html(0)
			}
			
		}
	})
	var CheckBoxNum = 0;
	$(oSelf.ele).find('.CheckBox').on({
		click:function(){
			CheckBoxNum++;
			if(CheckBoxNum%2==1){
				$(this).css({
					'background':'#fff'	
				})
				var a = parseFloat($(oSelf.ele).find('.facePrice').html())-parseFloat($(this).parent().parent().find('.subtotal-price').html());
				$(oSelf.ele).find('.facePrice').html(a)
				$(oSelf.ele).find('.goods-count').html(parseFloat($(oSelf.ele).find('.goods-count').html())-parseFloat($(this).parent().parent().find('.count').html()))
			}else{
				$(this).css({
					'background':'#33A745 url(../../resource/img/gou.png)'	
				})
				$(oSelf.ele).find('.facePrice').html(parseFloat($(oSelf.ele).find('.facePrice').html())+parseFloat($(this).parent().parent().find('.subtotal-price').html()))
				$(oSelf.ele).find('.goods-count').html(parseFloat($(oSelf.ele).find('.goods-count').html())+parseFloat($(this).parent().parent().find('.count').html()))
			}
		}
	})
		
}

GetGoodObj.prototype.calculateTotalPrice = function(){
	var oSelf = this;
	var sum = 0;
	var count = 0;
	var arr = JSON.parse($.cookie('productList'))
	
	for(var i=0;i<arr.length;i++){
		sum+=parseFloat($(oSelf.ele).find('.subtotal-price').eq(i).html());
		count+=parseInt($(oSelf.ele).find('.count').eq(i).html())
	}
	$(oSelf.ele).find('.facePrice').html(sum)
	$(oSelf.ele).find('.goods-count').html(count)
}
