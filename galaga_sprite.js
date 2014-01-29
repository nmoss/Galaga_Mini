
function GalagaSprite(args){
	this.image = new Image();
	this.image.src = args.src;
	this.x = args.x;
	this.y = args.y;
	this.imgFrames = args.frames;
	this.frame = 0;

	this.draw = function(){
		ctx.drawImage(this.image, this.frame, 0, args.spw,
                  args.spw, this.x, this.y, args.spw, args.spw);
    	this.frame += 48;
    	if( this.frame >= this.image.width ){
    		this.frame = 0;
    	}
	}
}