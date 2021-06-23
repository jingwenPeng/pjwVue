<template>
  <div>
    哈哈哈哈哈哈哈
    {{detail}}
    <comp-edit v-model="detail" :isClear="isClear" @change="change"></comp-edit>
  </div>
</template>

<script>
  import CompEdit from '../../components/compEdit'

  export default {
    name: "index",
    data() {
      return {
        isClear: false,
        detail: ''
      }
    },
    methods: {
      change(val) {
        console.log(val)
      },
    },
    components: {
      CompEdit
    }
  }
</script>

<style scoped>

</style>
