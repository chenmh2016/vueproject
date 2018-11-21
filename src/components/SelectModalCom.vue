<template>
  <!--<p v-if="modal1">sdfsdfsdfsdfds</p>-->
  <el-dialog
    title="提示"
    :visible.sync="modal1"
    width="500px"
    :before-close="ok">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="ok">取 消</el-button>
    <el-button type="primary" @click="ok">确 定</el-button>
  </span>
  </el-dialog>
  <!--<Modal-->
    <!--v-model="modal1"-->
    <!--:closable="false"-->
    <!--:mask-closable="false"-->
    <!--okText="确定"-->
    <!--cancelText="取消"-->
    <!--:loading="modalLoading"-->
    <!--@on-ok="ok"-->
    <!--@on-cancel="cancel">-->
    <!--<div>-->
     <!--sdfsdfsdfsdfsdf-->
    <!--</div>-->
  <!--</Modal>-->
</template>
<script>
export default {
  props: ['modalShow'],
  data () {
    return {
      modal1: false,
      modalLoading: false
    }
  },
  watch: {
    modalShow: function (val) {
      console.log(val)
      this.modal1 = this.modalShow
    }
  },
  mounted () {
    console.log('modalShow', this.modalShow)
  },
  methods: {
    cancel () {
      // this.modalShow = false;
      this.$emit('cancelModal')
    },
    ok () {
      this.$emit('cancelModal')
      console.log('你选择好了')
      // this.modalLoading = false
      // this.$nextTick(() => {
      //   this.modalLoading = true
      // })
      //
      // this.modalModel.type = 'physical'
      // this.modalModel.tableName = this.modalModel.tableName
      //
      // this.$refs['refModalModel'].validate((valid) => {
      //   if (!valid) {
      //     this.$Message.error('表单验证失败，请检查填写是否正确！')
      //   } else {
      //     var url = ''
      //     var method = ''
      //     if (this.modalModel.id === undefined) {
      //       url = '/api/datamodel/table'
      //       method = 'post'
      //     } else {
      //       url = '/api/datamodel/table/' + this.modalModel.id
      //       method = 'put'
      //     }
      //
      //     axios(url,
      //       {
      //         method: method,
      //         data: this.modalModel,
      //         withCredentials: true
      //       })
      //       .then(response => {
      //         if (response.data.errorCode === 0) {
      //           this.showModal = false
      //           this.$emit('success')
      //           this.$Message.success('添加成功')
      //         } else {
      //           this.$Message.error('服务端异常，请稍后重试')
      //         }
      //       }).catch(error => {
      //       // window.console.log('error:' + error);
      //         this.$Message.error('服务端异常，请稍后重试')
      //       })
      //   }
      // })
    }
    // ok () {
    //   this.$Message.info('点击了确定')
    // },
    // cancel () {
    //   this.$Message.info('点击了取消')
    // }
  }
}
</script>
