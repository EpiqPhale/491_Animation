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

	gameEngine.start();
});
