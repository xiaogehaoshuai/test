<template>
  <div>
    <el-table
      :data="stockList"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="商品编号"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="shopSum"
        label="商品总量"
      >
      </el-table-column>
        <el-table-column
          prop="shopNum"
          label="商品剩余量"
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
  </div>
</template>

<script>
  //Id ShopName ShopSum ShopNum ShopId

  export default {
        name: "stockMainPage",
      data(){
          return {
            stockList:[]
          }
      },
      methods:{
        getShowStockList(){
          this.$ajax.get("http://127.0.0.1/showStockList").then((response) => {
            this.stockList=response.data.data
          })
        },
      },
      mounted() {
          console.log(1212)
          this.getShowStockList()
        }
    }
</script>

<style scoped>

</style>
