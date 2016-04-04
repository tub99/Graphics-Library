////G is a namespace Object
var G = function(el){
        this._el = document.querySelector(el);
} || {};
// Scene is the place we want to draw svg
G.Scene = function(el,w,h){
    this.obj_str = "";
    this._w = w || "100%";
    this._h = h || "100%";
//checking if a div element doesn't exist it creates one with 'canvas' class 
    if(typeof el !== "string" || el === "" || this._el === "")
    {
       document.write('<div class="canvas"></div>');
    }
    // fetches the element on which we want to draw 
    var element = this._el || el || ".canvas";
        this._el = document.querySelector(element);
};
// Appends the svg as string
G.Scene.prototype.add = function(obj){
    this.obj_str += obj.output();
};
// This creates the total svg that was acquired from the shapes
// val parameter contains the svg string of the elements
G.Scene.prototype.render = function(val)
{
    this._svgval = val || this.obj_str;
    
    return this._el.innerHTML = '<svg version="1.1" baseProfile="full" width="'+this._w+'" height="'+this._h+'"     xmlns="http://www.w3.org/2000/svg">'+this._svgval+'</svg>';
};
