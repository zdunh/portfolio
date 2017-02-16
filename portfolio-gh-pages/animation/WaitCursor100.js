(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 100,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6E7E8").p("AmUh0IAABjIiFhQIBTCDIh2CJICWg2IASBeIA+hkIBfBXIAVhXIBZA1IAQg5IBAAoIAegwIAIB7IBXhsIA/CHIBBhzIArBzIAviOIBxBbIAMhbICjhCIicg0IhIi5IhGCQIjGiqIgiCMIhligIhJCeIibilIAYCng");
	this.shape.setTransform(59,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADECGIhBBzIhAiHIhWBsIgIh6IgeAwIhBgpIgPA6Ihag2IgVBYIhehYIg/BkIgShdIiWA1IB2iJIhTiDICFBQIAAhjICPAiIgYimICbCkIBKieIBlCgIAiiMIDGCqIBGiPIBHC4ICdA0IijBCIgNBcIhxhcIguCOg");
	this.shape_1.setTransform(59.1,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,117.8,53.2);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DFE3E6","#565656","#575656","#575656","#555454","#4B4A4B","#231F20"],[0,0.541,0.592,0.671,0.769,0.878,1],-27,0,27,0).s().p("Ai5KOQgjAAgYgZQgZgYAAgjIAAxEQAAg2AngmQAmgnA2AAIFXAAIAvEFQAQCxABD3QACEVgTCTQgHAzgoCTg");
	this.shape.setTransform(27,65.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,130.9);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C4C6C8","#939598","#9FA1A3","#A7A9AC","#A9ABAE","#A7A9AC","#D1D3D4"],[0.004,0.361,0.545,0.651,0.867,1,1],-12.2,-10.9,12,6.6).s().p("AgLArQiCgJgagiQgGgHAEgkIFSAAQAGAhgGAIQgSAYhBAOQgpAIglAAIgTgBg");
	this.shape_2.setTransform(17.2,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,8.9);


(lib.EndAperture = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AJdAAQAAD6iyCxQixCyj6AAQj5AAiyiyQixixAAj6QAAj5CxiyQCyixD5AAQD6AACxCxQCyCyAAD5g");
	this.shape.setTransform(60.5,60.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmqGrQixixgBj6QABj5CxixQCxixD5gBQD6ABCxCxQCxCxAAD5QAAD6ixCxQixCxj6AAQj5AAixixg");
	this.shape_1.setTransform(60.5,60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,123,123);


(lib.Aperture8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ag+hRQAlACAjAaQAlAaAQAkIh9BJg");
	this.shape.setTransform(84.2,31.7,3.284,3.284);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgGA4QgsgggMggIB9hKIAACkIgHABQgbAAgjgbg");
	this.shape_1.setTransform(29.5,82.2,3.284,3.284);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhNAAQAEgsAZghIB+BJIiOBSQgRgkAEgqg");
	this.shape_2.setTransform(29.7,52,3.284,3.284);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhNAFICOhSQAQAggDArQgDAtgaAjg");
	this.shape_3.setTransform(84,61.9,3.284,3.284);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhHgHQAYgiApgSQAmgSAnAGIAACRg");
	this.shape_4.setTransform(38.1,28.2,3.284,3.284);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhHBIIAAiRICOBRQgWAhgpASQgdAPggAAIgSgCg");
	this.shape_5.setTransform(75.5,85.7,3.284,3.284);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Ah5B6QgzgzABhHQgBhGAzgzQAzgzBGAAQBHAAAzAzQAzAzgBBGQAABHgyAzQgzAzhHAAQhGgBgzgygAh1h1QgxAxAABEQAABFAxAxQAxAxBEAAQBFAAAxgxQAxgyAAhEQAAhEgxgxQgxgxhFAAQhEAAgxAxg");
	this.shape_6.setTransform(56.8,57,3.284,3.284);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.6,113.9);


(lib.Aperture7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgHA3QgpghgMgiIB5hHIAACnIgGAAQgaAAgkgdg");
	this.shape.setTransform(28.5,82.5,3.328,3.328);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhIgLQAhgoAwgOQAbgHAgACQAFAAAAAFIAACFIgBAEg");
	this.shape_1.setTransform(40.4,27.9,3.328,3.328);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("Ag8hTQAnAGAeAYQAhAZASAkQACAFgEADIh2BEg");
	this.shape_2.setTransform(86.8,32.8,3.328,3.328);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhIBFIAAiMICRBTQgbAhgqAQQgZALgaAAQgNAAgMgDg");
	this.shape_3.setTransform(75,87.6,3.328,3.328);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhMACQAFgtAcghIACABIB4BGIiRBSQgPggAFgrg");
	this.shape_4.setTransform(30.1,50.8,3.328,3.328);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhOAHICRhTQAPAggFAsQgFAtgcAhg");
	this.shape_5.setTransform(85.2,64.6,3.328,3.328);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Ah5B5QgzgyAAhHQAAhGAzgzQAzgzBGAAQBHAAAzAzQAzAzAABHQAABHgzAyQgzAzhHAAQhGAAgzg0gAAAimQhEAAgxAxQgxAxAABEQAABGAxAwQAyAxBDAAQBGAAAwgxQAxgyAAhEQAAhEgxgyQgwgwhFAAIgBAAg");
	this.shape_6.setTransform(57.7,57.7,3.328,3.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.3,115.5);


(lib.Aperture6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAKBDQgugfgTgyQgCgGAEgCIBrg/IACAAIAACrQgWgEgYgPg");
	this.shape.setTransform(25.3,79.7,3.278,3.278);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhNAKICVhVQAMAlgJAnQgKAsgdAfg");
	this.shape_1.setTransform(84.1,67.5,3.278,3.278);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("Ag4hWIALADQBJAaAcBIQACAGgEACIhuBAg");
	this.shape_2.setTransform(88.4,34,3.278,3.278);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhJgBQAJgsAegeIBxBCIiVBVQgNglAKgog");
	this.shape_3.setTransform(29.7,46.3,3.278,3.278);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhKgSIAOgMQA6gvBJANQAFABAAAEIAAB/g");
	this.shape_4.setTransform(43.4,26.4,3.278,3.278);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhFBBQgFgBgBgEIABh8IAAgDICVBVQgSATgWAMQgjATgmAAQgPAAgQgDg");
	this.shape_5.setTransform(70.2,87.5,3.278,3.278);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAACtQhIgBgzg0QgxgzAAhFQABhHAzgzQAzgyBHAAQBGABAzAzQAyAzAABFQgBBIgyAzQgyAyhGAAIgCAAgAh0h1QgxAwgBBFQgBBDAxAyQAwAxBEABQBDABAzgwQAzgwAAhHQABhEgxgxQgxgxhGgBIAAAAQhDAAgxAxg");
	this.shape_6.setTransform(56.8,56.8,3.278,3.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.6,113.6);


(lib.Aperture5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAIBCQgqgjgPg1QgCgIAIgEIBWgzIAHgDIAACxQgWgIgUgPg");
	this.shape.setTransform(22.3,79.7,3.387,3.387);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhEgEQAOgrAhgaIBjA7IiZBYQgHgoAOgmg");
	this.shape_1.setTransform(30.7,42.6,3.387,3.387);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhNAPICahYQALBXhBA8g");
	this.shape_2.setTransform(86.8,74.9,3.387,3.387);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhMgZQAwgmA4ACQAJAAAkAHIADACIABADIAABuIgBACg");
	this.shape_3.setTransform(50.3,25.4,3.387,3.387);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgxhYIAFACQBKAiAUBPQABADgEACIhgA5g");
	this.shape_4.setTransform(95.2,37.8,3.387,3.387);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhGA5QgGgCgBgIIAAhtICbBYIgRAMQgpAZgrAAQgXAAgYgGg");
	this.shape_5.setTransform(67.2,92.1,3.387,3.387);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Ah4B6QgzgzgBhHQAAhFAzgzQAzgzBGgBQBHAAAzAzQAzAzAABGQAABHgzAzQgyAyhIABQhFAAgzgzgAh1h1QgxAxAABEQAABFAxAxQAxAxBEAAQBFAAAxgxQAxgwAAhGQAAhEgxgxQgxgxhFAAQhEAAgxAxg");
	this.shape_6.setTransform(58.7,58.8,3.387,3.387);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.5,117.6);


(lib.Aperture4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAJBDQgrgrgGg9QgBgEAEgCIBOguIAACzQgRgJgPgOg");
	this.shape.setTransform(18,75.4,3.367,3.367);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgohZIAEABQA/AoAMBHQADAOgCADQgCAEgLAGIhDAog");
	this.shape_1.setTransform(98.6,41.5,3.367,3.367);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAABDIhOguICdhZQAAA+glAqQgFAHgLAJIgRAPQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAIgEgCg");
	this.shape_2.setTransform(86.2,80.5,3.367,3.367);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhEAJQASguArgdQADgDAEACIBOAvIibBZQgBgeAKgeg");
	this.shape_3.setTransform(30.4,36.3,3.367,3.367);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhIAqQgFgCAAgHIAAhZICbBZQgbARgeAFQgOACgLAAQgjAAghgPg");
	this.shape_4.setTransform(60,93.5,3.367,3.367);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhOghQArgYAsABQAhABAfAOQAGADAAAGIAABZg");
	this.shape_5.setTransform(56.7,23.3,3.367,3.367);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Ah5B6QgzgzABhHQgBhGAzgzQAzgzBGAAQBHAAAzAzQAyAzAABGQABBIgzAyQgzAzhHAAQhHAAgygzgAh0h1QgyAwAABFQgBBFAyAxQAwAxBFAAQBFAAAxgxQAxgxAAhFQAAhDgxgxQgxgyhEAAIgBAAQhDAAgxAxg");
	this.shape_6.setTransform(58.3,58.3,3.367,3.367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.6,116.7);


(lib.Aperture3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhNgjQAbgOAegDQAwgDAsAYQAGAEAAAGIAABKg");
	this.shape.setTransform(61.9,22.4,3.426,3.426);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhIAfQgFgCAAgHIAAhKICbBYIAAACIgmAMQgRADgQAAQgpAAgmgWg");
	this.shape_1.setTransform(56.7,96.5,3.426,3.426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhJAlQARhAA5gjQAFgEAGAEIBDAmIidBZIAFgcg");
	this.shape_2.setTransform(31,33.4,3.426,3.426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgIBBIhGgoICdhZIgFAbQgRBCg7AjIgEABIgCAAg");
	this.shape_3.setTransform(87.8,85.6,3.426,3.426);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgFAxQgegrABgyQAAgDACgCIBDgoIAACzQgZgQgPgZg");
	this.shape_4.setTransform(16.3,74.3,3.426,3.426);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgihZQATAMAOASQAkAtAAA5QAAAGgEACIhBAng");
	this.shape_5.setTransform(102.5,44.5,3.426,3.426);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Ah5B6QgzgzAAhHQAAhGAzgzQAzgzBGAAQBHAAAzAzQAzAzAABGQAABHgzAzQgzAzhHAAQhGAAgzgzgAhzh3QgyAxgBBFQgBBFAxAxQAwAyBGAAQBEABAxgxQAxgwABhFQABhCgvgyQgwgxhDgDIgGAAQhCAAgxAvg");
	this.shape_6.setTransform(59.4,59.4,3.426,3.426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.7,118.7);


(lib.Aperture2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhLgmIAAgCIAagGQBEgJA2ApQADADAAADIAAA4g");
	this.shape.setTransform(66.2,20.2,3.339,3.339);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgZA6IgzgdICZhXIgDAOQgYBHhDAfIgFABIgDgBg");
	this.shape_1.setTransform(84.9,88.1,3.339,3.339);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhIAPQgDgDAAgDIAAg5ICYBXIAAACIgjAHIgQABQg2AAgsgig");
	this.shape_2.setTransform(49.2,95.5,3.339,3.339);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhMA6IALghQAag4A5gaQAFgDAFAEIAxAcIiYBXg");
	this.shape_3.setTransform(30.4,27.5,3.339,3.339);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AADA+QgjgzAHg/QAAgEAEgDIAvgcIABAAIAACuIgBABIgXgag");
	this.shape_4.setTransform(13,68.8,3.339,3.339);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgahYQAVASALAYQAaAugGA1QgBAFgCACIgvAbIgCABg");
	this.shape_5.setTransform(102.4,46.9,3.339,3.339);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAACtQhGAAgzgzQgzgyAAhIQAAhGAzgzQAzgzBGAAQBHAAAzAzQAzAzAABGQAABIgzAyQgzAzhGAAIgBAAgAh2h1QgwAxAABEQgBBFAyAxQAxAxBEAAQBFAAAxgwQAxgxAAhFQABhEgxgxQgygyhFAAQhEAAgyAxg");
	this.shape_6.setTransform(57.7,57.8,3.339,3.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.6,115.7);


(lib.Aperture1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgKAXQgKgpANgsQADgIAFgEIAOgIIAAClQgRgbgIghg");
	this.shape.setTransform(9.6,64.8,3.474,3.474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgOhSQAUAeAGAiQAJApgOApQgCAGgFAEIgOAJg");
	this.shape_1.setTransform(110.9,55.7,3.474,3.474);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhBAkQAlhCBIgQQAEgBAIADIAQAJIiPBSg");
	this.shape_2.setTransform(33.7,21.6,3.474,3.474);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgyAuIgUgLICNhRQgKAcgWAUQglAkgvAJg");
	this.shape_3.setTransform(86.5,99.1,3.474,3.474);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhGgnIADgBQBSgGA2A8QACACABAEIAAAWg");
	this.shape_4.setTransform(78.8,18.8,3.474,3.474);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhDgNIgDgFIAAgXICNBRIgBABIgOABQhJAAgyg3g");
	this.shape_5.setTransform(41.5,101.7,3.474,3.474);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAACtQhHAAgygzQgzgzAAhHQABhGAzgzQAzgzBFAAQBIAAAyAzQAzAzAABGQgBBIgyAyQgzAzhGAAIgBAAgAh1h1QgxAxAABEQAABFAwAxQAxAxBFAAQBEAAAygwQAxgxAAhGQAAhEgxgxQgxgxhFAAQhDAAgyAxg");
	this.shape_6.setTransform(60.3,60.2,3.474,3.474);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.6,120.4);


(lib.Flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBEC0").p("AmUh0IAABjIiFhQIBTCDIh2CJICWg2IASBeIA+hkIBfBXIAVhXIBZA1IAQg5IBAAoIAegwIAIB7IBXhsIA/CHIBBhzIArBzIAviOIBxBbIAMhbICjhCIicg0IhIi5IhGCQIjGiqIgiCMIhligIhJCeIibilIAYCng");
	this.shape.setTransform(57.3,25.5);

	this.instance = new lib.Path_1();
	this.instance.setTransform(57.8,24.9,1,1,0,0,0,58.9,26.4);
	this.instance.alpha = 0.82;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,118.3,53.7);


// stage content:
(lib.WaitCursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Flash
	this.instance = new lib.Flash("synched",0);
	this.instance.setTransform(64.7,27.7,0.3,0.3,0,0,0,57.6,25.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({scaleX:0.32,scaleY:0.32,y:27.4},0).wait(1).to({regX:57.8,regY:25.4,scaleX:0.36,scaleY:0.36,x:65.1,y:26.4},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.44,scaleY:0.44},0).wait(1).to({regY:25.6,scaleX:0.53,scaleY:0.53,y:26.5},0).wait(1).to({regX:57.9,regY:25.7,scaleX:0.6,scaleY:0.6},0).to({_off:true},1).wait(9));

	// Aperture
	this.instance_1 = new lib.Aperture1("synched",0);
	this.instance_1.setTransform(64.8,54.1,0.312,0.312,0,0,0,60.6,60.6);

	this.instance_2 = new lib.Aperture2("synched",0);
	this.instance_2.setTransform(65.4,54.2,0.324,0.324,0,0,0,57.8,58);

	this.instance_3 = new lib.Aperture3("synched",0);
	this.instance_3.setTransform(65.3,54.1,0.313,0.313,0,0,0,59.6,59.6);

	this.instance_4 = new lib.Aperture4("synched",0);
	this.instance_4.setTransform(65,53.9,0.324,0.324,0,0,0,58.2,58.4);

	this.instance_5 = new lib.Aperture5("synched",0);
	this.instance_5.setTransform(65.3,54.2,0.324,0.324,0,0,0,58.9,59.1);

	this.instance_6 = new lib.Aperture6("synched",0);
	this.instance_6.setTransform(65.1,54.1,0.323,0.323,0,0,0,56.8,56.8);

	this.instance_7 = new lib.Aperture7("synched",0);
	this.instance_7.setTransform(65.1,54.2,0.324,0.324,0,0,0,57.9,58.1);

	this.instance_8 = new lib.Aperture8("synched",0);
	this.instance_8.setTransform(65.3,54.2,0.327,0.327,0,0,0,57.1,57.1);

	this.instance_9 = new lib.EndAperture("synched",0);
	this.instance_9.setTransform(65.2,54.1,0.29,0.29,0,0,0,60.6,60.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},2).wait(1));

	// Camera
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB212E").s().p("Ag9AWQgZgJAAgNQAAgMAZgJQAagJAjAAQAkAAAZAJQAaAJAAAMQAAANgaAJQgZAJgkAAQgjAAgagJg");
	this.shape.setTransform(15.7,39.6,0.322,0.322);

	this.instance_10 = new lib.Path_1_1();
	this.instance_10.setTransform(15.7,41,0.322,0.322,0,0,0,17.2,4.5);
	this.instance_10.alpha = 0.621;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F4E4F").s().p("Ah9AiQAAgFACgGQAEgMAKgLQAighBRAAQBLAAAeAhQAPARAAARg");
	this.shape_1.setTransform(33.2,34.4,0.322,0.322);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DFE3E6","#FFFCE6","#EEE7D6","#D6CCC1","#EDEDEE","#D8D4BC"],[0.004,0.251,0.4,0.596,0.788,1],-3.5,0,3.5,0).s().p("AgiAiIAAhDIBEAAIAABDg");
	this.shape_2.setTransform(76.7,29.3,0.322,0.322);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DFE3E6","#FFFCE6","#EEE7D6","#D6CCC1","#EDEDEE","#D8D4BC"],[0.004,0.251,0.4,0.596,0.788,1],-3.5,0,3.5,0).s().p("AgiAiIAAhDIBEAAIAABDg");
	this.shape_3.setTransform(73.4,29.3,0.322,0.322);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#DFE3E6","#FFFCE6","#EEE7D6","#D6CCC1","#EDEDEE","#D8D4BC"],[0.004,0.251,0.4,0.596,0.788,1],-3.5,0,3.5,0).s().p("AghAiIAAhDIBEAAIAABDg");
	this.shape_4.setTransform(70,29.3,0.322,0.322);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DFE3E6","#FFFCE6","#EEE7D6","#D6CCC1","#EDEDEE","#D8D4BC"],[0.004,0.251,0.4,0.596,0.788,1],-3.5,0,3.5,0).s().p("AghAiIAAhDIBEAAIAABDg");
	this.shape_5.setTransform(66.7,29.3,0.322,0.322);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#DFE3E6","#FFFCE6","#EEE7D6","#D6CCC1","#EDEDEE","#D8D4BC"],[0.004,0.251,0.4,0.596,0.788,1],-3.5,0,3.5,0).s().p("AgiAiIAAhDIBEAAIAABDg");
	this.shape_6.setTransform(63.6,29.3,0.322,0.322);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#DFE3E6","#FFFCE6","#EEE7D6","#D6CCC1","#EDEDEE","#D8D4BC"],[0.004,0.251,0.4,0.596,0.788,1],-3.5,0,3.5,0).s().p("AghAiIAAhDIBDAAIAABDg");
	this.shape_7.setTransform(60.3,29.3,0.322,0.322);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#DFE3E6","#FFFCE6","#EEE7D6","#D6CCC1","#EDEDEE","#D8D4BC"],[0.004,0.251,0.4,0.596,0.788,1],-3.5,0,3.5,0).s().p("AgiAiIAAhDIBFAAIAABDg");
	this.shape_8.setTransform(56.9,29.3,0.322,0.322);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#DFE3E6","#FFFCE6","#EEE7D6","#D6CCC1","#EDEDEE","#D8D4BC"],[0.004,0.251,0.4,0.596,0.788,1],-3.5,0,3.5,0).s().p("AgiAiIAAhDIBFAAIAABDg");
	this.shape_9.setTransform(53.6,29.3,0.322,0.322);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#C4C6C8","#939598","#9FA1A3","#A7A9AC","#A9ABAE","#A7A9AC","#D1D3D4"],[0.004,0.361,0.545,0.651,0.867,1,1],-11.5,-8.3,11.5,8.4).s().p("Ah2ArQgzgSABgZQgBgYAzgSQAxgSBFAAQBGAAAyASQAxASABAYQgBAZgxASQgyAShGAAQhFAAgxgSg");
	this.shape_10.setTransform(15.7,39.6,0.322,0.322);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#565656","#595959","#626161","#737171","#8B8989","#AEADAE","#DFE3E6"],[0,0.145,0.306,0.475,0.647,0.827,1],-25.7,0,25.8,0).s().p("AhFCGQhCgMhDgZIg2gWIAAheQAAgzAlglQAkglA0AAIFdAAIAEAEQAFAHAFARQARA3AICIQhUBGiEAAQgyAAg8gLg");
	this.shape_11.setTransform(15.3,40.2,0.322,0.322);

	this.instance_11 = new lib.Path_13();
	this.instance_11.setTransform(15.7,56.6,0.322,0.322,0,0,0,27.2,65.5);
	this.instance_11.alpha = 0.5;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#DFE3E6","#FFFCE6","#EEE7D6","#D6CCC1","#EDEDEE","#D8D4BC"],[0.004,0.251,0.4,0.596,0.788,1],-3.7,0,3.8,0).s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_12.setTransform(89.4,37.5,0.322,0.322);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#414042","#4D4E4F","#5C5D5F","#666769","#6B6D6F","#6D6E71","#565656"],[0,0.024,0.071,0.125,0.2,0.416,1],-5.3,0,5.3,0).s().p("AgkAlQgPgPAAgWQAAgVAPgPQAQgQAUAAQAWAAAPAQQAPAPAAAVQAAAWgPAPQgPAQgWAAQgUAAgQgQg");
	this.shape_13.setTransform(89.4,37.5,0.322,0.322);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#C4C6C8","#BCBEC0","#A7A9AC","#9B9EA0","#9B9DA0"],[0.004,0.298,0.659,0.992,1],-5.1,0,5.2,0).s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_14.setTransform(65.1,54,0.322,0.322);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#BEDEEA","#BCB8D4","#EFC9D7","#F2C6B5","#F5F1CC","#C1DDC8"],[0,0.2,0.4,0.6,0.8,1],-13.8,0,13.8,0).s().p("AhgBhQgpgoAAg5QAAg4ApgoQAogpA4AAQA5AAApApQAoAoAAA4QAAA5goAoQgpApg5AAQg4AAgogpg");
	this.shape_15.setTransform(65.1,54,0.322,0.322);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#AEB0B7","#AAABAB","#A9A9A6","#969B9D","#838C92","#657076"],[0.004,0.271,0.353,0.525,0.675,1],0,0,0,0,0,18).s().p("Ah9B/Qg1g1AAhKQAAhJA1g1QA0g0BJAAQBKAAA1A0QA0A1AABJQAABKg0A1Qg1A0hKAAQhJAAg0g0g");
	this.shape_16.setTransform(65.1,54,0.322,0.322);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#231F20","#414042","#231F20","#3F3E40","#414042"],[0,0.341,0.686,0.98,1],-39.8,0,39.9,0).s().p("AkYEaQh1h1AAilQAAikB1h0QB0h1CkAAQClAAB0B1QB1B0AACkQAAClh1B1Qh0B0ilAAQikAAh0h0g");
	this.shape_17.setTransform(65.1,54,0.322,0.322);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#C4C6C8","#BCBEC0","#A7A9AC","#9B9EA0","#9B9DA0"],[0.004,0.298,0.659,0.992,1],-45.8,0,45.9,0).s().p("AlDFEQiGiGAAi+QAAi8CGiHQCGiGC9AAQC9AACHCGQCGCHAAC8QAAC+iGCGQiHCGi9AAQi9AAiGiGg");
	this.shape_18.setTransform(65.1,54,0.322,0.322);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#414042","#231F20","#414042"],[0,0.475,1],-56.6,0,56.7,0).s().p("AmPGQQimilAAjrQAAjpCmimQCmimDpAAQDqAACmCmQCmCmAADpQAADqimCmQimCmjqAAQjpAAimimg");
	this.shape_19.setTransform(65.1,54,0.322,0.322);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AnFHGQi9i8AAkKQAAkJC9i8QC8i9EJAAQEKAAC8C9QC9C8AAEJQAAEKi9C8Qi8C9kKAAQkJAAi8i9g");
	this.shape_20.setTransform(65.1,54,0.322,0.322);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#231F20","#323031","#464344","#444243"],[0.082,0.239,0.576,1],-137.4,0,137.5,0).s().p("A0IMdQgjAAgZgZQgZgZAAgkIAAxBQgBg3AngmQAngnA3AAIReAAIAAhtQAAhIA0g1QAzg0BHABIM8AAQAmAAAbAaQAaAaAAAmIAABeICpAAQBigBBFBFQBEBEAABiIAAQzQAAApgdAcQgdAegpAAg");
	this.shape_21.setTransform(51.3,52,0.322,0.322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_11},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_10},{t:this.shape}]}).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.9,76.3,88.8,51.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;