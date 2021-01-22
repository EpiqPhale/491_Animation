var BG_SCALE = 4.8;

class Background {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y})
        this.width = BG_SCALE * 272;
        this.height = BG_SCALE * 160;
        this.spritesheet = ASSET_MANAGER.getAsset("./bg/background.png");
    };

    update() {
        
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, this.width, this.height);

    };
};

class FarMidground {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y})
        this.width = BG_SCALE * 272;
        this.height = BG_SCALE * 160;
        this.spritesheet = ASSET_MANAGER.getAsset("./bg/midground_far.png");
    };

    update() {
        
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, this.width, this.height);
        
    };
};

class Midground {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y})
        this.width = BG_SCALE * 272;
        this.height = BG_SCALE * 150;
        this.offset = BG_SCALE * 10; //160 - 150 (largest image - this)
        this.spritesheet = ASSET_MANAGER.getAsset("./bg/midground.png");
    };

    update() {
        
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, this.offset, this.width, this.height);

    };
};

class Foreground {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y})
        this.width = BG_SCALE * 272;
        this.height = BG_SCALE * 104;
        this.offset = BG_SCALE * 56; //160 - 104 (largest image - this)
        this.spritesheet = ASSET_MANAGER.getAsset("./bg/foreground.png");
    };

    update() {
        
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, this.offset, this.width, this.height);

    };
};