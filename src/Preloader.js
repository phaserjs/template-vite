import { Scene } from "phaser";

// Class to preload all the assets
// Remember you can load this assets in another scene if you need it
export class Preloader extends Scene {
    constructor() {
        super({ key: "Preloader" });
    }

    preload() {
        
        // Load all the assets
        
        this.load.setPath("assets");
        this.load.image("background", "bg.png");
        this.load.image("logo", "logo.png");

        this.load.image("player", "player/player.png");
        this.load.atlas("propulsion-fire", "player/propulsion/propulsion-fire.png", "player/propulsion/propulsion-fire_atlas.json");
        this.load.animation("propulsion-fire-anim", "player/propulsion/propulsion-fire_anim.json");

        // Event to update the loading bar
        this.load.on("progress", (progress) => {
            console.log("Loading: " + Math.round(progress * 100) + "%");
        });
    }

    create() {
        // When all the assets are loaded go to the next scene
        this.scene.start("SplashScene");
    }
}