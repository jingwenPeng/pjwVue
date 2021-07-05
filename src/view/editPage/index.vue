<template>
  <div>
    哈哈哈哈哈哈哈
    {{detail}}
<!--    <comp-edit v-model="detail" :isClear="isClear" @change="change"></comp-edit>-->
    <quill-edit ref="quillEdit" />
  </div>
</template>

<script>
  import CompEdit from '../../components/compEdit'
  import quillEdit from '@/components/quillEdit'

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
      CompEdit,
      quillEdit
    },
    mounted() {
      this.$nextTick(() => {
        // this.$refs.quillEdit.focusIndex()
      })
    }
  }
</script>

<style scoped>

</style>
