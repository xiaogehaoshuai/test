<<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="Id"
      label="编号"
      width="120"
    >
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
    >
    </el-table-column>
    <el-table-column
      prop="commodityName"
      label="商品名称"
    >
    </el-table-column>
    <el-table-column
      prop="describe"
      label="商品描述">
    </el-table-column>

    <el-table-column
      prop="shopName"
      label="所属店铺名称">
    </el-table-column>
    <el-table-column
      prop="shopPrice"
      label="商品价格">
    </el-table-column>
    <el-table-column
      prop="orderIFinish"
      label="订单是否完成">
    </el-table-column>
    <el-table-column
      label="操作"
      fixd="right"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "orderMainPage",
    data() {
      return {
        tableData: [{
          Id:'1',
          shopName:'1号店',
          date: '2016-05-02',
          commodityName: '上海',
          describe:'按实际的开发好看',
          orderIFinish:'已完成',
          shopPrice:'$23'
        },{
          Id:'1',
          shopName:'1号店',
          date: '2016-05-02',
          commodityName: '上海',
          describe:'按实际的开发好看',
          orderIFinish:'已完成',
          shopPrice:'$23'
        },{
          Id:'1',
          shopName:'1号店',
          date: '2016-05-02',
          commodityName: '上海',
          describe:'按实际的开发好看',
          orderIFinish:'已完成',
          shopPrice:'$23'
        },{
          Id:'1',
          shopName:'1号店',
          date: '2016-05-02',
          commodityName: '上海',
          describe:'按实际的开发好看',
          orderIFinish:'已完成',
          shopPrice:'$23'
        },{
          Id:'1',
          shopName:'1号店',
          date: '2016-05-02',
          commodityName: '上海',
          describe:'按实际的开发好看',
          orderIFinish:'已完成',
          shopPrice:'$23'
        },{
          Id:'1',
          shopName:'1号店',
          date: '2016-05-02',
          commodityName: '上海',
          describe:'按实际的开发好看',
          orderIFinish:'已完成',
          shopPrice:'$23'
        },{
          Id:'1',
          shopName:'1号店',
          date: '2016-05-02',
          commodityName: '上海',
          describe:'按实际的开发好看',
          orderIFinish:'已完成',
          shopPrice:'$23'
        },{
          Id:'1',
          shopName:'1号店',
          date: '2016-05-02',
          commodityName: '上海',
          describe:'按实际的开发好看',
          orderIFinish:'已完成',
          shopPrice:'$23'
        },]
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
  }
</script>

<style scoped>


</style>
