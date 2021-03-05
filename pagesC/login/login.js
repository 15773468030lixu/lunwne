// pages/login/login.js
Page({
  data: {

  },
  handleGetUserInfo(e){
      console.log('用户信息',e)
      const {userInfo} = e.detail
      console.log('用户信息',userInfo)
      wx.setStorageSync('userinfo',userInfo)
      wx.switchTab({
        url: '/pages/user/user',
      })
  }
})