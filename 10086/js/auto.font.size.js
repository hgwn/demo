(function(_D){
		var _self = {};
		_self.Html = _D.getElementsByTagName("html")[0];
		_self.widthProportion = function(){var p = (_D.body&&_D.body.clientWidth||_self.Html.offsetWidth)/640;return p>1.2?1.2:p<0.5?0.5:p;};
		_self.changePage = function(){_self.Html.setAttribute("style","font-size:"+_self.widthProportion()*20*10+"px");}
		_self.changePage();
		setInterval(_self.changePage,400);
})(document);
