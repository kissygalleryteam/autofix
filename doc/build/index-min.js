/*!build time : 2014-02-11 3:56:03 PM*/
KISSY.add("kg/autofix/2.0.0/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e=a.Node.all,f=a.Event,g=a.DOM;return a.extend(d,c,{scrollBottom:function(a,b){var c=e(a),d=e(b[0]).offset().top;f.on(window,"scroll",function(){var a,f,h,i=document.body.scrollTop;h=c.height();for(var j=0;j<b.length;j++)a=e(b[j]),f=e(a).parent(),g.css(f,{position:"relative",height:h}),e(a).css(d+h<=i+a.height()?{position:"absolute",top:"auto",bottom:"0"}:i>=d?{position:"fixed",top:"0",bottom:"auto"}:{position:"static"})})}},{ATTRS:{}}),d},{requires:["node","base"]});