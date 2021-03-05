var app = getApp()
Page( {
  data: {
    artype: 0
  },
  onLoad: function (options) {
    this.setData({
      artype:options.artype
    })
  },
  getLocation:function(){
    wx.navigateTo({
      url:'../location/location'
    })
  },
  bookTap:function(){
    wx.navigateTo({
      url:'/pagesA/book/book?artype=' + this.data.artype
    })
  }
})