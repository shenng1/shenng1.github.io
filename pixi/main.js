const app = new PIXI.Application();
document.body.appendChild(app.view);

let bol = false;

// create a texture from an image path
const texture = PIXI.Texture.from('img/kam.png');

// create a second texture
const secondTexture = PIXI.Texture.from('img/510.jpg');

// create a new Sprite using the texture
const dude = new PIXI.Sprite(texture);

// center the sprites anchor point
dude.anchor.set(0.5);

// move the sprite to the center of the screen
dude.x = app.screen.width / 2;
dude.y = app.screen.height / 2;
dude.width = 350;
dude.height = 400;

app.stage.addChild(dude);

// make the sprite interactive
dude.interactive = true;
dude.buttonMode = true;

dude.on('pointertap', () => {
    bol = !bol;
    if (bol) {
        dude.texture = secondTexture;
        dude.width = 550;
        dude.height = 300;
    } else {
        dude.texture = texture;
        dude.width = 350;
        dude.height = 400;

    }
});


const basicText = new PIXI.Text('кликни чтоб познать дзен', { fill: ['#fff', 'red'], });
basicText.x = 50;
basicText.y = 50;

app.stage.addChild(basicText);



app.ticker.add(() => {
    // just for fun, let's rotate mr rabbit a little
    dude.rotation += 0.001;
});