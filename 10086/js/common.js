/**
 * Created by fengjunhui on 2016/5/10.
 */

var HOST = "http://" + location.host;
var ROOT = '/static/html/turntable/res_v3.0/';
var URL = {
	'getCode' : '',
	'infoAdd' : '/h5/turntable_two/add_address',
	'myPrize' : '/h5/turntable_two/my_prize',
	'winnerList' : '/h5/turntable_two/winners_record?num=50',
	'lottery' : '/h5/turntable_two/run'
};
var AWARDS = {
	0 : {
		id : 0,
		name : '多谢惠顾'
	},
	1 : {
		id : 1,
		name : '话费'
	},
	2 : {
		id : 2,
		name : '流量'
	},
	3 : {
		id : 3,
		name : '代金券'
	},
	4 : {
		id : 0,
		name : '实物'
	},
	5 : {
		id : 4,
		name : '0元宽带'
	},
	6 : {
		id : 5,
		name : '免费年包'
	}
};
var LINKS = {
	0 : {
		name : '95折充值',
		url : 'http://gd.10086.cn/gmccapp/webpage/youhui500/shareYouhui.html?code=0cff060e&session=gmccapp&from=singlemessage&isappinstalled=1'
	},
	1 : {
		name : '微店10元1G',
		url : 'http://h5.gmccopen.com/h5/flowq!index.action?channelId=wechat_gzmcc&storeId=B10015'
	},
	2 : {
		name : '微店8折叠加包',
		url : 'http://h5.gmccopen.com/h5/flowq!index.action?channelId=wechat_gzmcc&storeId=B10015'
	}
};
var EFFECT = ["bounce","flash","pulse","rubberBand","shake","swing","tada","wobble",
	"bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp",
	"bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp",
	"fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig",
	"fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig",
	"flip","flipInX","flipInY","flipOutX","flipOutY",
	"lightSpeedIn","lightSpeedOut",
	"rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight",
	"rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight",
	"slideInDown","slideInLeft","slideInRight","slideOutLeft","slideOutRight","slideOutUp",
	"hinge","rollIn","rollOut"];

var $body = $("body"),
	$container = $("#container"),
    $mask = $("#mask"),
    $section = $container.find("section"),
    $secHome = $("#home"),
    $secRule = $("#rule"),
	$mobiForm = $("#mobiForm");

