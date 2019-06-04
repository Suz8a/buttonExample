<template>
  <div class="hello">
    <h2>{{bg}}</h2>
    <button :style="styling" >Success</button>
  </div>
</template>

<script>

export default {
  name: 'Hello',
  props:{
      msg:String,
      bg: String,
      img:String
  },
  computed: {
      styling: function(){
          return{
              background:this.bg
          }
      }
  } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1, h2 {
  font-weight: normal;
}

button{
    color:black;
    border:none;
}

</style>