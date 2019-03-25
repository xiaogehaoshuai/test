<template>
  <div style="height:900px;">
    <div style="width:500px;margin:0px auto; padding-top:240px;">
      <div style="text-align: center;line-height:60px;">欢迎来到后台管理</div>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" style="width:450px">
        <el-form-item label="姓名" prop="name">
          <el-input type="name" v-model="ruleForm2.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Login",
      data() {
        var checkName= (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入姓名'));
          } else {
            callback();
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm2.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm2: {
            name:'',
            pass: '',
            checkPass: '',
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            name: [
              { validator: checkName, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
             this.$router.push("/Main")
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
      }
    }

</script>

<style scoped>

</style>
