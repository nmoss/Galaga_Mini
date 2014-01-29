
/*
 * path is the relative path to the image file
 */
var Background = function(path, x, y){
	this.image = new Image();
	this.image.src = path;
	this.x = x;
	this.y = y;
}

var ParallaxScrolling = function(ctx, image_data, fighter){

	background = new Background(image_data, 0, 0);
	ctx.fillRect(0, 0, 30, 250);


	this.move = function(){
		if(background.y > background.image.height){
			background.y = 0;
		}
		background.y += 4;
	}

	this.draw = function(){

		this.move();
		dy =  background.y - background.image.height;
		ctx.drawImage(background.image, 0, 0, background.image.width, background.image.height, background.x, background.y,
		 background.image.width+ 100, background.image.height+ 10);
		ctx.drawImage(background.image, 0, 0, background.image.width, background.image.height, background.x, dy,
		 background.image.width+ 100, background.image.height+ 10); 


		//ctx.drawImage(fighter, fighter.x, 250, 14*2, 14*2);

		//space for the scoring and stuff
		ctx.fillRect(0, 0, 250, 18);
		ctx.fillStyle = "red";
		ctx.fillText("1UP", 20, 8);
		ctx.fillText("HIGH SCORE", 250/2-25, 8);
		ctx.fillStyle = "white";
		ctx.fillText("4000", 18, 17);
		ctx.fillText("2343423", 250/2 - 22, 17);
		ctx.fillStyle = "black";
		ctx.fillRect(0, 280, 250, 8);




						
	}

}