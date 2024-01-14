import { GameObjects } from "phaser";

export class Player extends GameObjects.Image {
    
    scene = null;
    propulsion_fire = null;

    constructor({scene}) {
        super(scene, -190, 200, "player");
        this.scene = scene;
        this.scene.add.existing(this);

        this.propulsion_fire = this.scene.add.sprite(this.x - 32, this.y, "propulsion-fire");
        this.propulsion_fire.play("fire");

        // Effect to move the player from left to right
        this.scene.tweens.add({
            targets: this,
            x: this.scene.scale.width + 100,
            duration: 10000,
            delay: 1000,
            ease: "Power2",
            repeat: -1,
            yoyo: false,
            onUpdate: () => {
                this.updatePropulsionFire();
            }
        });
    }

    updatePropulsionFire() {
        this.propulsion_fire.setPosition(this.x - 32, this.y);
    }

    update() {
        this.y += Math.sin(this.scene.time.now / 200) * 0.10;
    }

}