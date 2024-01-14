# Phaser Vite Template

A Phaser 3 project template with hot-reloading for development and production-ready builds.

This has been updated for Phaser 3.70.0 version and above.

Loading images via JavaScript module `import` is also supported, although not recommended.

![Screenshot](example.png)

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | open web server running project |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) into the `dist` folder |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm run dev`.

After starting the development server with `npm run dev`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:8080` by default).

## Handling Assets

This template provides support for both embedding images and loading them from a static folder. To embed an image, you can import it at the top of the file you are using it in:

```js
import logoImg from './assets/logo.png'
```

To load static files such as images, audio files, videos, etc place them into the `public/assets` folder. Then you can use this path in the Loader calls within Phaser:

```js
    preload ()
    {
        //  This is an example of a bundled image (remember to put it at the top):
        this.load.image('logo', logoImg);

        //  This is an example of loading a static image from the public folder:
        this.load.image('background', 'assets/bg.png');
    }
```

When you do `npm run build` all assets are automatically copied into dist/assets. Remember to include this folder when you deploy your game to a server.

## Customizing the Template

### Vite

If you want to customize your build, such as adding plugin (i.e. for loading CSS or fonts), you can modify the `vite.config.js` file for cross-project changes, or you can modify and/or create new configuration files and target them in specific npm tasks inside of `package.json'.

[Click to get more info about Vite](https://vitejs.dev/).

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at `dist/assets` along with any other assets you project depended. 

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), you should be able to open `http://mycoolserver.com` and play your game.
