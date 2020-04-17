// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAdd: false
  },
  //添加收藏
  addFavorites: function () {
    let listid = this.data.list
    console.log("123:"+listid)
    var key = listid.id
    var value = listid
    try {
      wx.setStorage({
        key: key,
        data: value,
         success: res => {
           console.log(res.data)
         }

        })
      console.log("success")
    } catch (e) { 
      console.log("false")
    }
    var news = wx.getStorageSync(listid.id)
    console.log("缓存区："+news)
    this.setData({
      isAdd: true
    })
  },
  //取消收藏
  cancelFavorites: function () {
    let list = this.data.list
    wx.removeStorageSync(list.id)
    this.setData({
      isAdd: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    var message = {}
    //检查当前新闻是否在收藏夹中
    var news = wx.getStorageSync(id)
    console.log("news："+news)
    //已存在
    if (news != '') {
      console.log("缓存取到数据")
      this.setData({
        isAdd: true,
        list: news
      })
    }
    //不存在
    else {
      console.log("后台取到数据")
      wx.request({
        url: 'https://www.zxy17728021074.cn:8000//api/test_api/',
        header: {
          'content-type': 'application/json'
        },
        success: res => {
          for (var i = 0; i < res.data.length; i++) {
            if (id == res.data[i].id) {
              message = res.data[i];
              break;
            }
          }

          this.setData({
            list: message,
            isAdd: false,
          })
        }
      })
    
    }

     
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})