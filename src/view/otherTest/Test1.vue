<template>
  <div>
    <h1>你好呀，李银河</h1>
    <comp-test ref='test1'><h2>好的</h2></comp-test>
  </div>
</template>
<script>
import CompTest from './components/CompTest'

export default {
  name: 'Test1',
  data() {
    return {}
  },
  components: {
    CompTest
  },
  mounted() {
    console.log(this.$refs.test1.$el)
  },
  beforeCreate() {
    console.log('hhhhhhhhhhhhhhhhhhhhhhh')
  },
  beforeMount() {
    console.log('jjjjjjjjjjjjjjjjjjjjj')
  },
  created() {
    console.log('kkkkkkkkkkkkkkkkkk')
  }
}
</script>
<style scoped>

</style>