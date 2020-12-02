function randomInteger(min, max) { return Math.round(min - 0.5 + Math.random() * (max - min + 1)); }

const app = new PIXI.Application({ 
	autoResize: true,
  resolution: devicePixelRatio,
  backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

app.renderer.resize(window.innerWidth, window.innerHeight);


const Hero = createHero();
const Title = createTitle('Кликай чтоб развязать войну');
const Patrons = [];



function createTitle(value) {
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
  const text = new PIXI.Text(value, basicTextStyle);
  text.x = 50;
  text.y = 50;
  app.stage.addChild(text);
  return text; 
}

function updateTitle(value) { Title.text = value; }

function createHero() {
  const texture = PIXI.Texture.from('img/bb.png');
  const secondTexture = PIXI.Texture.from('img/b.png');
  const sprite = PIXI.Sprite.from(texture);
  let isNewHero = false;
  
  sprite.anchor.set(0.5, 1);
  sprite.x = app.screen.width / 2;
  sprite.y = app.screen.height;
  sprite.scale.x = 3;
  sprite.scale.y = 3;
  sprite.interactive = true;
  sprite.buttonMode = true;
  sprite.on('pointerdown', onClick);
  
  // Alternatively, use the mouse & touch events:
  // sprite.on('click', onClick); // mouse-only
  // sprite.on('tap', onClick); // touch-only
  
  app.stage.addChild(sprite);

  function onClick() {
    if (isNewHero) return;
    const delta = 0.65
    
      if (sprite.scale.x*delta > 1) {
        sprite.scale.x *= delta;
        sprite.scale.y *= delta;
        genPanton();

      } else {
        isNewHero = true;
        sprite.texture = secondTexture;
  
        sprite.anchor.set(0.5, 1);
        sprite.x = app.screen.width / 2;
        sprite.y = app.screen.height;
        sprite.scale.x = 0.7;
        sprite.scale.y = 0.7;
        
        updateTitle('Огонь! Теперь можно и в бой!');
        genPanton();

      }
  }
}

function genPanton() {
  const texture = PIXI.Texture.from('img/kam.png');
  const sprite = PIXI.Sprite.from(texture);

  sprite.anchor.set(0.5);
  sprite.x = randomInteger(50, app.screen.width-50);
  sprite.y = randomInteger(50, app.screen.height-50);
  sprite.width = app.screen.width*0.1;
  sprite.height = app.screen.width*0.14;
  // sprite.parentGroup = blueGroup;

  app.stage.addChild(sprite);
}

// const blueGroup = new PIXI.display.Group(1, ((sprite) => {
//   // blue bunnies go up
//   sprite.zOrder = -sprite.y;
// }));
// app.stage.addChild(new PIXI.display.Layer(blueGroup));
genPanton();