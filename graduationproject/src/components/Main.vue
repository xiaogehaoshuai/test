<template>
    <div>
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple">
                <b>后台管理</b>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-aside style="width:120px;">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo">
              <el-menu-item index="1" @click="$router.push('/admMain')">
              <i class="el-icon-menu"></i>
              <span slot="title" >主页</span>
            </el-menu-item>
              <el-menu-item index="2" @click="$router.push('/shopMain')">
                <i class="el-icon-menu"></i>
                <span slot="title">商品管理</span>
              </el-menu-item>
              <el-menu-item index="3" @click="$router.push('/orderMainPage')">
                <i class="el-icon-menu"></i>
                <span slot="title" >订单管理</span>
              </el-menu-item>
              <el-menu-item index="4" @click="$router.push('/stockMainPage')">
                <i class="el-icon-menu"></i>
                <span slot="title">库存管理</span>
              </el-menu-item>
              <el-menu-item index="5" @click="$router.push('/customerMainPage')">
                <i class="el-icon-menu"></i>
                <span slot="title">客户管理</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
  .el-header {
    height: 60px;
    padding: 0;
    color: #fff;
    background: #545c64;
    line-height: 60px;
    font-size: 24px;
    text-indent: 20px;
    border-bottom: 2px solid#000;
  }
  .el-main{
    padding: 0;
  }
</style>