var TPL = function(type,data){
	var _tpl = '',
		data = data || {};
	switch (type){
		case "share" : {
			_tpl =  '<img src="'+ROOT+'img/share_tips.png" width="100%" />';
			return _tpl;
			break;
		}
		case "alert" : {
			_tpl =  '<div class="popup">'+
						'<span class="close ac_close'+(data.option.btnClose==true?' show':' hide')+'">×</span>'+
						(data.option.title ? '<div class="pop-header">'+data.option.title+'</div>':'')+
						'<div class="pop-body">'+data.content+'</div>'+
						'<div class="pop-footer"><a href="javascript:void(0)" class="btn ac_confirm'+(data.option.onConfirm && typeof(data.option.onConfirm)==='function' ? '':' ac_close')+'">'+(data.option.confirmText||'确定')+'</a></div>'+
					'</div>';
			return _tpl;
			break;
		}
		case "dialog" : {
			_tpl =  '<div class="popup dialog">'+
						'<span class="close ac_close">×</span>'+
						(data.option.title ? '<div class="pop-header">'+data.option.title+'</div>':'')+
						'<div class="pop-body">'+data.content+'</div>'+
						'<div class="pop-footer">'+
                            '<a href="javascript:void(0)" class="btn ac_confirm'+(data.option.onConfirm && typeof(data.option.onConfirm)==='function' ? '':' ac_close')+'">'+(data.option.confirmText||'确定')+'</a>'+
                            '<a href="javascript:void(0)" class="btn ac_cancel'+(data.option.onCancel && typeof(data.option.onCancel)==='function' ? '':' ac_close')+'">'+(data.option.cancelText||'取消')+'</a>'+
                        '</div>'+
					'</div>';
			return _tpl;
			break;
		}
        case "prizes" : {
            var _link = '';
			var _expire = '(使用截止日期：'+data.dead_line+')';
            if(data.award_type==1){
                _link = '<a href="javascript:void(0)">'+(data.is_success=='1' ? '已到账' : '未到账')+'</a>';
				_expire = '(使用有效期：以短信通知为准)';
            }else if(data.award_type==2){
                _link = '<a href="javascript:void(0)">'+(data.is_success=='1' ? '已到账' : '未到账')+'</a>';
				_expire = '(使用有效期：以短信通知为准)';
            }else if(data.award_type==3){
                _link = '<a href="'+data.skip_url+'">马上使用</a>';
				_expire = '(使用截止日期：以商家页面提示为准)';
            }else if(data.award_type==4) {
                _link = '<a href="info?winner_id=' + data.winner_id + '">' + (data.is_address == '1' ? '查看登记信息' : '马上登记') + '</a>';
                _expire = '(请于' + expire_date + ' 24时前登记个人信息领取奖品)';
            }else if(data.award_type==6){
                _link = '<a href="'+data.skip_url+'">马上办理</a>';
                _expire = _expire+'(办理需满足指定条件，详情请以页面为准)';
            }else{
				_link = '<a href="'+data.skip_url+'">马上办理</a>';
			}
            _tpl =  '<li class="style'+data.award_type+'">'+
                '<h2>'+data.award_name+'<span style="display:block;padding:0">'+ _expire +'</span></h2>'+
                '<div>'+
                '<span>中奖时间：'+data.winner_date+'</span>'+(data.is_weixin==1 ? _link : '')+
                '</div>'+
                '</li>';
            return _tpl;
            break;
        }
		case "exchange1" : {
			_tpl =  '<li class="style'+data.award_type+'">'+
				'<h2>'+data.award_name+'<span style="display:block;padding:0">兑换截止日期：'+data.dead_line+'</span></h2>'+
				'<div>'+
				'<span>中奖时间：'+data.ctime+'</span>'+
				'<a href="javascript:void(0)" class="'+(data.overdue==0 ? 'ac_exchange' : 'locked')+'" data-wid="'+data.winner_id+'" data-tid="'+data.award_type+'">'+(data.overdue==0 ? '马上兑换' : '已失效')+'</a>' +
				'</div>'+
				'</li>';
			return _tpl;
			break;
		}
		case "exchange2" : {
			var _expire = '使用截止日期：'+data.dead_line;
			var _btn = '马上办理';
            if(data.award_type==1){
				_expire = '使用有效期：以短信通知为准';
            }else if(data.award_type==2){
				_expire = '使用有效期：以短信通知为准';
            }else if(data.award_type==3){
				_expire = '使用截止日期：以商家页面提示为准';
				_btn = '马上使用';
            }else if(data.award_type==6){
                _expire = _expire+'(办理需满足指定条件，详情请以页面为准)';
            }
			_tpl =  '<li class="style'+data.award_type+'">'+
				'<h2>'+data.award_name+'<span style="display:block;padding:0">'+_expire+'</span></h2>'+
				'<div>'+
				'<span>中奖时间：'+data.ctime+'</span>'+
				'<a href="'+(data.skip_url ? data.skip_url : 'javascript:void(0)')+'" data-wid="'+data.winner_id+'">'+(data.award_type>2 ? _btn : data.arrival==1 ? '已到账' : '未到账')+'</a>' +
				'</div>'+
				'</li>';
			return _tpl;
			break;
		}
		case "rule" : {
			_tpl =  '<div class="popup">'+
						'<div class="pop-header">活动规则</div>'+
						'<div class="pop-body large">'+
							'<p><strong>一、活动时间：</strong>即日起至9月30日</p>'+
							'<p><strong>二、活动内容：</strong>活动期间，目标用户每天可参与一次大转盘抽奖活动。</p>'+
							'<p><strong>三、奖品设置：</strong></p>'+
							'<p>（1）奖品库定期补充更新，奖品设置请以页面显示为准。</p>'+
							'<p>（2）部分奖品有兑换期限，请见“我的奖品”中对应奖品的说明，及时兑换。</p>'+
							'<p><strong>四、奖品兑换：</strong></p>'+
                            '<p>（1）从微信渠道参与活动：中奖的奖品将自动下发，具体流量、话费奖品到账时间请以10086 短信提醒为准。</p>'+
                            '<p>（2）从非微信渠道参与活动：根据页面提示，进入兑换页面进行兑奖。</p>'+
                            '<p>注意：领取成功的流量、话费奖品将于5个工作日内自动到账，请留意10086短信提醒；实物奖品将根据预留信息于30个工作日内出库配送。</p>'+
							'<p><strong>五、其他说明</strong></p>'+
							'<p>以下情况将无法参与活动：非广州移动号码、低值用户、GPRS无限量套餐客户、4G随心王套餐客户、多号通的副号、一卡双号副号、家庭服务计划副号等虚拟号码客户、内部员工号码、集团代付/对公托收（如政企动力100行业卡）客户、集团全额统付号码、手机状态异常（停机、销户、欠费等状态）等。</p>'+
							'<p>注：本月内已获赠0元1G流量特惠包的用户，只能获赠一次，不能重复获赠。</p>'+
						'</div>'+
						'<div class="pop-footer"><a href="javascript:void(0)" class="btn ac_close ac_confirm">返回</a></div>'+
					'</div>';
			return _tpl;
			break;
		}
	}
}

