import { Game } from "phaser";
import { scenes_config } from "./scenes_config";

// More information about config: https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    parent: "phaser-container",
    backgroundColor: "#1c172e",
    pixelArt: true,
    max: {
        width: 800,
        height: 600,
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: scenes_config
};

export default new Game(config);