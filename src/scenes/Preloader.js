import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        const canvas = this.game.canvas;
        const vw = canvas.width * 0.01; // 1% viewer width
        const vh = canvas.height * 0.01; // 1% viewer height
        const vmax = vw > vh ? vw : vh;

        //  We loaded this image in our Boot Scene, so we can display it here
        const background = this.add.image(
            50 * vw,
            50 * vh,
            'background'
        );
        background.scaleX = 100 * vw / background.width;
        background.scaleY = 100 * vh / background.height;

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

        //  A simple progress bar. This is the outline of the bar.
        const rect = this.add.rectangle(
            50 * vw,
            66.66 * vh,
            90 * vw,
            5 * vh,
        );
        rect.setStrokeStyle(0.25 * vmax, 0x000000);
        rect.setDepth(3);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(
            rect.x - rect.width / 2,
            rect.y - rect.height / 2,
            0,
            rect.height,
            0xffffff
        );
        bar.setOrigin(0, 0);
        bar.setDepth(2);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {

            //  Update the progress bar
            bar.width = rect.width * progress;

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');
        this.load.image('logo', 'logo.png');
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
