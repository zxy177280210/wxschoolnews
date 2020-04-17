//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    userInfo: null,
    menu: [
      { id: '../usr/usr', src: "images/1215892.png", title: "完善信息", height: 0, },
      { id: '../order/order', src: "images/1215856.png", title: "我的圈子", height: 0, },
      { id: '../order/order', src: "images/1215860.png", title: "我的报名", height: 0 },
      { id: '../US/US', src: "images/1215861.png", title: "了解我们", height: 0 },
     // { id: '../about/about', src: "images/1215874.png", title: "关于", height: 0, otherInfo: "版本:1.1.1" }
    ],
 
  },
  goto: function (e) {
    wx.navigateTo({ url:e.currentTarget.id });
    
  },
  getUserInfo: function (e) {
    if (e.detail.userInfo) {
      const { userInfo } = e.detail;
      wx.setStorageSync("userinfo", userInfo)
      wx.switchTab({
        url: '../index/index'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }

  },

  onShow(){
    const userInfo = wx.getStorageSync("userinfo");
    this.setData({userInfo})
  }
})
