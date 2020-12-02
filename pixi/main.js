const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

const basicTextStyle = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: ['#ffffff', '#00ff99'], // gradient
  stroke: '#4a1850',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440,
  lineJoin: 'round'
});
const basicText = new PIXI.Text('Кликай, чтоб переродить Балашова', basicTextStyle);
basicText.x = 50;
basicText.y = 50;
app.stage.addChild(basicText);

// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const texture = PIXI.Texture.from('img/bb.png');
const secondTexture = PIXI.Texture.from('img/b.png');
const sprite = PIXI.Sprite.from(texture);

// Set the initial position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;
sprite.scale.x = 3;
sprite.scale.y = 3;

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

app.stage.addChild(sprite);

function onClick() {
  const delta = 0.65
    if (sprite.scale.x*delta > 1) {
      sprite.scale.x *= delta;
      sprite.scale.y *= delta;
    } else {
      sprite.texture = secondTexture;
      sprite.scale.x = 0.7;
      sprite.scale.y = 0.7;
      sprite.anchor.set(0.5, 1);
      sprite.x = app.screen.width / 2;
      sprite.y = app.screen.height;

      basicText.text = 'Огонь! Теперь можно и в бой!';
    }

}



