
function Logging(selector){
	this.ele = $(selector).get(0);
	this.verify();
}

Logging.prototype.verify = function(){
	var personArr = [];
	var oSelf = this;
    $.ajax({
        url: '../../register/php/getData.php',
        dataType:'json',
        data:{
            personArr:personArr
        },
        //请求成功的回调函数
        success: function (data) {
			$(oSelf.ele).find('.login-btn').on({
				click:function () {
					for(var i=0;i<data.length;i++){
                        if($(oSelf.ele).find('.username').val() == data[i].username&&$(oSelf.ele).find('.password').val() == data[i].password){
                            location.href = '../../index/index.html'
                            $(oSelf.ele).find('.quc-tip-wrapper').html('');
						}else{
                            $(oSelf.ele).find('.quc-tip-wrapper').html('用户名和密码填写错误')
						}
					}

                }
			})

        },
        //请求失败的回调函数
        error: function (xhr) {
            //发起请求的xhr对象
            console.log(xhr.responseText);
        }
    })

}
