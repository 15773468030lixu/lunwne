//index.js
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  // 页面初始数据
  data: {
    colors: ['red', 'orange', 'yellow', 'green', 'purple'],
    addrIndex: 0,
    date: '2020-01-01',
    time: '12:00',
    // banner 初始化
    banner_url: fileData.getBannerData(),
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    // nav 初始化
    navTopItems: fileData.getIndexNavData(),
    navSectionItems: fileData.getIndexNavSectionData(),
    curNavId: 1,
    curIndex: 0,
    bookToastHidden: true,
    // list初始化
    goodsList: [],
    books: [],
    cid:1
  },

  onLoad: function () {
    const goods = wx.getStorageSync('goods')
    if (!goods) {
      this.getGoods()
    }
    this.setData({
      goodsList: goods.data
    })
    console.log('goods.data', goods.data)
  },
  //标签切换
  switchTab: function (e) {
    let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
    this.curIndex = parseInt(e.currentTarget.dataset.index)
    console.log(e)
    var that = this
    this.setData({
      curNavId: id,
      curIndex: index,
    })
  },
  getGoods() {
    wx.cloud
      .database()
      .collection("goods")
      .get().then((res) => {
        console.log("请求成功", res.data[0].goods);
        this.setData({
          goodsList: res.data[0].goods
        })
        wx.setStorageSync('goods', {
          time: Date.now(),
          data: res.data[0].goods
        })

      }).catch((err) => {
        console.log("请求失败", err);
      })
  },
  // 跳转至详情页
  navigateDetail: function (e) {
    console.log('跳转至详情页', e)
    wx.navigateTo({
      url: '../detail/detail?aid=' + e.currentTarget.dataset.aid
    })
  },
  // book
  hideToast: function () {
    this.setData({
      bookToastHidden: true
    })
  },
  bookTap: function (e) {
    console.log('预定成功')

    this.setData({
      bookToastHidden: false
    })
    const {
      book
    } = e.currentTarget.dataset
    this.setData({
      cid: book.id
    })
    console.log('跳转至预约页', book)
    if (book !== null) {
      // wx.setStorageSync('bookInfo', book)
      // var newarr = [book]; //对象转为数组
      // var newarr = JSON.stringify(newarr); //数组转对象
         
      wx.setStorageSync('bookTapbookInfo', book)
      // wx.navigateTo({
      //   url: '../book/book?aid=' + this.data.cid
      // })
    }
  },
  // 日期选择
  bindDateChange: function (e) {
    console.log('date picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 时间选择
  bindTimeChange: function (e) {
    console.log('time picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  }

})