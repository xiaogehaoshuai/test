const express=require("express");
const db=require("./modules/db");
const bodyParser=require("body-parser");
const common=require("./modules/common");
const eleEnum=require("./modules/eleEnum")
const md5 =require("md5");
const app=express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:false
// }));
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type");
    next();
})
// db.getAdminLogList(function(err,adminLogList){
//     console.log(JSON.stringify(adminLogList));
// })
// 获得管理员日志接口
app.get("/getAdminLogList",function(req,res){
    db.getAdminLogList(function(err,adminLogList){
        res.json({
            ok:1,
            adminLogList,
            logTypeEnum:eleEnum.logTypeEnum
        })
    })
})
app.post("/login",function(req,res){
    // 验证adminName passWord是否存在
    db.findOne("adminList",{
        adminName:req.body.adminName,
        passWord:md5(req.body.passWord+"@ele.Com")
    },function(err,adminInfo){
        if(adminInfo){
            db.insertOne("adminLog",{
                adminId:adminInfo._id,
                logType:4,
                detail:adminInfo.adminName+"在"+common.getNowTime()+"登陆了该系统",
                addTime:Date.now()
            },function(){
                res.json({
                    ok:1,
                    adminId:adminInfo._id,
                    adminName:adminInfo.adminName,
                    msg:"恭喜您，登陆成功"
                })
            })

        }else{
            res.json({
                ok:2,
                msg:"账号密码错误"
            })
        }
    })
})
app.post("/post",function(req,res){
    console.log(req.body);
    res.json({
        ok:1,
        msg:"成功"
    })
})
app.get("/get",function(req,res){
    console.log(req.query);
    res.json({
        ok:1,
        msg:"成功"
    })
})
app.listen(80,function(){
    console.log("success");
})
