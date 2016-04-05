# Graphics-Library
Graphics is a SVG library created to build different drawable svg elements like <b>Line, Rectangle, Circle, Path, Text, Polygon and PolyLine. </b>

# How to create a SVG element
Example1 : Create a Line element
```javascript
	// Creating the graphics instance
	// G.Scene(htmlElement,Width,height)--> htmlElement is the 
	// place where you want to draw
	var graphics = new G.Scene("#divId",700,700);
	//G.Line(x1,y1,x2,y2)--> x1,y1 are the co-ordinates of 1st point
	// x2,y2 are the co-ordinates of the 2nd point and hence a line is
	// drawn between the 2 points
	var lineX=new G.Line(40,50,200,300);
	// Setting attributes like id and width of the line
	lineX.setId("lineX");
	lineX.stroke_width(3); 
	var line=lineX.output();
	// drawing the line
	graphics.render(line);


```
Example2 :  Creating many svg shapes together
```javascript
	var graphics = new G.Scene("#divId",700,700);
	//G.Line(x1,y1,x2,y2)
	var lineX=new G.Line(40,50,200,250);
	lineX.setId("lineX");
	lineX.stroke("red"); lineX.stroke_width(3);
	var line=lineX.output();
	//Creating a polyline
	var poly = new G.Polyline(110,2 ,160,2 ,135,52);
	//Creating a polygon
	var polygon = new G.Polygon(60,20,100,40,100,80,60,100,20,80,20,40);
	polygon.fill("#0000ff");
	// creating text
	var text= new G.Text(200,300,"GRAPHICS.js");
	text.fill("green");
	//creating text
	var cir= new G.Circle(200,200,50);
	cir.fill("#db4fd9");
	cir.stroke("blue");
	cir.stroke_width(2);
	//graphics.render(finalsvg) to be called only once
	var finalSvg=poly.output()+line+polygon.output()+text.output()+cir.output();
	graphics.render(finalSvg);
```
