
var loader = setInterval(function(){
    var ads = $("span:contains('广告')");
    console.log(ads.length,'====================');
    if(ads.length<=0){
        console.log('this is 0 ad');
        clearInterval(loader);
    }else{
        //$("span:contains('广告')").parent().parent().parent().parent().parent().css('display', 'none')
        //以下参考绿色搜索插件代码
        var _pri = []
        var aAd = [].concat(
            [].slice.call(document.querySelectorAll('[data-tuiguang]'))
            , [].slice.call(document.querySelectorAll('span.m'))
        );
        aAd = aAd.filter(function (elm) {
            return elm.innerText === '广告' || elm.innerText === '推广';
        });
        _pri["getLi"] = function (elm) {
            //elm = $0;
            try{
                var e = elm;
                var aP = [];
                while(e !== document.body) {
                    aP.push(e);
                    e = e.parentNode;
                }
                var eLi;
                aP.some(function (el) {
                    if(el.matches('#content_left > *')) {
                        eLi = el;
                        return el;
                    }
                }); 
                return eLi;
            }catch(e){
                console.log(e)
            }
			
		};
        aAd.forEach(function (elm) {
            var eResultLi = _pri.getLi(elm);
            if(eResultLi) {
                eResultLi.parentNode.removeChild(eResultLi);
            }
        })
    }
},1000)
