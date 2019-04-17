<template>
  <div>
    {{ hostList }}
  </div>
</template>
<script>
import { getHostData } from '@/api/host'

export default {
  name: 'Host',
  data() {
    return {
      hostList: [],
      listRule: {
        page: 0,
        size: 20
      }
    }
  },
  created() {
    this.getHost()
  },
  methods: {
    getHost() {
      getHostData({}).then(response => {
        const { data } = response
        this.hostList = data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

