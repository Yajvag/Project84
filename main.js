// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 350;
img_height = 200;

var img_image;

img_x = 140;
img_y = 110;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("aplhabet key");
		}

        if((keyPressed >=48 && keyPressed<=57))
		//write a code to check the type of key pressed
		{
			numberkey();
			document.getElementById("d1").innerHTML="You pressed Number Key";
			console.log("number key");
		}

		if((keyPressed >=37 && keyPressed<=40))
		//write a code to check the type of key pressed
		{
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key";
			console.log("arrow key");
		}

		if (keyPressed == 17 || keyPressed == 18 || keyPressed == 27)
		//write a code to check the type of key pressed
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed Special Key";
			console.log("special key");
		}

		if(keyPressed == 8 || keyPressed == 9 || keyPressed == 13 || keyPressed == 16)
		{
			otherkey();
			document.getElementById("d1").innerHTML="You Pressed symbol or Other Key";
			console.log("other key");
		}

	}

function aplhabetkey()
{
	//upload respective image with the message.
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
