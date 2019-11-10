<template>
  <div class="">
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
  import Landscape from './landscape.js'
  export default {
    name: 'App',
    data(){
      return {}
    },
    mounted(){
     let el = document.getElementById('canvas')
     let w= window.innerWidth || document.body.clientWidth;
     let h= window.innerHeight || document.body.clientHeight;
     this.Landscape = new Landscape({
       el: el,
       background: 'rgba(255,255,255)',
       width: w,
        height: h
     })
    }
  }
</script>
