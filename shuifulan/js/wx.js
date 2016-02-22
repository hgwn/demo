$(function(){
	// banner滚动
	$("#banner-wrap").owlCarousel({
		items: 1,
		lazyLoad: true,
		autoPlay: true
	});
	// 分类切换显示隐藏
	$(".sort-menu-close").click(function(){ 
		//alert(1111);
		$(this).parents(".sort-menu").hide();
	});
	$(".sort-btn").click(function(e){
		$(".sort-menu").toggle();
		e.stopPropagation();
	});
	$(document).click(function(){
		$(".sort-menu").hide();
	});
	//延迟加载
	$("img.lazy").lazyload();

	//支付按钮切换效果
	$(".cart-box > button.pure-button").each(function(){
		$(this).click(function(){
			$(this).addClass("btnBg-orange").siblings().removeClass("btnBg-orange");
		});
	});

});

// 购物车
$(function(){
	total();
	//商品数量增加
	var increase = $("#cart > .cartList").find("button.increase");
	increase.click(function(){
		var num = $(this).parent().find(".num");
		num.val(parseInt(num.val())+1);
		//获取价格
		var cart_price = parseFloat($(this).parents(".wd65").find(".cart-price span").text());
		//产品小计
		var subtotal = cart_price * parseInt(num.val());
		$(this).parent().find(".subtotal").val(subtotal);
		total();
	});
	// 数量减少
	var decrease = $("#cart > .cartList").find("button.decrease");
	decrease.click(function(){
		var num = $(this).parent().find(".num");
		if(parseInt(num.val()) <= 1){
			alert("商品数量最少为1!");
			return;
		}
		else{
			num.val(parseInt(num.val())-1);
		}
		//获取价格
		var cart_price = parseFloat($(this).parents(".wd65").find(".cart-price span").text());
		//产品小计
		var subtotal = cart_price * parseInt(num.val());
		$(this).parent().find(".subtotal").val(subtotal);
		total();
	});
	//直接输入
	$("#cart .num").blur(function(){
		if(parseInt($(this).val()) < 1){
			alert("商品数量最少为1!");
			$(this).val(1);
		}
		//小计
		var subtotal = parseFloat($(this).parents(".wd65").find(".cart-price span").text()) * parseInt($(this).val());
		$(this).parent().find(".subtotal").val(subtotal);
		total();
	});
	//删除商品
	$(".cart-remove").click(function(){
		if(confirm("确定要删除吗")){
			$(this).parents(".cartList").remove();
			total();
			return false;
		}
		else{
			return false;
		}
	}); 

});

//计算购物车总金额
function total(){
	var sum = 0;
	$("#cart > .cartList").find(".subtotal").each(function(){
		sum += parseFloat($(this).val());
	});
	$("#cart-bottom .cart-priceTotal span").text(sum.toFixed(2));
	$("#cart_goods_amount").text(sum.toFixed(2));
	$("#cart_goods_pay").text(sum.toFixed(2));
}

//详细页面
$(function(){
	//添加商品数量
	$("#detailForm .increase").click(function(){
		var num = $(this).parent().find(".num");
		num.val(parseInt(num.val())+1);
		var price = parseFloat($(this).parent().find(".detail-price").val());
		total = price * parseInt(num.val());
		$("#refer_price span").text(total.toFixed(2));
	});
	//减少商品数量
	$("#detailForm .decrease").click(function(){
		var num = $(this).parent().find(".num");
		if(parseInt(num.val()) <= 1){
			alert("商品数量最少为1!");
			return;
		}
		else{
			num.val(parseInt(num.val())-1);
		}
		var price = parseFloat($(this).parent().find(".detail-price").val());
		total = price * parseInt(num.val());
		$("#refer_price span").text(total.toFixed(2));
	});
	//直接输入
	$("#detailForm .num").blur(function(){
		if(parseInt($(this).val()) < 1){
			alert("商品数量最少为1!");
			$(this).val(1);
		}
		var price = parseFloat($(this).parent().find(".detail-price").val());
		total = price * parseInt($(this).val());
		$("#refer_price span").text(total.toFixed(2));
	});
});

// 
$(function(){
	$("#detailfooter .pay-btn").click(function(){
		num = $("#detailForm .num").val();
		price = $("#detailForm .detail-price").val();
		location.href ="order.html?num="+num+"&price="+price;
	});
});

//字符串分割获取url参数
function GetRequest() {
	   var url = location.search; //获取url中"?"符后的字串
	   var theRequest = new Object();
	   if (url.indexOf("?") != -1) {
	      var str = url.substr(1);
	      strs = str.split("&");
	      for(var i = 0; i < strs.length; i ++) {
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
	      }
	   }
	   return theRequest;
}

//查询字符串参数
function getQueryStringArgs(){
	//取得查询字符串并去掉开头的问号
	var qs = (location.search.length > 0 ?  location.search.substring(1) : ""),
	//保存数据的对象
	args = {},
	//取得每一项
	items = qs.length ? qs.split("&"):[],
	item = null,
	name = null,
	value = null,
	//在for循环中使用
	i = 0,
	len = items.length;
	//逐个将每一项添加到args对象中
	for(i=0;i<len;i++){
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if (name.length) {
			args[name] = value;
		};
	}
	alert(i);
	alert(JSON.stringify(args));
	return args;
}