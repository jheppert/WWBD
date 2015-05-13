(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 454,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/hawk_illustration01.png", id:"hawk_illustration01"},
		{src:"images/hawk_illustration02.png", id:"hawk_illustration02"},
		{src:"images/hawk_illustration03.png", id:"hawk_illustration03"},
		{src:"images/hawk_illustration04.png", id:"hawk_illustration04"}
	]
};



// symbols:



(lib.hawk_illustration01 = function() {
	this.initialize(img.hawk_illustration01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,400);


(lib.hawk_illustration02 = function() {
	this.initialize(img.hawk_illustration02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,400);


(lib.hawk_illustration03 = function() {
	this.initialize(img.hawk_illustration03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,400);


(lib.hawk_illustration04 = function() {
	this.initialize(img.hawk_illustration04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,400);


// stage content:
(lib.Flash_Hawk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hawk_illustration01();

	this.instance_1 = new lib.hawk_illustration02();

	this.instance_2 = new lib.hawk_illustration03();

	this.instance_3 = new lib.hawk_illustration04();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(227,200,454,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;