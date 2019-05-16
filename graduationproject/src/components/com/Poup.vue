<template>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="商品编号" :label-width="formLabelWidth">
      <el-input v-model="form.id" autocomplete="off"></el-input>
    </el-form-item>
      <el-form-item label="商品名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所属的商店名" :label-width="formLabelWidth">
        <el-input v-model="form.shopName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所属商店编号" :label-width="formLabelWidth">
        <el-input v-model="form.shopId" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="fn">取 消</el-button>
      <el-button type="primary" @click="fn(form)">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
    export default {
        name: "Poup",
      props:['dialogFormVisible'],
      data(){
        return {
          form: {
            id: '',
            name: '',
            shopName:'',
            shopId:''
          },
          formLabelWidth: '120px'
        }
      },
      methods:{
        addShowShopList(form){
          this.$ajax.post("http://127.0.0.1/addShopList",{id:form.id,name:form.name,shopName:form.shopName,shopId:form.shopId}).then((response) => {
            console.log(response.data)
            this.$emit('dialog')
            this. addShowStockList(form)
          })
        },
        addShowStockList(form){
          this.$ajax.post("http://127.0.0.1/addStockList",{
            id:form.id,
            shopId:form.shopId,
            shopSum:1,
            shopNum:1,
          }).then((response) => {
            console.log(response.data)
            this.$emit('dialog')
          })
        },
          fn(form){
          this.addShowShopList(form)
          }
      },
      watch:{
          'dialogFormVisible':function (val) {
            this.dialogFormVisible=val
          }
      }
    }
</script>

<style scoped>

</style>
