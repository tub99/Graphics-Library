/*  G.path(id) is a constructor function.
	{@param id->String(identity)}
	For creating a path element we have various commands
	The following commands are available for path data:
	•	M = moveto
	•	L = lineto
	•	H = horizontal lineto
	•	V = vertical lineto
	•	C = curveto
	•	S = smooth curveto
	•	Q = quadratic Bézier curve
	•	T = smooth quadratic Bézier curveto
	•	A = elliptical Arc
	•	Z = closepath

	We can pass the generated path as string through the constructor
	function and 'arguments' property will take the remaining
	responsibility 
*/
G.Path= function()
{
	var _id,
		_array=arguments,
		_fill="transparent",
		_stroke="black",
		_stroke_width="0.5",

	//private render method which creates the svg for a path element
		render=function()
		{
			var pathCoordinats='<path id="'+_id+'" d="';
			console.log(_array.length);

			for(var i=0;i<_array.length;i++)
			{
				if(i!==_array.length-1) 
					pathCoordinats+=_array[i]+', ';
				else
					 pathCoordinats+=_array[i]+' "';
			}
			var pathStyle=' fill="'+_fill+'" stroke="'+_stroke+'" stroke-width="'+_stroke_width+'" />';
			var path=pathCoordinats+pathStyle;
			return path;
		};
	//list of public functions ie the  setter functions
	// gives a color to the path {@param val->String(color)}
	this.fill=function(val)
	{
		_fill=val;
	};
	// sets the color of stroke of the path {@param val->String(color)}
	this.stroke=function(val)
	{
		_stroke=val;
	};
	// sets the width of the path {@param val->Number(size)}
	this.stroke_width=function(val)
	{
		_stroke_width=val;
	};
	// sets an identity for the path element {@param val->String(identity)}
	this.setId=function(id)
    {
        _id=id;
    };
	// calls the render() fuction and creates the svg of path element
	this.output=function()
	{
		return render();
	};

};
// attaches an event to the path element
G.Path.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
};