# Key Pressed Events

Today we will be learning about our final event: the `keyIsPressed` event. This, when used in combination with the system variable `key`, can be used to detect if certain keys are pressed.

For example, if we wanted to change the color to white when the w key is typed we could say:
```javascript

if(keyIsPressed)
{
	if(key == "w")
	{
		fill(255, 255, 255)
	}
}
ellipse(mouseX, mouseY, 10, 10)

```

## Tasks
For today's lab, you should:

1. Create a program that draws a circle every time you click the mouse. 
![](assets/Challenge1.gif)

2. Add to your previously created program where pressing r, g, and b on the keyboard changes the color to red, green, and blue respectively. **Done early?** Add more color options!

![](assets/Challenge2.gif)

3. Get the drawing to clear when you type the “c” key

![](assets/Challenge3.gif)

4. Have the circle increase in size when they type “m” and decrease in size when they type “l” 

![](assets/Challenge4.gif)

5. When the user clicks “r” change the color to a random color.

6. **STRETCH**: Create squares that change the color of the fill when it is clicked. Have each button designed to change a specific color (e.g. one changes color to blue, one to green, etc.).