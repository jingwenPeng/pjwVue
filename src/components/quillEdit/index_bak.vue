<template>
  <div>
    <div id="editor" class="editor"></div>
  </div>
</template>

<script>
  import 'quill/dist/quill.snow.css'
  import Quill from 'quill'
  export default {
    name: "index",
    data() {
      return {
        quills: null
      }
    },
    components: {
      Quill
    },
    mounted() {
      // 初始化功能
      const toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],        // 标题字体
        [{ 'font': [] }],                                 // 字体
        ['bold', 'italic', 'underline', 'strike'],        // 切换按钮
        [{ 'align': [] }],                                // 对齐方式
        ['blockquote', 'code-block'],                     // 文本块/代码块
        [{ 'header': 1 }, { 'header': 2 }],               // 用户自定义按钮值
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],     // 有序/无序列表
        [{ 'script': 'sub'}, { 'script': 'super' }],      // 上标/下标
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // 减少缩进/缩进
        [{ 'color': [] }, { 'background': [] }],          // 主题默认下拉，使用主题提供的值
        ['clean'],                                        // 清除格式
        ['image', 'link', 'video']                        // 图片 / 链接 / 视频
      ]
      // 挂载
      this.$nextTick(() => {
        this.quills = new Quill('#editor', {
          modules: {
            toolbar: toolbarOptions
          },
          theme: 'snow',                // 使用主题样式
          placeholder: '请输入内容'
        })
      })
    },
    computed: {
      index_time() {
        return new Date()
      }
    },
    watch
    methods: {
      focusIndex() {
        this.quill.getSelection().index
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
