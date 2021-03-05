var app = getApp()

Page({
  // 页面初始数据
  data: {
    userData:{},
    facesrc:''
  },
  // 地址编辑
  onLoad(){
   
  },
  onShow(){
      this.setData({
        userData: wx.getStorageSync('userinfo'),
        facesrc:wx.getStorageSync('face')
      })
      if(this.data.userData === null){
        wx.navigateTo({
          url: '/pagesC/login/login',
        }) 
      }
  },
})
