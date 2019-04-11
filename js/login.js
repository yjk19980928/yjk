$(document).ready(function(){
$("#QR").hover(function(){
	$(this).html("<img src='img/code2.png'/>");
			},function(){
				$(this).html("<img src='img/code1.png'/>");
});//二维码特效
$("#lak").hover(function(){
	$(this).css({"font-size":"18px","box-shadow":"0 0 10px #666666"});
}				,function(){
					$(this).css({"font-size":"15px","box-shadow":"0 0 0 white"});
});//登录特效
$("#qqs").hover(function(){
	$(this).html("<img src='img/loginqq2.png'/>");
			},function(){
				$(this).html("<img src='img/loginqq.png'/>");
});//QQ
$("#weibo").hover(function(){
	$(this).html("<img src='img/loginweibo2.png'/>");
			},function(){
				$(this).html("<img src='img/loginweibo.png'/>");
});//微博
$("#lak").click(function(){
	var names=$("#name").val();
	var padd=$("#pwd").val();
	if (names=="") {
		alert("填写登录名");
	} else if(padd==""){
		alert("请填写登录密码！！");
	}else{
		window.location.href="home.html";
	}
})//登录验证
})//window
