<template>
  <div class="hello">
    {{name}}
    <button v-on:click="hello()" :disabled="disable">Hello</button>    
  </div>
</template>

<script src="./VideoCall.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
