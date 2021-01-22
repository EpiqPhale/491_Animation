var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/beardo.png");
ASSET_MANAGER.queueDownload("./bg/foreground.png");
ASSET_MANAGER.queueDownload("./bg/midground.png");
ASSET_MANAGER.queueDownload("./bg/midground_far.png");
ASSET_MANAGER.queueDownload("./bg/background.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	gameEngine.addEntity(new Background(this.gameEngine));
	gameEngine.addEntity(new FarMidground(this.gameEngine));
	gameEngine.addEntity(new Midground(this.gameEngine));
	gameEngine.addEntity(new Foreground(this.gameEngine));
	gameEngine.addEntity(new Beardo(this.gameEngine));

	gameEngine.start();
});
