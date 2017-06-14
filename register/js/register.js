
function Login(selector){
	this.ele = $(selector).get(0);
	this.verification();
}

Login.prototype.verification = function(){
	var oSelf = this;
	//验证用户名
	$(oSelf.ele).find('.usernameBox input').on({
		blur:function(){
			if(/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test($(this).val())){
				
			}else if($(this).val() == ''){
				$(oSelf.ele).find('.user-point').html('')
			}else{
				$(oSelf.ele).find('.user-point').html('手机号格式有误')	
				$(oSelf.ele).find('.password-point').html('')
			}
		},
		focus:function(){
			$(oSelf.ele).find('.user-point').html('')
		}		
	})
	//验证密码
	$(oSelf.ele).find('.passwordBox input').on({
		blur:function(){
			if(/^\S{8,20}$/.test($(this).val())){				
			}else if($(this).val() == ''){
				$(oSelf.ele).find('.password-point').html('')
			}else{
				$(oSelf.ele).find('.password-point').html('密码长度不能少于8个字符，请重新设置')
				$(oSelf.ele).find('.user-point').html('')
			}
		},
		focus:function(){
			$(oSelf.ele).find('.password-point').html('')
		}		
	})
	//设置验证码
	var str='';
		for(var i=0;i<4;i++){
			str+=Math.floor(Math.random()*10);
		}
	$(oSelf.ele).find('.verification-code').html(str);
	
	
	$(oSelf.ele).find('.nextBtn').click(function(){

		if($(oSelf.ele).find('.usernameBox input').val() == ''){
			$(oSelf.ele).find('.user-point').html('请输入手机号')
		}else if(/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test($(oSelf.ele).find('.usernameBox input').val()) == false){
			$(oSelf.ele).find('.user-point').html('手机号格式有误')
			$(oSelf.ele).find('.password-point').html('')
		}else if(/^\S{8,20}$/.test($(oSelf.ele).find('.passwordBox input').val())==false){
			$(oSelf.ele).find('.password-point').html('密码长度不能少于8个字符，请重新设置')
		}else if($(oSelf.ele).find('.verifyBox input').val() == ''){
			$(oSelf.ele).find('.verify-point').html('请输入验证码')
		}else if($(oSelf.ele).find('.verifyBox input').val() != $(oSelf.ele).find('.verification-code').html()){
			$(oSelf.ele).find('.verify-point').html('验证码错误请重新输入')
			history.go(0);
			// $.ajax({
			// 	url:'../php/getData.php',
             //    dataType:'json',
             //    data:personArr,
             //    //请求成功的回调函数
             //    success: function (data) {
             //        $(oSelf.ele).find('.usernameBox input').val(data[data.length-1].username)
			// 		console.log(data.content)
             //    },
             //    //请求失败的回调函数
             //    error: function (xhr) {
             //        //发起请求的xhr对象
             //        console.log(xhr.responseText);
             //    }
			// })
		}else{
            $.ajax({
                url: '../php/saveData.php',
                dataType:'json',
                data: {
                    username: $(oSelf.ele).find('.usernameBox input').val(),
                    password: $(oSelf.ele).find('.passwordBox input').val()
                },

                //请求成功的回调函数
                success: function (data) {
                    $(oSelf.ele).find('.user-point').html(data.content)
                    if(data.content == '注册成功'){
                        location.href = '../../index/index.html'
                    }

                },
                //请求失败的回调函数
                error: function (xhr) {
                    //发起请求的xhr对象
                    console.log(xhr.responseText);
                }
            })
		}



		
	})
	
}
