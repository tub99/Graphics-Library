# Graphics-Library
Graphics is a SVG library created to build different drawable svg elements like <b>Line, Rectangle, Circle, Path, Text, Polygon and PolyLine. </b>

# How to create a SVG element
Example : Create a Line element
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

