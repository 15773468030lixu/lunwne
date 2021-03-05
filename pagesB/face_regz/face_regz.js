// pages/face_regz/face_regz.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    wh: 0,
    position: "back",
    src: "",
  },

  reverse() {
    this.setData({
      position: this.data.position === "back" ? "front" : "back",
    });
  },
  takePhoto() {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: "high",
      success: (res) => {
        console.log(res.tempImagePath);
        this.setData({
          src: res.tempImagePath,
        });
      },
    });
  },
  choosePhoto() {
    let that = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ["original", "compressed"], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ["album", "camera"], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        if (res.errMsg === "chooseImage:ok" && res.tempFilePaths.length !== 0) {
          console.log(this);
          that.setData({
            src: res.tempFilePaths[0],
          });
          wx.setStorageSync("face", that.data.src);
          wx.switchTab({
            url: "/pages/message/message",
          });
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      },
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const sysinfo = wx.getSystemInfoSync();
    this.setData({
      wh: sysinfo.screenHeight,
    });
  },
});
