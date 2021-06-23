<template>
  <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" :router="true" active-text-color="#ffd04b">
          <el-menu-item index="/Test1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="/editPage">编辑页</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <router-view />

    <!--<button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade" mode="out-in" :duration="1000">
      <p v-if="show">hello</p>
    </transition>
    <el-table :data="tableData" border height="400px" @row-dblclick="handleDblclick">
      <el-table-column prop="info1" label="info1">
        <template slot-scope="scope">
          <span @dblclick.stop="gagadblClick(scope.row.info1)">{{scope.row.info1}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="info2" label="info2"></el-table-column>
      <el-table-column prop="info3" label="info3"></el-table-column>
      <el-table-column prop="info4" label="info4"></el-table-column>
    </el-table>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        show: true,
        tableData: [
          {info1:1, info2: 2, info3: 3, info4: 4},
          {info1:11, info2: 22, info3: 33, info4: 44},
          {info1:21, info2: 32, info3: 43, info4: 54},
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleDblclick() {
        console.log(11)
      },
      gagadblClick() {
        document.execCommand('copy');
      }
    }
  }
</script>
