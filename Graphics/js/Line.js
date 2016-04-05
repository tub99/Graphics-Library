//G.Line(x1,y1,x2,y2)--> G.Line() is a constructor function which takes 4 parameters
// x1,y1 are the co-ordinates of 1st point
// x2,y2 are the co-ordinates of the 2nd point and hence a line is
// drawn between the 2 points

G.Line= function(x1,y1,x2,y2)
{
	var _x1=x1,
		_y1=y1,
		_x2=x2,
		_y2=y2,
		_fill="transparent",
		_stroke="black",
		_stroke_width="0.5",
		_id,

	//private render method which creates the svg for a line element
		render=function()
		{
			var line='<line id="'+_id+'" x1="'+_x1+'" y1="'+_y1+'" x2="'+_x2+'" y2="'+_y2+'" fill="'+_fill+'" stroke="'+_stroke+'" stroke-width="'+_stroke_width+'" />';
			console.log(line);
			return line;
		};
	//list of public functions ie the  setter functions
	// gives a color to the line {@param val->String(color)}
	this.fill=function(val)
	{
		_fill=val;
	};
	// sets the color of stroke of the line {@param val->String(color)}
	this.stroke=function(val)
	{
		_stroke=val;
	};
	// sets the width of the line {@param val->Number(size)}
	this.stroke_width=function(val)
	{
		_stroke_width=val;
	};
	// calls the render() fuction and creates the svg of line element
	this.output=function()
	{
		return render();
	};
	// sets an identity for the line element {@param val->String(identity)}
	this.setId=function(id)
    {
        _id=id;
    };
    // returns the id of the element
	this.getId = function()
	{
		return _id;
	};

};
// attaches an event/action to the line element
G.Line.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
};