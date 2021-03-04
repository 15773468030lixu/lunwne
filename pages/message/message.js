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
    // const cart = wx.getStorageSync("cart") || []
    // cart.push(wx.getStorageSync('bookTapbookInfo'))
    // wx.setStorageSync('cart', cart)
    // console.log('8888888888888已經存在', this.data.orderList);
    // this.getCarts()
  },
  onShow() {
    this.getCarts()
  },
  getCarts() {
    wx.cloud
      .database()
      .collection("carts")
      .get().then((res) => {
        console.log("请求成功hhhh", res.data);
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
    console.log("跳转至订单页", this.data.orderList)

  },
  cancelBook(e) {
    console.log('55555555555555555', e.currentTarget.dataset.book)
    wx.cloud
      .database()
      .collection("carts").doc(e.currentTarget.dataset.book).remove()
      .then((res) => {
        console.log("请求成功", res);
        this.getCarts()
      }).catch((err) => {
        console.log("请求失败", err);
      })
    console.log("取消预约", this.data.orderList)
  },
  // 跳转至详情页
  navigateDetail: function (e) {
    // wx.navigateTo({
    //   url:'../message_detail/message_detail?artype=' + e.currentTarget.dataset.arid
    // })
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