<template>
    <div>库存管理</div>
</template>

<script>
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
            console.log(response.data)
          })
        },
      },
      mounted() {
          this.getShowStockList()
        }
    }
</script>

<style scoped>

</style>
