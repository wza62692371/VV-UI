<template>
  <div>
      <Cbutton>11111</Cbutton>
      <w-tag>标签一</w-tag>
      <w-cc></w-cc>
  </div>
</template>
<script>
import Cbutton from '../../lib/button';
  export default{
    components:{
      Cbutton
    },
    data () {
      return {
        height: document.documentElement.clientHeight
      }
    },
    methods: {
      cc(){
      }
    }
  }
</script>
