<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" :row-style="changeRowBgColor">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {date: '2016-05-02', name: '王小虎', color: 'red', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', color: 'yellow', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', color: 'pink', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', color: 'green', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', color: 'blue', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', color: 'purple', address: '上海市普陀区金沙江路 1518 弄'},
        ]
      }
    },
    methods: {
      changeRowBgColor({row}) {
        return { 'background': row.color }
      }
    }
  }
</script>
