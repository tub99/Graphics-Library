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

G.Rectangle = function(x,y,h,w){
    var _x = x;
    var _y = y;
    var _h = h;
    var _w = w;
    var _fill= '#000';
    var _stroke = '#000';
    var _strokeWidth = 1;
    var _fillOpacity = 1;
    var _strokeOpacity = 1;
    var _id="rect";
    var tx=0;
    var ty=0;
    var userData=undefined;

    if(typeof x == 'object' && typeof y == 'object'){
        _x = x.x;
        _y = x.y;

        _w = y.w;
        _h = y.h;
    }


    var render = function(){
       var rect = '<rect id="'+_id+'" x="'+_x+'" y ="'+_y+'" width="'+_w+'" height="'+_h+'" transform=" translate('+tx+','+ty+')" style="fill:'+_fill+';stroke-width:'+_strokeWidth+';stroke:'+_stroke+';fill-opacity:'+_fillOpacity+'; stroke-opacity:'+_strokeOpacity+'" onmouseover="hoverFunction(this)" onmouseout="outFunction(this)"/>';
        return rect;
    }

    this.fillColor = function(val){
        _fill = val;
    }
    this.strokeColor = function(val){
        _stroke = val;
    }
    this.strokeWidth = function(val){
        _strokeWidth = val;
    }
    this.fillOpacity = function(val){
        _fillOpacity = val;
    }
    this.strokeOpacity = function(val){
        _strokeOpacity = val;
    }
    this.translate=function(xVal,yVal)
    {
        tx=xVal;
        ty=yVal;
    }
    this.setId=function(id)
    {
        _id=id;
    }

    //render() is kept private
    this.output = function(){
        return render();// private methods are accessed via methodname only
    }

    
}
G.Rectangle.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
}
