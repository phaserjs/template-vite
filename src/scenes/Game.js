import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        const canvas = this.game.canvas;
        const vw = canvas.width * 0.01; // 1% viewer width
        const vh = canvas.height * 0.01; // 1% viewer height
        const vmax = vw > vh ? vw : vh;

        this.cameras.main.setBackgroundColor(0x00ff00);

        let background = this.add.image(50 * vw, 50 * vh, 'background').setAlpha(0.5);
        background.scaleX = 100 * vw / background.width;
        background.scaleY =  100 * vh / background.height;

        this.add.text(
            50 * vw, 
            50 * vh, 
            'Make something fun!\nand share it with us:\nsupport@phaser.io', 
            {
                fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
                stroke: '#000000', strokeThickness: 8,
                align: 'center'
            }
        ).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }
}
