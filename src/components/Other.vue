<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button :style="styling" >Success</button>
    <h2>{{bg}}</h2>
  </div>
</template>

<script>

export default {
  name: 'Hello',
  props:{
      msg:String,
      bg: String
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