var POPUP = {
	alert: function(content,option){
		content = content || "";
		option = option || {};
		$mask.html(TPL("alert",{content:content,option:option})).show();
        this.setCenter();
		if(option.onConfirm && typeof(option.onConfirm)==="function"){
			$mask.find(".ac_confirm").one("click",option.onConfirm);
		}
	},
	dialog: function(content,option){
		content = content || "";
		option = option || {};
		$mask.html(TPL("dialog",{content:content,option:option})).show();
        this.setCenter();
		if(option.onConfirm && typeof(option.onConfirm)==="function"){
			$mask.find(".ac_confirm").one("click",option.onConfirm);
		}
		if(option.onCancel && typeof(option.onCancel)==="function"){
			$mask.find(".ac_cancel").one("click",option.onCancel);
		}
	},
	show: function(content){
		content = content || "";
		$mask.html(content).show();
		this.setCenter();
	},
	hide: function(animation){
		animation = animation||"";
		if(animation && checkEffect(animation)){
			var $pop = $mask.find(".popup");
			showAnimation($pop,animation);
			setTimeout(function(){
				$mask.empty().hide();
			},600);
		}else{
			$mask.empty().hide();
		}
	},
	share: function(){
		var t = this;
		$mask.html(TPL("share")).show().one("click",function(){
			t.hide();
		});
	},
	loading: function(){
		var tpl = '<div class="loading"></div>';
		$mask.html(tpl).show();
	},
    setCenter: function(){
        var $pop = $mask.find(".popup"),
            winHeight = $(window).height(),
            popHeight = $pop.height();
        if(winHeight>popHeight){
            $pop.css('margin-top',(winHeight-popHeight)/2);
        }
		showAnimation($pop,"bounceIn");
    }
}

function isHTMLEmpty($obj){
	if($obj.html().trim()){
		return false;
	}
	return true;
}

function isEmpty($obj,$tip){
	if($obj.val()){
		return false;
	}
    POPUP.alert($tip);
	return true;
}

function checkMobile($obj){
	if(isEmpty($obj,"<h3 class='center'>请先填写您的手机号码！</h3>")){return false;}
	if(!(/^1(3|4|5|7|8)\d{9}$/.test($obj.val()))){POPUP.alert("<h3 class='center'>您输入的号码有误，请重新输入！</h3>"); return false;}
	return true;
}

