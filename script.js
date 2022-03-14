var size = 10
function setup() {
  createCanvas(600, 600);
	background(200);

}

function draw() {
	// Click your mouse on the screen and type some letters. What do you see?
	// Can you make this text bigger and centered?
	text(key, 50, 50)




	// Code the rest of your code below this line
	if(mouseIsPressed){
		noStroke()
		ellipse(mouseX, mouseY, size, size)
	}

	if(keyIsPressed){
		if(key == "g"){
			fill(0, 255, 0)
		}
		else if(key == "b"){
			fill(0, 0, 255)
		}
		else if(key == "r"){
			fill(255, 0, 0)
		}
		else if(key == "c"){
			background(200)
		}
		else if(key == "m"){
			size++
		}
		else if(key == "s"){
			size--
		}
		else if(key == "n"){
			fill(random(0,255), random(0,255), random(0,255))
		}
	}
	

}