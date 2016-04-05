/* G.Text(x1,y1,text) is a constructor function to create
	a SVG text element.
	{@param x1->Number(co-ordinate)}
    {@param y1->Number(co-ordinate)}
    (x1,y1) is the position of the text
    {@param text->Number(string)}
    'text' is the value of the svg text element
*/ 

G.Text= function(x1,y1,text)
{
	var _x1=x1,
		_y1=y1,
		_text=text,
		_fill="transparent",
		_stroke="black",
		_stroke_width="0.5",
		id;

	// The render function creates actual the svg of the text element
		render=function()
		{
			var text='<text id="'+id+'" x="'+_x1+'" y="'+_y1+'" fill="'+_fill+'" >'+_text+'</text>';
			return text;
		};
	//list of public functions ie the  setter functions
    // gives a color to the text {@param val->String(color)} 
	this.fill=function(val)
	{
		_fill=val;
	};
	// sets the color of stroke of the text {@param val->String(color)}
	this.stroke=function(val)
	{
		_stroke=val;
	};
	// sets the width of the text {@param val->Number(size)}
	this.stroke_width=function(val)
	{
		_stroke_width=val;
	};
	// sets an identity for the text element {@param val->String(identity)}
	this.setId=function(val)
	{
		id=val;
	};
	// returns the id of the element
    this.getId = function()
    {
        return _id;
    };
	this.output=function()
	{
		return render();
	};

};
// attaching events to the SVG element
G.Text.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
};