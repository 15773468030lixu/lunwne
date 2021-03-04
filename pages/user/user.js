//index.js
//获取应用实例
var app = getApp()
// var myData = require('../../utils/data')
// var util = require('../../utils/util')

Page({
  // 页面初始数据
  data: {
    userData:{},
    // addrDate:util.replacePhone(myData.userData().addrs,true)
  },
  // 地址编辑
  onLoad(){
   
  },
  onShow(){
      this.setData({
        userData: wx.getStorageSync('userinfo'),
      })
      if(this.data.userData === null){
        wx.switchTab({
          url: '/pages/login/login',
        }) 
      }
    console.log('fffffffff',this.data.userData)
  },
  editAddr : function(e){
    console.log(e)
    wx.navigateTo({
      url:'../edit_addr/edit_addr?addrid='+e.currentTarget.dataset.addrid
    })
  }
})
