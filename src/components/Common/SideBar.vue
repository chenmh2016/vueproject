<template>
  <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        杂七杂八
      </template>
      <MenuItem name="1-1" to="/todoList">TodoList</MenuItem>
      <MenuItem name="1-2" to="/home">home</MenuItem>
      <MenuItem name="1-3" to="/news">news</MenuItem>
      <MenuItem name="1-4" to="/dashboard">dashboard</MenuItem>
      <MenuItem name="1-5" to="/class">循环组件选中样式</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-keypad"></Icon>
        组件的练习iview
      </template>
      <MenuItem name="2-1">Option 1</MenuItem>
      <MenuItem name="2-2">Option 2</MenuItem>
    </Submenu>
  </Menu>
</template>
<style>

</style>
