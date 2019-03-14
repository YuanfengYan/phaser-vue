import 'pixi'
import 'p2'
import Phaser from 'phaser'
import Boot from './Boot'
import Preload from './Preload'
import Menu from './Menu'
import Play from './Play'
export default class extends Phaser.Game {
  constructor (width,height,id){
    super(width,height, Phaser.CANVAS,id)
    this.state.add('Boot',Boot,false)
    this.state.add('Preload',Preload,false)
    this.state.add('Menu',Menu,false)
    this.state.add('Play',Play,false)
    this.state.start('Boot')
  }
}
