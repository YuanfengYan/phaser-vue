import Phaser from 'phaser'

export default class extends Phaser.State {
  init(){
    console.log('Preload init')
  }
  preload(){
    console.log(this)
    let loadBar = this.add.sprite(34,this.game.height/2,'loadBar')
    this.load.setPreloadSprite(loadBar);
    this.load.image('background', 'static/flybird/background.png');
    this.load.image('ground', 'static/flybird/ground.png');
    this.load.image('title', 'static/flybird/title.png');
    this.load.spritesheet('bird', 'static/flybird/bird.png', 34, 24, 3);
    this.load.image('btn', 'static/flybird/start-button.png');
    this.load.spritesheet('pipe', 'static/flybird/pipes.png', 54, 320, 2);
    this.load.bitmapFont('flappy_font', 'static/flybird/fonts/flappyfont/flappyfont.png', 'static/flybird/fonts/flappyfont/flappyfont.fnt');
    this.load.audio('fly_sound', 'static/flybird/flap.wav');
    this.load.audio('score_sound', 'static/flybird/score.wav');
    this.load.audio('hit_pipe_sound', 'static/flybird/pipe-hit.wav');
    this.load.audio('hit_ground_sound', 'static/flybird/ouch.wav');
    this.load.image('ready_text', 'static/flybird/get-ready.png');
    this.load.image('play_tip', 'static/flybird/instructions.png');
    this.load.image('game_over', 'static/flybird/gameover.png');
    this.load.image('score_board', 'static/flybird/scoreboard.png');

    // this
  }
  create(){
    console.log('Preload creat')
    this.state.start('Menu')
  }
}
