import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        const canvas = this.game.canvas;
        const vw = canvas.width * 0.01; // 1% viewer width
        const vh = canvas.height * 0.01; // 1% viewer height
        const vmax = vw > vh ? vw : vh;

        let background = this.add.image(50 * vw, 50*vh, 'background');
        background.scaleX = 100 * vw / background.width;
        background.scaleY =  100 * vh / background.height;
    
        // Show our "Phaser" title
        const title = this.add.image(
            50 * vw,
            40 * vh,
            'logo'
        )
        if (vmax == vw) {
            title.scale = 15 * vh / title.height;
        } else {
            title.scale = 90 * vw / title.width;
        }

        this.add.text(
            50 * vw, 
            66.66 * vh, 
            'Main Menu', 
            {
                fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
                stroke: '#000000', strokeThickness: 8,
                align: 'center'
            }
        ).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
