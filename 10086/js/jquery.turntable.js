/**
 * Created by fengjunhui on 2016/5/23.
 * Last Update: 2016/5/24
 */

(function($){
    var MSIEBrowser = function(){
        var rorateIt = function(node,deg){
            //取得末变形前矩形的中点
            var rect = node.getBoundingClientRect(),
                cx1 = (rect.right  - rect.left) / 2, // center x
                cy1 = (rect.bottom - rect.top)  / 2, // center y
                deg2rad =  Math.PI / 180,//角度转弧度
                rad = deg * deg2rad ,
                cos = Math.cos(rad),
                sin = Math.sin(rad);
            var ident  = "DXImageTransform.Microsoft.Matrix";
            node.style.filter = "progid:"+ident +"(M11='1.0',sizingmethod='auto expand')";
            //http://www.satzansatz.de/cssd/onhavinglayout.html
            if(!node.currentStyle.hasLayout){//在IE7中，如果没有获得hasLayout，滤镜会失效
                node.style.writingMode  = "tb-rl";
            }
            var filter = node.filters.item(ident);
            //  +-------+-------+
            //  |  M11  |  M12  |
            //  +-------+-------+
            //  |  M21  |  M22  |
            //  +-------+-------+
            filter.M11 = cos;
            filter.M12 = -sin;
            filter.M21 = sin;
            filter.M22 = cos;
            //取得当前中心
            rect = node.getBoundingClientRect();
            var cx = (rect.right  - rect.left) / 2;
            var cy = (rect.bottom - rect.top)  / 2;
            //调整此元素的坐标系，实现CSS3 transform-origin的功能
            node.style.marginLeft = cx1 - cx + "px";
            node.style.marginTop  = cy1 - cy + "px";
        }
        this.rorateIt = function(node, deg){
            rorateIt(node,0);
            rorateIt(node,deg);
        }
        this.getValue = function(){
            return 1;
        }
    }
    var W3CBrowser = function(){
        var rorateIt = function(node,deg){
            var cssText = "-webkit-transform: rotate("+ deg +"deg);"
            cssText += "-moz-transform: rotate("+ deg +"deg);"
            cssText += " -o-transform: rotate("+ deg +"deg);"
            cssText += " transform: rotate("+ deg +"deg);"
            node.style.cssText = cssText;
        }
        this.rorateIt = function(node,deg){
            rorateIt(node,deg);
        }
        this.getValue = function(){
            return 0.2;
        }
    }
    function createBrowser(){
        var isMSIE = navigator.userAgent.indexOf("MSIE") != - 1 ? true : false;
        if(isMSIE){
            return new MSIEBrowser();
        }else{
            return new W3CBrowser();
        }
    }
    var browser = createBrowser();
    var turntable = {
        config : {
            startAngle: 0,  //起始角度
            endAngle: 0,  //结束的角度
            deg: 0,//标记数字，每360度清0
            degCount: 0,    //旋转过的角度
            degChange: 40, //变速角度
            prize: "",          //奖品容器
            hoverClass: "",    //指针经过奖品时class
            callback: null //回调函数
        },
        getIdentity : function(opt){
            opt = opt || {};
            var t = this;
            var count = opt.endAngle / opt.degChange; //要更新速度次数
            var alreadycount = opt.degCount  / opt.degChange; //已更新速度次数
            var identity = count/2 - Math.abs(alreadycount - count/2);
            identity = identity <= 3 ? 3 : identity;
            if(alreadycount<count/2){
                identity = identity <= 10 ? 10 : identity;
            }
            return identity * browser.getValue();
        },
        start : function(obj,opt){
            var t = this;
            var cfg = t.config;
            t.reset(obj);
            if(opt) $.extend(cfg,opt);
            var timer = window.setInterval(function(){
                var identity = t.getIdentity(cfg);
                var curPrize = t.getCurPrize(cfg);
                if(curPrize && !$(curPrize).hasClass(cfg.hoverClass)){
                    $(curPrize).addClass(cfg.hoverClass).siblings().removeClass(cfg.hoverClass);
                }
                if(cfg.degCount >= cfg.endAngle){
                    window.clearInterval(timer);
                    if ($.isFunction(cfg.callback)) cfg.callback.call(this);
                    return;
                }
                if(cfg.deg>=360) cfg.deg -= 360;
                cfg.deg += identity;
                cfg.degCount += identity;
                browser.rorateIt(obj,cfg.deg);
            },8);
        },
        reset : function(obj){
            this.config.degCount = 0;
            this.config.deg = 0;
            browser.rorateIt(obj,0);
        },
        getCurPrize : function(opt){
            opt = opt || {};
            var t = this;
            if(!opt.prize) return;
            if($(opt.prize).length==0) return;
            var prize = $(opt.prize).children();
            var num = prize.length;
            var curPrize ;
            $.each(prize,function(i,o){
                if(opt.deg > i*360/num && opt.deg < (i+1)*360/num){
                    curPrize = prize[i];
                    return false;
                }
            });
            return curPrize;
        }
    }

    $.fn.turntable = function(parameters){
        if (this.length===0||typeof parameters=="undefined") return;
        if (typeof parameters=="number") parameters={endAngle:parameters};
        return this.each(function(){
            var $t = $(this);
            turntable.start(this,parameters);
            //alert(turntable.test)
        });
    }
})(jQuery);
