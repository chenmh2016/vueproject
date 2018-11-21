<template>
  <div id="root">
    <h1 style="text-align: center">vue grid layout</h1>
    <div class="layoutJSON">
      displayed as <code>[x,y,w,h]</code>
      <div class="columns">
        <div class="layoutItem" v-for="item in layout" :key="item.i">
          <b>
            {{item.i}}
          </b>:[{{item.x}},{{item.y}},{{item.w}},{{item.h}}]
        </div>
      </div>
    </div>
    <div id="content">
      <button @click="decreaseWidth">减少宽度</button>
      <!--<button @click="increaseWidth">增加宽度</button>-->
      <!--<button @click="addItem">增加一个</button>-->
      Row height: <input type="number" v-model="rowHeight" />
      Col num: <input type="number" v-model="colNum">
      <grid-layout
        :layout.sync="layout"
        :col-num="parseInt(colNum)"
        :row-height="rowHeight"
        :is-draggable="draggable"
        :is-resizable="resizable"
        :is-mirrored="mirrored"
        :auto-size="false"
        :margin="[30,30]"
        :vertical-compact="true"
        :use-css-transforms="true"
        :responsive="responsive"
      >
        <grid-item v-for="item in layout" :key="item.i"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   @resize="resize"
                   @move="move"
                   @resized="resized"
                   @moved="moved"
        >
          <!--<component v-bind:is="item.component"> </component>-->
          <button style="position: absolute;right: 10px; bottom: 0;" @click="clicked()">CLICK ME!</button>
        </grid-item>
      </grid-layout>
    </div>
    <select-modal-com v-bind:modalShow="modalShow"  v-on:cancelModal="cancelModal"/>
  </div>
</template>

<script>
// import Vue from 'vue'
import VueGridLayout from 'vue-grid-layout'
import News from '../Router/News'
import SelectModalCom from './SelectModalCom'

import customDragElement from './CustomDragElement'
//
// Vue.use(VueGridLayout)

var testLayout = [
  {'x': 0, 'y': 0, 'w': 2, 'h': 9, 'i': '0', component: 'News'},
  {'x': 3, 'y': 1, 'w': 2, 'h': 9, 'i': '1', component: 'News'},
  {'x': 5, 'y': 2, 'w': 2, 'h': 9, 'i': '2', component: 'News'}
  // {'x': 0, 'y': 3, 'w': 1, 'h': 1, 'i': '3', component: 'News'}

]

var GridLayout = VueGridLayout.GridLayout
var GridItem = VueGridLayout.GridItem

export default {
  name: 'Layout',
  components: {
    GridLayout,
    GridItem,
    News,
    customDragElement,
    SelectModalCom
  },
  data () {
    return {
      layout: JSON.parse(JSON.stringify(testLayout)),
      layout2: JSON.parse(JSON.stringify(testLayout)),
      draggable: true,
      resizable: true,
      mirrored: false,
      responsive: true,
      rowHeight: 30,
      colNum: 12,
      index: 0,
      modalShow: false
    }
  },
  mounted () {
    this.index = this.layout.length
  },
  methods: {
    clicked: function () {
      console.log('ok')
      this.modalShow = true
    },
    cancelModal: function () {
      this.modalShow = false
    },
    increaseWidth: function () {
      let width = document.getElementById('content').offsetWidth
      width += 20
      document.getElementById('content').style.width = width + 'px'
    },
    decreaseWidth: function () {
      let width = document.getElementById('content').offsetWidth
      width -= 20
      document.getElementById('content').style.width = width + 'px'
    },
    removeItem: function (item) {
      // console.log("### REMOVE " + item.i);
      this.layout.splice(this.layout.indexOf(item), 1)
    },
    addItem: function () {
      // let self = this;
      // console.log("### LENGTH: " + this.layout.length);
      let item = {'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': this.index + '', whatever: 'bbb'}
      this.index++
      this.layout.push(item)
    },
    move: function (i, newX, newY) {
      console.log('MOVE i=' + i + ', X=' + newX + ', Y=' + newY)
    },
    resize: function (i, newH, newW, newHPx, newWPx) {
      console.log('RESIZE i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    },
    moved: function (i, newX, newY) {
      console.log('### MOVED i=' + i + ', X=' + newX + ', Y=' + newY)
    },
    resized: function (i, newH, newW, newHPx, newWPx) {
      console.log('### RESIZED i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    }
    /**
     * Add change direction button
     */
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #root{-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;}
  .vue-grid-layout {
    position: relative;
    /*width: 800px;*/
    height: 450px;
    /*overflow: hidden;*/
    /*background: url('../../assets/desktop_background.png') no-repeat;*/
  }

  .vue-grid-layout > div {
    position: absolute;
    background: indianred;
  }
  .layoutJSON {
    background: #ddd;
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
  }
  .columns {
    -moz-columns: 120px;
    -webkit-columns: 120px;
    columns: 120px;
  }
  .vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
  }

  .vue-grid-item.resizing {
    opacity: 0.9;
  }

  .vue-grid-item.static {
    background: #cce;
  }

  .vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
  }

  .vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
  }

  .vue-grid-item .minMax {
    font-size: 12px;
  }

  .vue-grid-item .add {
    cursor: pointer;
  }

</style>
