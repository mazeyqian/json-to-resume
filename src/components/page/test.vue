<template>
  <div>
    <!--<span>{{ testAttr }}</span>-->
    <!--<form>-->
      <!--<input name="test0"/>-->
      <!--<input name="test1"/>-->
      <!--<input name="test2"/>-->
      <!--<select name="test3">-->
        <!--<option value="0">请选择</option>-->
        <!--<option value="1">1</option>-->
        <!--<option value="2">2</option>-->
        <!--<option value="3">3</option>-->
      <!--</select>-->
      <!--<button type="button" @click="reset('test0', 'test1', 'test2', 'test3')">重置</button>-->
    <!--</form>-->
  </div>
</template>

<script>
  import {mResetForm as reset} from '@/scss/mazey-ui/src/js/index.js'
  export default {
    name: 'm-test',
    data () {
      return {
        testAttr0: 'in data'
      }
    },
    props: {
      testAttr: {
        type: String,
        required: true,
        default: 'in default'
      }
    },
    mounted () {
//      console.log(this.testAttr)
      this.$root.eventHub.$emit('eventName', 'I am Mazey!')
    },
    methods: {
      reset
    }
  }
</script>
