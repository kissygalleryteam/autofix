/*
combined files : 

kg/autofix/2.0.0/index

*/
/**
 * @fileoverview 
 * @author 吕海燕<969383776@qq.com>
 * @module autofix
 **/
KISSY.add('kg/autofix/2.0.0/index',function (S, Node,Base) {
    var EMPTY = '';
    var $ = S.Node.all,Event= S.Event,DOM= S.DOM;
    /**
     * 
     * @class Autofix
     * @constructor
     * @extends Base
     */
    function Autofix(comConfig) {
        var self = this;
        //调用父类构造函数
        Autofix.superclass.constructor.call(self, comConfig);
    }
    S.extend(Autofix, Base, /** @lends Autofix.prototype*/{
        /*
         * @method scrollBottom
         * @param cnt(父元素) elem(需要固定的元素)
         *
         * */
        scrollBottom:function(cnt, elem){
            var $cnt = $(cnt);//父元素

            var scrolltop = $(elem[0]).offset().top;//元素距离上边的距离

            Event.on(window, 'scroll', function (e) {
                var element, parentElem, _height;
                var scrollbar = document.body.scrollTop;//滚动条高度
                _height = $cnt.height();//父元素高度
                for(var i=0;i<elem.length;i++){
                    element = $(elem[i]);
                    parentElem = $(element).parent();
                    DOM.css(parentElem,{position: 'relative', height: _height});
                    if(scrolltop + _height <= scrollbar + element.height()){
                        $(element).css({position: 'absolute', top: 'auto', bottom: '0'});
                    } else if(scrolltop <= scrollbar){
                        $(element).css({position: 'fixed', top: '0', bottom: 'auto'});
                    } else {
                        $(element).css({position: 'static'});
                    }
                }
            });
        }

    }, {ATTRS : /** @lends Autofix*/{

    }});
    return Autofix;
}, {requires:['node', 'base']});




