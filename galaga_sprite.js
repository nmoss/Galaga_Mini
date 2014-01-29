
function GalagaSprite(args){
	this.image = new Image();
	this.image.src = args.imgSrc;
	this.x = args.x;
	this.y = args.y;
	this.imgFrames = args.frames;
	this.frame = 0;

	this.draw = function(ctx){
		ctx.drawImage(this.image, this.frame, 0, args.spw,
                  args.spw, this.x, this.y, args.spw, args.spw);
    	this.frame += 24;
    	if( this.frame >= this.image.width ){
    		this.frame = 0;
    	}
	}
}