<template>
  <div class="hello">
    <div id="game"></div>
    <!-- <ul>
      <li>
        <router-link to="/flybird">1111</router-link>
      </li>
    </ul> -->

  </div>
</template>

<script>
import Flybird from '../../components/game-flybird/index'

export default {
  name: 'Home',
  data () {
    return {
      game:null
    }
  },
  mounted(){
    console.log(12)
    this.game = new Flybird(288, 505,"game")
  },
  methods:{}
}
</script>
<style scoped>
</style>
