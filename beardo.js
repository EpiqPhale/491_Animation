var CHAR_SCALE = 2;

class Beardo {
    constructor(game, x, y){
        Object.assign(this, {game, x, y});
        this.game.beardo = this;
        this.width = CHAR_SCALE * 80;
        this.height = CHAR_SCALE * 288;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/beardo.png");
    };

    update() {
        
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, this.width, this.height);

    };
};