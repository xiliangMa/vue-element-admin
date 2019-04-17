<template>
  <div>123 {{ user }}</div>
</template>

<script>
import { getUsers } from '@/api/users'

export default {
  name: 'User',
  data() {
    return {
      user: '',
      listRule: {
        page: 0,
        size: 20
      }
    }
  },
  //   created() {
  //     this.getUser()
  //   },
  methods: {
    getUser() {
      getUsers(this.listRule.page, this.listRule.size).then(response => {
        console.log('users', response)
      })
    }
  }
}
</script>
