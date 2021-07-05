<template>
  <div>
    <div style="padding: 20px;">
      <div id="editor" class="editor" style="height: 250px;"></div>
<!--      <quill-editor  id="editor"-->
<!--                     @blur="onEditorBlur($event)"-->
<!--                     @focus="onEditorFocus($event)"-->
<!--                     @ready="onEditorReady($event)"-->
<!--                     @change="onEditorChange($event)">-->
<!--      </quill-editor>-->
    </div>

    <!-- 富文本插入图片的弹框 -->
<!--    <ImageDialog :isVisible="dialogVisible" title="请选择图片"-->
<!--                 @assure="assureInsert"-->
<!--                 @dialogClose="dialogVisible=false"></ImageDialog>-->

<!--    &lt;!&ndash; 富文本插入视频的弹框 &ndash;&gt;-->
<!--    <video-choose-dialog :isVisible="dialogVisibleVideo"-->
<!--                         @assure="assureVideo"-->
<!--                         @dialogClose="dialogVisibleVideo=false"></video-choose-dialog>-->
<!--    &lt;!&ndash; 富文本插入音频的弹框 &ndash;&gt;-->
<!--    <audio-dialog-->
<!--      :isVisible="dialogVisibleAudio"-->
<!--      @dialogClose="dialogVisibleAudio=false"-->
<!--      @assure="assureAudio">-->
<!--    </audio-dialog>-->
  </div>
</template>

<script>
// import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'
// import ImageDialog from '../ImageDialog'
// import AudioDialog from '../AudioDialog'
// import ImageComp from '../ImageComp'
// import VideoChooseDialog from '../VideoChooseDialog'
// import ImgCropperDialog from '../ImgCropperDialog'
export default {
  name: "index",
  components: {
    // quillEditor,
    Quill,
    // ImageDialog
    // ImageComp,
    // AudioDialog,
    // VideoChooseDialog,
    // ImgCropperDialog,
  },
  data:function(){
    return {
      dialogVisible: false,
      dialogVisibleVideo: false,
      dialogVisibleAudio: false,
      dialogVisibleCover: false,
      cropperDialogVisible:false,
      addGroupVisible: false,
      newGroupName: '',
      uploadType: 'img',
      videoUrl:'',
      selectionIndex:0,
      quills: null
    }
  },
  mounted() {
    // 初始化功能
    const toolbarOptions = [
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],        // 标题字体
      // [{ 'font': [] }],                                 // 字体
      ['bold', 'italic', 'underline', 'strike'],        // 切换按钮
      [{ 'align': [] }],                                // 对齐方式
      ['blockquote', 'code-block'],                     // 文本块/代码块
      [{ 'header': 1 }, { 'header': 2 }],               // 用户自定义按钮值
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],     // 有序/无序列表
      [{ 'script': 'sub'}, { 'script': 'super' }],      // 上标/下标
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // 减少缩进/缩进
      [{ 'color': [] }, { 'background': [] }],          // 主题默认下拉，使用主题提供的值
      ['clean'],                                        // 清除格式
      // ['image', 'link', 'video']                        // 图片 / 链接 / 视频
      ['image']                      // 图片 / 链接 / 视频
    ]
    // 挂载
    this.$nextTick(() => {
      this.quills = new Quill('#editor', {
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              //链接的处理程序
              'image': this.imgHandler
            }
          }
        },
        theme: 'snow',                // 使用主题样式
        placeholder: '请输入内容'
      })
      const _this = this
      this.quills.on('selection-change', function(range, oldRange, source) {
        if (range) {
          if (range.length == 0) {
            console.log('User cursor is on', range.index);
          } else {
            var text = _this.quills.getText(range.index, range.length);
            console.log('User has highlighted', text);
          }
        } else {
          console.log('Cursor not in the editor');
        }
      });
      this.quills.on('text-change', function(delta, oldDelta, source) {
        if (source == 'api') {
          console.log("An API call triggered this change.");
        } else if (source == 'user') {
          console.log(delta, oldDelta, source)
          console.log("A user action triggered this change.");
        }
      });
    })
  },
  methods: {
    //光标离开编辑器
    onEditorBlur(quill) {
      console.log('失去光标')
    },
    //获得光标
    onEditorFocus() {
      console.log('获得光标，index=',this.quills.getSelection().index)
      this.selectionIndex = this.quills.getSelection().index
    },
    onEditorReady(quill) {
      console.log('ready',quill.getLength()-1)
      quill.setSelection(quill.getLength()-1,0);
      this.selectionIndex = quill.getLength()-1
    },
    //内容更改
    onEditorChange(val) {
      if(val.getSelection()==null) {return}
      console.log('内容更改，光标位置：',val.quills.getSelection().index)
      this.selectionIndex = val.quills.getSelection().index
    },
    // 点击图片ICON触发事件
    imgHandler(state) {
      console.log(this.quills.getText())
      this.uploadType = 'img'
      this.dialogVisible=true
      this.quills.blur()//失去光标
    },
    // 点击视频ICON触发事件
    videoHandler(state) {
      this.dialogVisibleVideo=true
    },
    //点击音乐ICON触发事件
    audioHandler(state) {
      this.dialogVisibleAudio=true
    },
    assureInsert(checkList){
      let _this=this
      _this.quills.setSelection(this.selectionIndex,0)

      console.log(checkList)
      checkList.forEach((item,i)=>{
        // 插入图片
        console.log('在'+parseInt(_this.selectionIndex+i)+'插入图片')
        _this.quills.insertEmbed(parseInt(_this.selectionIndex+i), "image", item);
        // _this.quills.insertEmbed(parseInt(_this.selectionIndex+i), "image", {src:item}, Quill.sources.USER);

      })
      // 调整光标
      console.log('调整到：',this.selectionIndex+checkList.length)
      this.quills.setSelection(this.selectionIndex+checkList.length,0);
      this.quills.focus()
      this.dialogVisible=false
    },
    assureVideo(videoUrl){
      let poster= this.$conf.domainInfo +'/api/article/video/1/1?videofile='+encodeURIComponent(videoUrl)
      console.log(poster)
      this.quills.setSelection(this.selectionIndex,0);
      this.quills.insertEmbed(this.selectionIndex, 'simpleVideo', {
        url:videoUrl,
        controls: 'controls',
        poster: poster,
        width: '100%',
        height: '100%'
      })
      this.quills.setSelection(this.selectionIndex+1,0);
      this.quills.focus()
      this.videoUrl=''
      this.dialogVisibleVideo=false
    },

    //确认事件
    assureAudio(audioUrl){
      // let poster= this.$conf.domainInfo +'/api/article/video/1/1?videofile='+encodeURIComponent(videoUrl)
      this.quills.setSelection(this.selectionIndex,0);
      this.quills.insertEmbed(this.selectionIndex, 'audio', {
        url:audioUrl,
        controls: 'controls',
        width: '100%',
        height: '100%'
      })
      this.quills.setSelection(this.selectionIndex+1,0);
      this.quills.focus()
      this.audioUrl=''
      this.dialogVisibleAudio=false
    },
    getCon33tents(){
      console.log(this.quills.getContents(), '66666666666666')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
