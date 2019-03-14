import Phaser from 'phaser'

export default class extends Phaser.State {
  init(){
    console.log('Menu init')
  }
  preload(){


  }
  create(){
    // this.game.add.sprite(0,0,'background')
    let bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');//创建背景
    let ground = this.add.tileSprite(0,this.game.height-112,this.game.width,this.game.height,"ground")
    bg.autoScroll(-10 ,0);//TileSprite.autoScroll(x, y) //Sets this TileSprite to automatically scroll in the given direction until stopped via TileSprite.stopScroll().
    ground.autoScroll(-110 ,0);
    let groupTitle = this.add.group()
    groupTitle.create(0,0,'title')
    let bird = groupTitle.create(190,0,'bird') //组中添加鸟
    bird.animations.add('fly')//给鸟添加动画，前面设置了鸟的大小，一共3帧
    bird.animations.play('fly', 5, true);//play(name, frameRate, loop, killOnComplete) //
    groupTitle.x = 35;//设置组的位置
    groupTitle.y = 100;
    this.add.tween(groupTitle).to({y: 120}, 1000, null, true, 0, Number.MAX_VALUE, true) //to(properties, duration, ease, autoStart, delay, repeat, yoyo) → {Phaser.Tween}
    let _this= this
    function aa(){
      console.log(1111)
    }
    let btn = this.add.button(this.game.width/2, this.game.height/2, 'btn',this.startPlay
      // function(){console.log(1111)
      //   this.state.start('Play')
      //   }
     );
     console.log(this.world)
     console.log(this.add.button.toString())
    // btn.onInputUp.add(function(){
    //   console.log(1222)
    // });
    groupTitle.onChildInputUp.add(function(){
        console.log(1222)
      });
   btn.anchor.setTo(0.5, 0.5);
  }
  startPlay(){
    console.log(1111)
    this.state.start('Play');
  }
}
