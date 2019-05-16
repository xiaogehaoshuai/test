<<template>
  <div>
    <div>
      <el-button @click="fn">添加</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="商品编号"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品名"
      >
      </el-table-column>

      <el-table-column
        prop="shopName"
        label="所属的商店名">
      </el-table-column>

      <el-table-column
        prop="shopId"
        label="所属商店编号">
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
    <div>
      <Poup :dialogFormVisible="dialogFormVisible" v-on:dialog="dialog"></Poup>
    </div>
  </div>

</template>

<script>
  //商品编号	商品所属商店	商品名	所属的商店名	所属商店编号
  //id name shopName shopId

  import Poup from "../com/Poup";
  export default {
    name: "shopMain",
    components: {Poup},
    data() {
      return {
        dialogFormVisible:false ,
        tableData: []
      }
    },
    methods: {
      fn(){
        this.dialogFormVisible=true
      },
      dialog(){
        this.getShowShopList()
        this.dialogFormVisible=false

      },

      getShowShopList(){
        this.$ajax.get("http://127.0.0.1/showShopList").then((response) => {
          this.tableData=response.data.data
        })
      },
      handleClick(row) {
        console.log(row);
      }
    },
    mounted() {
      this.getShowShopList()
    }
  }
</script>

<style scoped>


</style>
