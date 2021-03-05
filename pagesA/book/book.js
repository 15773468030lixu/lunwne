var app = getApp()
var mydata = require('../../utils/data')
var util = require('../../utils/util')
var fileData = require('../../utils/data.js')
Page({
  data: {
    addrArray: util.replacePhone(mydata.userData().addrs, true),
    addrIndex: 0,
    date: '2020-01-01',
    time: '12:00',
    bookToastHidden: true,
    artype: 0,
    navSectionItems: fileData.getIndexNavSectionData(),
  },

  GoodInfo: {},
  goods: {},
  //获取详情数据
  async getGoodInfo(item_id) {
    const goodInfo = await request({
      url: "/utils/data",
      data: {
        item_id
      }
    });
    this.GoodInfo = goodInfo
  },

  onLoad: function (options) {
    console.log("bookID", options.aid)
    this.setData({
      artype: options.aid,
    })
    this.goods = wx.getStorageSync('bookTapbookInfo')
  },
  // 地址选择
  bindAddrPickerChange: function (e) {
    console.log('Addrpicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  },
  bindToastTap: function (e) {
    console.log('预定成功')

    this.setData({
      bookToastHidden: false
    })

    // const cart = wx.getStorageSync("cart") || []
    // console.log(typeof cart)
    //   for (let key in cart) {
    //     if (cart[key].id === this.data.artype) {
    //       console.log('8888888888888已經存在');
    //     } else {
    //       cart.push(this.goods)
    //       console.log('8888888888888不存在', cart);
    //       wx.setStorageSync('cart', cart)
    //     }
    //   }

    wx.switchTab({
      url: '/pages/message/message'
    })
  },
  hideToast: function () {
    this.setData({
      bookToastHidden: true
    })
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