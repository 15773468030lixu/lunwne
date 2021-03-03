//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    console.log("小程序开始启动了");
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("展示本地存储的能力logs", logs);
    // 开启云开发
    wx.cloud.init({
      env: "cancan-5gn9rl1yb1158325",
    });
    // 把数据库初始化的实例给拿到wx.cloud.database()
    // collection('goods')把数据库的goods表给拿到
    // get查询操作
    // 传统写法
    // wx.cloud
    //   .database()
    //   .collection("goods")
    //   .get({
    //     success(res) {
    //       console.log("请求成功", res);
    //     },
    //     fail(err) {
    //       console.log("请求失败", err);
    //     },
    //   });
    // 数据库权限管理
    // 数据库的第二种写法es6简介写法
    // wx.cloud
    // .database()
    // .collection("goods")
    // .get().then((res)=>{
    //   console.log("请求成功", res);
    // }).catch((err)=>{
    //   console.log("请求失败", err);
    // })
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo);
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo);
            },
          });
        },
      });
    }
  },
  globalData: {
    userInfo: null,
  },
});
