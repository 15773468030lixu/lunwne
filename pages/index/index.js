//index.js
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  // 页面初始数据
  data: {
    colors: ['red', 'orange', 'yellow', 'green', 'purple'],
    addrIndex: 0,
    bookdate: '2020-01-01',
    booktime: '12:00',
    leavemessage:'',
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
    // wx.cloud
    //   .database()
    //   .collection("goods")
    //   .get().then((res) => {
    //     console.log("请求成功", res.data[0].goods);
    //     this.setData({
    //       goodsList: res.data[0].goods
    //     })
    //     wx.setStorageSync('goods', {
    //       time: Date.now(),
    //       data: res.data[0].goods
    //     })

    //   }).catch((err) => {
    //     console.log("请求失败", err);
    //   })
    wx.cloud
    .database()
    .collection("wares")
    .get().then((res) => {
      console.log("请求成功hhhh", res.data);
      this.setData({
        goodsList: res.data
      })
      wx.setStorageSync('goods', {
        time: Date.now(),
        data: res.data
      })

    }).catch((err) => {
      console.log("请求失败", err);
    })
  },
  addCarts(book){
    let that = this
      wx.cloud.database()
      .collection("carts").add({data:{
        _id:book._id,
        subject:book.subject,
        coverpath:book.coverpath,
        price:book.price,
        message:book.message,
        userinfo:wx.getStorageSync('userinfo'),
        face:wx.getStorageSync('face'),
        bookdate:that.data.bookdate,
        booktime:that.data.booktime,
        leavemessage:that.data.leavemessage || ''
      }})
      .then((res)=>{
        console.log("请求成功", res);
        this.setData({
          bookToastHidden: false
        })
        console.log('预定成功')
  
      }).catch((err)=>{
        console.log("请求失败", err);
        wx.showToast({
          title: '已预定',
          icon: 'error',
          duration: 2000
        })      
      })
  },
  // 跳转至详情页
  navigateDetail: function (e) {
    console.log('跳转至详情页', e)
    wx.navigateTo({
      // url: '/pagesA/message_detail/message_detail?aid=' + e.currentTarget.dataset.aid
      url: '/pagesA/detail/detail?aid=' + e.currentTarget.dataset.aid
    })
  },
  // book
  hideToast: function () {
    this.setData({
      bookToastHidden: true
    })
  },
  loadMore: function (e) {
        console.log('加载更多')
        var curid = this.data.curIndex
    
        if (this.data.navSectionItems[curid].length === 0) return
        
        var that = this
        that.data.navSectionItems[curid] = that.data.navSectionItems[curid].concat(that.data.navSectionItems[curid])
        that.setData({
          list: that.data.navSectionItems,
        }) 
      },
  bookTap: function (e) {
    // 如果bookid一样就不许报错
    const {
      book
    } = e.currentTarget.dataset
    this.setData({
      cid: book.id
    })
    console.log('跳转至预约页1', book)
    let face = wx.getStorageSync('face')
    if(!face){
      wx.showToast({
        title: '跳转到人脸采集',
        icon: 'error',
        duration: 2000
      })
      wx.navigateTo({
        // url: '/pagesA/message_detail/message_detail?aid=' + e.currentTarget.dataset.aid
        url: '/pagesB/face_regz/face_regz'
      })
    }else{
      this.addCarts(book)    
    }
    console.log('人脸数据',typeof wx.getStorageSync('face'),'3')
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
      bookdate: e.detail.value
    })
  },
  // 时间选择
  bindTimeChange: function (e) {
    console.log('time picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      booktime: e.detail.value
    })
  },
  bindblurMes:function (e) {
    console.log('留言框发送选择改变，携带值为', e.detail.value)
    this.setData({
      leavemessage: e.detail.value
    })
  },

})