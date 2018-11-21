<template>
  <div>
    <span class="text">
        {{text}}
    <button @click="clickbu">点击添加</button>
    <span class="vue-draggable-handle"></span>
    </span>
  <select-modal-com v-bind:modalShow="modalShowTmp"  v-on:cancelModal="cancelModal"/>
  </div>
</template>
<style>
    .vue-draggable-handle {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 0;
        left: 0;
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
        background-position: bottom right;
        padding: 0 8px 8px 0;
        background-repeat: no-repeat;
        background-origin: content-box;
        box-sizing: border-box;
        cursor: pointer;
    }
</style>
<script>
import SelectModalCom from './SelectModalCom'
export default {
  name: 'CustomDragElement',
  components: {
    SelectModalCom
  },
  data: function () {
    return {
      modalShowTmp: false,
      data: false
    }
  },
  props: {
    text: {
      type: String,
      default: 'x'
    }
  },
  watch: {
    // modalShow: function(val) {
    //   this.data = val
    // }
  },
  methods: {
    clickbu () {
      console.log('ok')
      this.modalShowTmp = true
    },
    cancelModal: function () {
      this.modalShowTmp = false
    }
  },
  mounted: function () {
    console.log('### ' + this.text + ' ready!')
  }
}
</script>
