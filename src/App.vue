<template>
  <div>
    <MyButton bg="#FC5757" :img="bina"  >success</MyButton>
  </div>
</template>

<script>
import MyButton from './components/MyButton'
import bina from './assets/icons/rubbish-bin.png'

export default {
  components:{
    MyButton
  },
  data(){
    return{
      bina
    } 
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>