function checkEffect(effect){
	effect = effect || "";
	if(!effect){return false;}
	var tmp = EFFECT.join(",");
	if(tmp.indexOf(effect)>=0){return true;}
	return false;
}

function showAnimation(obj,effect) {
	effect = effect || "";
	if(effect && checkEffect(effect)){
		$(obj).addClass(' animated '+effect).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass(' animated '+effect);
		});
	}
};

function getCodeCountDown(time,$obj) {
    if(time--) {
        $obj.addClass("locked").html('- '+time+'s');
        setTimeout(function() {
            getCodeCountDown(time,$obj);
        }, 1000);
    }else {
        $obj.removeClass("locked").html('发送验证码');
    }
}

function startLottery(result,callback){
	result = result || 0;
	result = AWARDS[result].id;
/*	if(result>0){
		result = OPT.good[result][0];
	}else{
		var ram = Math.floor(Math.random() * 4) + 1;
		result = OPT.bad[ram][0];
	}*/
	var loop = 6,    //转动圈数
        parts = 6,    //转盘分成多少等分
		deg = (result==0 ? 360*loop : 360*loop + 360/parts * result) + 360/parts/2;
    $(".marquee-lamp .inner").addClass("fast");
	$("#lotteryPointer").turntable({
		startAngle:0,  //起始角度
        endAngle:deg,  //结束的角度
		prize: '#prizeDisc',//转盘奖品容器
        hoverClass: 'hover',//指针经过时class
		callback:callback //回调函数
	});
}

function getMyPrize(){
	var tpl = '';
	var url = URL["myPrize"]+'?mobi='+MOBI;
	if(MOBI){
		$.getJSON(url,function(r){
			if(r && r.code==0){
				var d = r.data;
				if(!!d && d.length>0){
					for(var i in d){
						tpl += TPL("prizes",d[i]);
					}
				}else{
					tpl = '<h3 class="center">您还未中奖，继续加油哦！</h3>';
				}
                $(".my-prize-list").html(tpl);
			}
		});
	}
}

function getWinners(){
	var tpl = '';
	var url = URL["winnerList"];
	$.getJSON(url,function(r){
		if(r && r.code==0){
			var d = r.data;
			if(!!d && d.length>0){
				for(var i in d){
					tpl += '<p><img src="'+(d[i].headimgurl ? d[i].headimgurl : ROOT+'img/logo_cmcc.png')+'" class="avatar">'+d[i].result+'</p>';
				}
			}else{
				tpl = '<p>还没有幸运者出现，要加油哦！</p>';
			}
            $("#winnerList").html(tpl);
		}
	});
}

function addMobiToUrl(url,mobi){
	url = url||"";
	if(!url) return false;
	var link = "";
	if(url.indexOf("#")>=0){
		link = url.split("#");
		if(link[0].indexOf("?")>=0){
			link[0] += '&mobi=' + mobi;
		}else{
			link[0] += '?mobi=' + mobi;
		}
		link = link.join("#");
	}else{
		if(url.indexOf("?")>=0){
			link = url + '&mobi=' + mobi;
		}else{
			link = url + '?mobi=' + mobi;
		}
	}
	return link;
}

$mask.on("click",".ac_close",function(e){
	e.preventDefault();
	POPUP.hide("bounceOut");
});

$container.on("click",".ac_showRule",function(e){
	e.preventDefault();
	POPUP.show(TPL("rule"));
});

$container.on("click",".ac_share",function(e){
	e.preventDefault();
	POPUP.share();
});

$container.on("click",".nav-tab",function(e){
	e.preventDefault();
	var $t = $(this),
		obj = $t.data("for"),
		$obj = $('#'+obj);
	if($t.hasClass("current")) return;
	if(obj=='notExchange'){
		$(".exchange-tips").show();
	}else{
		$(".exchange-tips").hide();
	}
	$t.addClass("current").siblings().removeClass("current");
	$obj.addClass("current").siblings().removeClass("current");
});

