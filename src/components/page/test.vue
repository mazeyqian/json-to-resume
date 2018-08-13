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
    <!--<button @click="addsonMsg">addsonMsg</button>-->
    <!--{{ sonMsg }}-->
  </div>
</template>

<script>
  import {mResetForm as reset} from '@/scss/mazey-ui/src/js/index.js'
  import axios from 'axios'
  export default {
    name: 'm-test',
    data () {
      return {
        testAttr0: 'in data',
        sonMsg: 0
      }
    },
    model: {
      prop: 'sonMsg',
      event: 'sonEvent'
    },
    props: {
      testAttr: {
        type: String,
        required: false,
        default: 'in default'
      }
    },
    created () {
      const params = new URLSearchParams()
      params.append('date', '2018')
      params.append('date', '8')
      params.append('date', '13')
      axios({
        method: 'get',
        url: '/',
        params
      })
        .then((res) => {
          console.log(res.status) // 200
        })
    },
    mounted () {
//      console.log(this.testAttr)
//      this.$root.eventHub.$emit('eventName', 'I am Mazey!')
    },
    methods: {
      reset,
      addsonMsg () {
        this.$emit('sonEvent', ++this.sonMsg)
      }
    }
  }
</script>
