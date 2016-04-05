
/* Properties of a Circle element
    1. id- this helps us to uniquely identify the element
    2.x-x-coordinate of the centre of the circle
    3.y- y-coordinate of the centre of the circle
    4.radius - radius of the Circle
    5.fill - Color of the circle
    6.stroke- strokeColor ie color of the outside edge of the circle
    7.strokeWidth - width of the edgeLine of the circle
    8.fillOpacity - transparency of the circle element
    9.Stroke opacity - transparency of the edge Line


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
     // sets an identity for the circle element {@param val->String(identity)}
    this.setId = function(val){
        _id = val;
    };
     // returns the id of the element
    this.getId = function(){
        return _id;
    };

    //list of public functions ie the  setter functions
    // gives a color to the circle {@param val->String(color)}
    this.fill = function(val){
        _fill = val;
    };
       // sets the color of stroke of the circle {@param val->String(color)}
    this.stroke = function(val){
        _stroke = val;
    };
     // sets the width of the circle {@param val->Number(size)}
    this.stroke_width = function(val){
        _strokeWidth = val;
    };
    // sets the transparancy of the fill color {@param val->Number(0-100)}
    this.fillOpacity = function(val){
        _fillOpacity = val;
    };
    // sets the transparancy of the edge of the circle{@param val->Number(0-100)}
    this.strokeOpacity = function(val){
        _strokeOpacity = val;
    };
    // A public function responsible which does the main rendering of the elements
    this.output = function(){
        return render();
    };
};
// attaching events to the SVG element
G.Circle.prototype.action = function(action,func){
    var _ael = this.getId(),
        _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
};
