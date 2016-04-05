/* 	
	G.polygon(id) polygon element defines a closed shape consisting 
	of a set of connected straight line segments. The last point is 
	connected to the first point .
	
	arguments array will contain the co-ordinates of the polygon
*/

G.Polygon= function(id)
{
	// arguments array will contain the co-ordinates of the polygon
	var _array=arguments,
		_fill="none",
		_stroke="black",
		_stroke_width="1.5",
		_id,

	//private render method which creates the svg for a polygon element
		render=function()
		{
			var polyGonCoordinats='<polygon id="'+_id+'" points="';
			console.log(_array.length);

			for(var i=0;i<_array.length;i++)
			{
				if(i!==_array.length-1) 
					polyGonCoordinats+=_array[i]+', ';
				else
					polyGonCoordinats+=_array[i]+' "';
	       }
        var polyGonStyle=' fill="'+_fill+'" stroke="'+_stroke+'" stroke-width="'+_stroke_width+'" />';
        var polygon=polyGonCoordinats+polyGonStyle;
		console.log(polygon);
		return polygon;
	};
	//list of public functions ie the  setter functions
	// gives a color to the polygon {@param val->String(color)} 
	this.fill=function(val)
	{
		_fill=val;
	};
	// sets the color of stroke of the polygon {@param val->String(color)}
	this.stroke=function(val)
	{
		_stroke=val;
	};
	// sets the width of the line {@param val->Number(size)}
	this.stroke_width=function(val)
	{
		_stroke_width=val;
	};
	// sets an identity for the polygon element {@param id->String(identity)}
	this.setId=function(id)
    {
        _id=id;
    };
    // calls the render() fuction and creates the svg of line element
	this.output=function()
	{
		return render();
	};
	// returns the id of the element
	this.getId = function()
	{
		return _id;
	};

};
// attaches an event to the polygon element
G.Polygon.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
};
