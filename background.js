var BG_SCALE = 4.8;

class Background {
    constructor(game, x = 0, y) {
        Object.assign(this, {game, x, y})
        this.x = x;
        this.width = BG_SCALE * 272;
        this.height = BG_SCALE * 160;
        this.spritesheet = ASSET_MANAGER.getAsset("./bg/background.png");
    };

    //The update loop performs the "leap frog"
    update() {
        this.x = this.x - 1/10;
        if(this.x <= (-1) * this.width){
            this.x = 270*BG_SCALE;
        }
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.x, 0, this.width, this.height);

    };
};

class FarMidground {
    constructor(game, x = 0, y) {
        Object.assign(this, {game, x, y})
        this.x = x;
        this.width = BG_SCALE * 272;
        this.height = BG_SCALE * 160;
        this.spritesheet = ASSET_MANAGER.getAsset("./bg/midground_far.png");
    };

    update() {
        this.x = this.x - 1/6;
        if(this.x <= (-1) * this.width){
            this.x = 272*BG_SCALE;
        }
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.x, 0, this.width, this.height);
        
    };
};

class Midground {
    constructor(game, x = 0, y) {
        Object.assign(this, {game, x, y})
        this.x = x;
        this.width = BG_SCALE * 272;
        this.height = BG_SCALE * 150;
        this.offset = BG_SCALE * 10; //160 - 150 (largest image - this)
        this.spritesheet = ASSET_MANAGER.getAsset("./bg/midground.png");
    };

    update() {
        this.x = this.x - 1/3;
        if(this.x <= (-1) * this.width){
            this.x = 272*BG_SCALE;
        }
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.x, this.offset, this.width, this.height);

    };
};

class Foreground {
    constructor(game, x = 0, y) {
        Object.assign(this, {game, x, y})
        this.x = x;
        this.width = BG_SCALE * 272;
        this.height = BG_SCALE * 104;
        this.offset = BG_SCALE * 56; //160 - 104 (largest image - this)
        this.spritesheet = ASSET_MANAGER.getAsset("./bg/foreground.png");
    };

    update() {
        this.x = this.x - 11/10;
        if(this.x <= (-1) * this.width){
            this.x = 272*BG_SCALE;
        }
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.x, this.offset, this.width, this.height);

    };
};