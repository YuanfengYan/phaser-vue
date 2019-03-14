import Phaser from 'phaser'

export default class extends Phaser.State {
  init(){
    console.log('Boot init')
  }
  preload(){
      if(!this.game.device.desktop){
          this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
          this.game.scale.forcePortrait = true;
          this.game.scale.refresh();
      }
      this.load.image('loadBar', 'static/flybird/preloader.gif');
  }
  create(){
    console.log('Boot creat')
    this.state.start('Preload')
  }
}
