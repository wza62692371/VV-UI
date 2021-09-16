<template>
  <div>
      <w-button>12</w-button>
      <Button>11111</Button>
      <Cbutton>11111</Cbutton>
      <w-tag>标签一</w-tag>
      <w-cc></w-cc>
  </div>
</template>
<script>
import {Button} from 'cliss-ui-test';
import {WButton} from '../../lib/cc-ui.common'
import Cbutton from '../../lib/button';
  export default{
    components:{
      WButton,
      Button,
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
