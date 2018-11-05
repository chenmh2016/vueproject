<template>
  <Row>
    <i-col span="8">
      <Menu ref="left_menu" :active-name='activeName' :open-names="['5']" theme="light" width="200px" style="height: 100%;padding-top: 20px;">
        <Menu-item name="1" to="/first">First</Menu-item>
        <Menu-item name="2" to="/todoList">todoList</Menu-item>
        <Menu-item name="3" to="/home">home</Menu-item>
        <Menu-item name="4" to="/news">news</Menu-item>
        <!--<Submenu name="5" v-if="this.$store.state.permit.admin">-->
          <!--<template slot="title">系统管理</template>-->
          <!--<Menu-item name="5-1" to="/management/project">项目管理</Menu-item>-->
          <!--<Menu-item name="5-2" to="/management/user">用户管理</Menu-item>-->
          <!--<Menu-item name="5-3" to="/management/user_group">用户组管理</Menu-item>-->
          <!--<Menu-item name="5-4" to="/management/user_group_config">用户组权限配置</Menu-item>-->
        <!--</Submenu>-->
      </Menu>
    </i-col>
  </Row>
</template>
<style>

</style>
