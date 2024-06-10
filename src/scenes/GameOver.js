import { Scene } from 'phaser';

export class GameOver extends Scene
{
    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        const canvas = this.game.canvas;
        const vw = canvas.width * 0.01; // 1% viewer width
        const vh = canvas.height * 0.01; // 1% viewer height
        const vmax = vw > vh ? vw : vh;

        this.cameras.main.setBackgroundColor(0xff0000);

        let background = this.add.image(50 * vw, 50 * vh, 'background').setAlpha(0.5);
        background.scaleX = 100 * vw / background.width;
        background.scaleY =  100 * vh / background.height;


        this.add.text(
            50 * vw, 
            50 * vh, 
            'Game Over', 
            {
                fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
                stroke: '#000000', strokeThickness: 8,
                align: 'center'
            }
        ).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('MainMenu');

        });
    }
}
