import { Scene } from "phaser";
import { Player } from "../gameobjects/Player";

export class MainScene extends Scene {
    player = null;

    constructor() {
        super("MainScene");
    }

    init() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
    }

    create() {
        this.add.image(0, 0, "bg")
            .setOrigin(0, 0);

        // Player
        this.player = new Player({ scene: this });
    }

    update() {
        this.player.update();
    }
}