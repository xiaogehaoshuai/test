<<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column

      prop="date"
      label="加入日期"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      >
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
     >
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
    >
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
  >
    </el-table-column>
    <el-table-column
      prop="shopName"
      label="店铺名称"
     >
    </el-table-column>
    <el-table-column
      label="操作"
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
        name: "customerMainPage",
      data() {
        return {
          tableData: [{
            shopName:'1号店',
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            shopName:'1号店',
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333
          }, {
            shopName:'1号店',
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333
          }, {
            shopName:'1号店',
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }]
        }
      },
      methods: {
        getUserList(){
          this.$ajax.get("http://127.0.0.1/showUseList").then((response) => {
            console.log(response.data)
          })
        },
        handleClick(row) {
          console.log(row);
        }
      },
      mounted() {
        this. getUserList()
      }
    }
</script>

<style scoped>


</style>