$container.on("click",".ac_switchSection",function(e){
	e.preventDefault();
    var o = $(this).data("for");
    if(o){
		if(o=="myPrize"){
			if(!MOBI){
				$mobiForm.show();
				return;
			}
			getMyPrize();
		}
		//$('html').scrollTop(0);/* for zepto */
		$('html,body').animate({scrollTop:0});
        $section.removeClass("show");
        $("#"+o).addClass("show");
		showAnimation("#"+o,"fadeInLeft");
    }
});

$container.on("click",".ac_start",function(e){
	e.preventDefault();
	var $t = $(this);
	startLottery();
	return;
	/*if($t.hasClass("locked")) return;
	if(!MOBI){
		$mobiForm.show();
		return;
	}
	*/
	var url = URL["lottery"]+"?mobi="+MOBI;
	var ram = Math.floor(Math.random() * 3);
	var txt = '<h3 class="center normal">很可惜，奖品与你擦肩而过~</h3>'+
				'<p class="unlucky-ramdom-text"><strong>'+LINKS[ram].name+'</strong>却与你只有0.1厘米的距离<br />'+
				'<a href="'+LINKS[ram].url+'">马上办理》</a></p>';
	$t.addClass("locked");
	$.getJSON(url,function(r){
		if(r && r.code==0){
            startLottery(r.data.award_type,function(){
                if(r.data.award_type>0){
                	var btnTxt = '马上领取';
					if(r.data.award_type==4){
/*						POPUP.alert('<h3 class="center">'+ r.msg+'</h3>',{
							title:"亲，恭喜您！",
							confirmText:"马上登记",
							onConfirm:function(){
								location.href = 'info?winner_id='+ r.data.winner_id;
							}
						});*/
						POPUP.alert(txt,{confirmText:'我知道了'});
					}else{
						if(r.data.award_type==3){
							btnTxt = '马上使用';
						}else if(r.data.award_type==5){
							btnTxt = '马上办理';
						}else if(r.data.award_type==6){
							btnTxt = '马上办理';
						}
						if(r.data.skip_url){
							POPUP.alert('<h3 class="center">'+ r.msg+'</h3>'+(r.data.exchange_code ? '<h2 class="center">'+r.data.exchange_code+'</h2>' : ''),{
								title:"亲，恭喜您！",
								confirmText:btnTxt,
								onConfirm:function(){
									location.href = r.data.skip_url;
								}
							});							
						}else{
							POPUP.alert('<h3 class="center">'+ r.msg+'</h3>',{title:"亲，恭喜您！"});
						}
					}
                }else{
					POPUP.alert(txt,{confirmText:'我知道了'});
                }
				$(".marquee-lamp .inner").removeClass("fast");
                $t.removeClass("locked");
            });
		}else if(r && r.code==2){
            POPUP.alert('<h3 class="center">'+ r.msg+'</h3>',function(){
                window.location.href = r.data.url;
            });
		}else if(r && r.code==4){
			POPUP.alert('<h3 class="center">'+ r.msg+'</h3>',function(){
				$mobiForm.show();
			});
		}else if(r && r.code==5){
			POPUP.alert('<h3 class="center">抱歉您不是本活动的受邀客户，请移步广州移动菜单栏点击“我要优惠”参加其他优惠活动</h3>');
		}else{
            POPUP.alert('<h3 class="center">'+ r.msg+'</h3>');
			//$t.removeClass("locked");
		}
	});
});

$mobiForm.on("click",".ac_saveMobi",function(e){
	e.preventDefault();
	var $t = $(this);
	var $mobile = $mobiForm.find("input[name='mobi']");
	if(checkMobile($mobile)){
		var m = $mobile.val().trim();
		POPUP.dialog('<h3 class="center">您登记的手机号码为：</h3><h2 class="center">'+m+'</h2><h3 class="center">是否确定提交？</h3>',{
			confirmText:"确定提交",
			cancelText:"返回修改",
			onConfirm:function(){
				$mobile.val("");
				var url = window.location.href;
				var newUrl = addMobiToUrl(url,m);
				window.location.href = newUrl;
			}
		});
	}
});