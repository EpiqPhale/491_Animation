var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/hero.png");
ASSET_MANAGER.queueDownload("./bg/foreground.png");
ASSET_MANAGER.queueDownload("./bg/midground.png");
ASSET_MANAGER.queueDownload("./bg/midground_far.png");
ASSET_MANAGER.queueDownload("./bg/background.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);

	/*
	The doubled up layers of the background leapfrog when they go off the screen
	The backround is set to 270 because otherwise there is a tiny but noticable seam
	*/
	gameEngine.addEntity(new Background(this.gameEngine));
	gameEngine.addEntity(new Background(this.gameEngine, 270*BG_SCALE));
	gameEngine.addEntity(new FarMidground(this.gameEngine));
	gameEngine.addEntity(new FarMidground(this.gameEngine, 272*BG_SCALE));
	gameEngine.addEntity(new Midground(this.gameEngine));
	gameEngine.addEntity(new Midground(this.gameEngine, 272*BG_SCALE));
	gameEngine.addEntity(new Foreground(this.gameEngine));
	gameEngine.addEntity(new Foreground(this.gameEngine, 272*BG_SCALE));
	gameEngine.addEntity(new Hero(this.gameEngine));

	gameEngine.start();
});
