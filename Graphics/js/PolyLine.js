/* 	G.Polyline(id) creates the polyline element is  used to create 
	a series of straight lines connecting several points. Typically
	polyline is used to create open shapes as the last point is not 
	connected to the first point. 
	
	'arguments' array will contain the co-ordinates of the polyline

*/
G.Polyline= function()
{
	// arguments array will contain the co-ordinates of the polyline
	var _array=arguments,
		_fill="none",
		_stroke="black",
		_stroke_width="1.5",
		_id,

	//private render method
	render=function()
	{
		var polyLineCoordinats='<polyline id="'+_id+'" points="';
        console.log(_array.length);
        
       for(var i=0;i<_array.length;i++)
       {
           if(i!==_array.length-1) 
                polyLineCoordinats+=_array[i]+', ';
            else
                 polyLineCoordinats+=_array[i]+' "';
       }
        var polyLineStyle=' fill="'+_fill+'" stroke="'+_stroke+'" stroke-width="'+_stroke_width+'" />';
        var polyline=polyLineCoordinats+polyLineStyle;
		console.log(polyline);
		return polyline;
	};
	//list of public functions ie the  setter functions
	// gives a color to the polyline {@param val->String(color)} 
	this.fill=function(val)
	{
		_fill=val;
	};
	// sets the color of stroke of the polyline {@param val->String(color)}
	this.stroke=function(val)
	{
		_stroke=val;
	};
	// sets the width of the polyline {@param val->Number(size)}
	this.stroke_width=function(val)
	{
		_stroke_width=val;
	};
	// sets an identity for the polyline element {@param id->String(identity)}
	this.setId=function(id)
    {
        _id=id;
    };
    // calls the render() fuction and creates the svg of polyline element
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
// attaches an event/action to the polyline element
G.Polyline.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
};