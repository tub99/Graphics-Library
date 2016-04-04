
/* Properties of a Circle element
    1. id- this helps us to uniquely identify the element
    2.class- used for identifying a common group of elements
    3.x- x-coordinate of the centre of the circle
    4.y- y-coordinate of the centre of the circle
    5.radius - radius of the Circle
    6.fillColor - Color of the circle
    7.strokeColor - strokeColor ie color of the outside edge of the circle
    8.strokeWidth - width of the edgeLine of the circle
    9.fillOpacity - transparency of the circle element
    10.Stroke opacity - transparency of the edge Line


 * G.Circle creates a svg circle elemnt
 * @param {Number} x -> x co-ordinate of cirlcle's origin 
 * @param {Number} y -> x co-ordinate of cirlcle's origin 
 * @return {Number} radius-> radius of the circle
 */
G.Circle = function(x,y,radius){
    var _id = "R"+Math.round(Math.random()*100),
        _class = "",
        _x = x,
        _y = y,
        _r=radius,
        _fill= '#000',
        _stroke = '#000',
        _strokeWidth = 1,
        _fillOpacity = 1,
        _strokeOpacity = 1,
        // The render function creates actual the svg of the circle element
        render = function(){
            var cls = '';
            var _style = 'cx:'+_x+';cy:'+_y+';r:'+_r+'; fill:'+_fill+';stroke-width:'+_strokeWidth+';stroke:'+_stroke+';fill-opacity:'+_fillOpacity+'; stroke-opacity:'+_strokeOpacity+'';

           if(_class !== "") cls ='class ="'+_class+'"';

            var circle = '<circle id="'+_id+'" '+cls+' style="'+_style+'" />';
            return circle;
        };
    // filtering values and assigning them properly
    if(typeof x === 'object' && typeof y === 'object'){
        _x = x.x;
        _y = x.y;

        _w = y.w;
        _h = y.h;
    }
    // the following methods are the getter and setter for the properties of
    // a Circle element discussed above
    this.setId = function(val){
        _id = val;
    };
    this.getId = function(){
        return _id;
    };
    this.setClass = function(val){
        _class = val;
    };
    this.getClass = function(){
        return _class;
    };
    this.fillColor = function(val){
        _fill = val;
    };
    this.strokeColor = function(val){
        _stroke = val;
    };
    this.strokeWidth = function(val){
        _strokeWidth = val;
    };
    this.fillOpacity = function(val){
        _fillOpacity = val;
    };
    this.strokeOpacity = function(val){
        _strokeOpacity = val;
    };
    // A public function responsible which does the main rendering of the elements
    this.output = function(){
        return render();
    };
};
// attaching events to various SVG elements
G.Circle.prototype.action = function(action,func){
    var _ael = this.getId(),
        _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
};
