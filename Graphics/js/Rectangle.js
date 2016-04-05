/* G.Rectangle(x,y,h,w) is a constructor function to create 
    rectangles based on the position of a corner and their 
    width and height.
    {@param x->Number(co-ordinate)}
    {@param y->Number(co-ordinate)}
    (x,y) is the position of the top-left corner of rectangle
    {@param h->Number(size)}
    {@param w->Number(size)}
    h & w are the height and width of the rectangle respectively

 */

G.Rectangle = function(x,y,h,w){
    var _x = x,
        _y = y,
        _h = h,
        _w = w,
        _fill= '#000',
        _stroke = '#000',
        _strokeWidth = 1,
        _fillOpacity = 1,
        _strokeOpacity = 1,
        _id="rect",
        tx=0,
        ty=0,
        userData,
        // The render function creates actual the svg of the rect element
        render = function(){
            var rect = '<rect id="'+_id+'" x="'+_x+'" y ="'+_y+'" width="'+_w+'" height="'+_h+'" transform=" translate('+tx+','+ty+')" style="fill:'+_fill+';stroke-width:'+_strokeWidth+';stroke:'+_stroke+';fill-opacity:'+_fillOpacity+'; stroke-opacity:'+_strokeOpacity+'" onmouseover="hoverFunction(this)" onmouseout="outFunction(this)"/>';
            return rect;
        };
    // filtering values and assigning them properly
    if(typeof x == 'object' && typeof y == 'object'){
        _x = x.x;
        _y = x.y;

        _w = y.w;
        _h = y.h;
    }

 
    //list of public functions ie the  setter functions
    // gives a color to the rect {@param val->String(color)}
    this.fill = function(val){
        _fill = val;
    };
    // sets the color of stroke of the rect {@param val->String(color)}
    this.stroke = function(val){
        _stroke = val;
    };
    // sets the width of the rect {@param val->Number(size)}
    this.stroke_width = function(val){
        _strokeWidth = val;
    };
    // sets the transparancy of the fill color {@param val->Number(0-100)}
    this.fillOpacity = function(val){
        _fillOpacity = val;
    };
    // sets the transparancy of the edge of the rectangle {@param val->Number(0-100)}
    this.strokeOpacity = function(val){
        _strokeOpacity = val;
    };
    // moves rectangle to a point (xVal,yVal)
    // {@param xVal->Number(co-ordinate)}
    // {@param yVal->Number(co-ordinate)}
    this.translate=function(xVal,yVal)
    {
        tx=xVal;
        ty=yVal;
    };
    // sets an identity for the rect element {@param val->String(identity)}
    this.setId=function(id)
    {
        _id=id;
    };
    // returns the id of the element
    this.getId = function()
    {
        return _id;
    };

   // calls the render() fuction and creates the svg of rect element
    this.output = function(){
        return render();
    };

    
};
G.Rectangle.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
};
