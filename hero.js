var CHAR_SCALE = 2;

class Hero {
    constructor(game, x, y){
        Object.assign(this, {game, x, y});
        this.game.beardo = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/hero.png");

        this.animation = new Animator(this.spritesheet, 0, 0, 15, 15, 6, 0.08, 1, false, true);
    };

    update() {
        
    };

    draw(ctx) {
        //ctx.drawImage(this.spritesheet, 0, 0, 100, 100);

        this.animation.drawFrame(this.game.clockTick, ctx, 100, 660, 7);

    };
};