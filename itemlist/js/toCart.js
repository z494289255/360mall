
function GoodObj(selector){
	this.ele = $(selector).get(0);
	this.saveObj();
}

GoodObj.prototype.saveObj = function(){
	var oSelf = this;
//  var goodsArr = [];

        // $.ajax({
        //     url: '../../common/php/getGoods.php',
        //     dataType:'json',
        //     data:{
        //         goodsArr:goodsArr
        //     },
        //     //请求成功的回调函数
        //     success: function (data) {
        //
        //         for(var i=0;i<data.length;i++){
        //             var goodObj = new AddGoodsObj('.shoppingCart-box')
        //             goodObj.addObj(data[i].imgSrc,data[i].title,data[i].price,data);
        //         }
        //     },
        //     //请求失败的回调函数
        //     error: function (xhr) {
        //         //发起请求的xhr对象
        //         console.log(xhr.responseText);
        //     }
        // })


//	$(oSelf.ele).find('.addcart').on({
//      click:function(){
//          var obj={};
//          obj.imgSrc = $(this).parent().parent().find('img').attr('src');
//          obj.title = $(this).parent().parent().find('.title').html();
//          obj.price = $(this).parent().parent().find('.price').html();
//
//          $.ajax({
//              url: '../../common/php/saveGoods.php',
//              dataType:'json',
//              data:{
//                  obj:obj
//              },
//              //请求成功的回调函数
//              success: function (data) {
//
//              },
//              //请求失败的回调函数
//              error: function (xhr) {
//                  //发起请求的xhr对象
//                  console.log(xhr.responseText);
//              }
//          })
//
//
//          $.ajax({
//              url: '../../common/php/getGoods.php',
//              dataType:'json',
//              data:{
//                  goodsArr:goodsArr
//              },
//              //请求成功的回调函数
//              success: function (data) {
//                  var goodObj = new AddGoodsObj('.shoppingCart-box')
//                  goodObj.addObj(data[data.length-1].imgSrc,data[data.length-1].title,data[data.length-1].price,data);
//
//              },
//              //请求失败的回调函数
//              error: function (xhr) {
//                  //发起请求的xhr对象
//                  console.log(xhr.responseText);
//              }
//          })
//
//
//      }
//	})
//}
//
//function AddGoodsObj(selector) {
//  this.ele = $(selector).get(0);
//
//}
//
//AddGoodsObj.prototype.addObj = function (imgSrc,title,price,data) {
//  var oSelf = this;
//
//  $(oSelf.ele).find('.cart-list').append('<li class="cart-item"><a href="#" class="cart-item-img"><img src="'+imgSrc+'"/><span class="cart-item-txt">'+title+'</span></a><span class="cart-item-price">￥'+price+'</span><span class="cart-item-num">x1</span><a class="cart-item-del"></a></li>')
//  $(oSelf.ele).find('.cart-item-del').on({
//      click:function () {
//
//          var index = $(this).parent().index();
//          data.splice(index,1);
//
//          $(oSelf.ele).find('.cart').css('display','none')
//          $(this).parent().remove();
//
//
//      }
//  })
//  $(oSelf.ele).find()
//  var totalPrice = 0;
//  $(oSelf.ele).find('.count1').html('('+data.length+')')
//  $(oSelf.ele).find('.count2').html(data.length)
//  for(var i=0;i<data.length;i++){
//      totalPrice +=parseFloat(data[i].price);
//      $(oSelf.ele).find('.total-price').html('￥'+totalPrice);
//  }
	var arr = [];
	$(oSelf.ele).find('.addcart').on({
		
		click:function(){
			var obj={};
            obj.imgSrc = $(this).parent().parent().find('img').attr('src');
            obj.title = $(this).parent().parent().find('.title').html();
            obj.price = $(this).parent().parent().find('.price').html();
            
            arr.push(obj);
            var arrString = JSON.stringify(arr);
            
            $.cookie('productList',arrString,{
            	expires:7,
            	path:'/'
            })
            var goodObj = new AddGoodsObj('.shoppingCart-box')     
		}
		
		
	})
	
}


function AddGoodsObj(selector) {
    this.ele = $(selector).get(0);
	this.addObj();
}

AddGoodsObj.prototype.addObj = function () {
    var oSelf = this;
	var arr = JSON.parse($.cookie('productList'))
    
    $(oSelf.ele).find('.cart-list').append('<li class="cart-item"><a href="#" class="cart-item-img"><img src="'+arr[arr.length-1].imgSrc+'"/><span class="cart-item-txt">'+arr[arr.length-1].title+'</span></a><span class="cart-item-price">￥'+arr[arr.length-1].price+'</span><span class="cart-item-num">x1</span><a class="cart-item-del"></a></li>')

    	
    	$(oSelf.ele).find('.count1').html('('+arr.length+')')
    	$(oSelf.ele).find('.count2').html(arr.length)
    	var totalPrice = 0;
    	
    	for(var i=0;i<arr.length;i++){
        	totalPrice +=parseFloat(arr[i].price);
        	$(oSelf.ele).find('.total-price').html('￥'+totalPrice);
   	 	}
    
    
    
    $(oSelf.ele).find('.cart-item-del').on({
        click:function () {
		var index = $(this).parent().index();
		arr.splice(index,1)
		
		var arrString = JSON.stringify(arr);
		$.cookie('productList',arrString,{
        	expires:7,
        	path:'/'
        })
		
		var arr1 = JSON.parse($.cookie('productList'))
		
        $(oSelf.ele).find('.count1').html('('+arr1.length+')')
    	$(oSelf.ele).find('.count2').html(arr1.length)
    	var totalPrice = 0;
    	
    	
    	if(arr1.length == 0){
    		$(oSelf.ele).find('.total-price').html('￥'+0);
    	}else{
    		for(var i=0;i<arr1.length;i++){
		    	totalPrice +=parseFloat(arr1[i].price);
		    	$(oSelf.ele).find('.total-price').html('￥'+totalPrice);
		 	}
    	}
        
        $(this).parent().remove();
            
        }
    })
    
    
}