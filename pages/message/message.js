/*technician.js*/

//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')
var util = require('../../utils/util')

Page({
  // 页面初始数据
  data: {
    // nav 初始化
    // cas picker
    casArray: ['酒店', '唱歌', '健身', '学习'],
    casIndex: 0,
    // addr picker
    addrArray: util.replacePhone(fileData.userData().addrs, false),
    addrIndex: 0,
    // skillData: fileData.getSkilledData(),
    curNavId: 1,
    curIndex: 0,
    orderList: []
  },

  onLoad: function () {
  },
  onShow() {
    this.getCarts()
  },
  getCarts() {
    wx.cloud
      .database()
      .collection("carts")
      .get().then((res) => {
        this.setData({
          orderList: res.data
        })
        wx.setStorageSync('cart', {
          time: Date.now(),
          data: res.data
        })
      }).catch((err) => {
        console.log("请求失败", err);
      })

  },
  cancelBook(e) {
    wx.cloud
      .database()
      .collection("carts").doc(e.currentTarget.dataset.book).remove()
      .then((res) => {
        console.log("请求成功", res);
        this.getCarts()
      }).catch((err) => {
        console.log("请求失败", err);
      })
  },
  // 跳转至详情页
  navigateDetail: function (e) {
  },
  // 类别选择
  bindCasPickerChange: function (e) {
    console.log('Category picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      casIndex: e.detail.value
    })
  },
  // 地址选择
  bindAddrPickerChange: function (e) {
    console.log('Category picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  }
})