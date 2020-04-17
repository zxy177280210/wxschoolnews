//index.js
//获取应用实例
const app = getApp()


Page({
  goToDetail: function (e) {
    //获取携带data-id的数据
    let id = e.currentTarget.dataset.id
    console.log(id)
    //console.log(e)
    //携带新闻ID进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })

  },
  onLoad: function (options) {
    wx.request({
      url: 'https://www.zxy17728021074.cn:8000//api/test_api/',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log(res.data)
        this.setData({
          //第一个data为固定用法
          list: res.data

        })
      }
      })},
  data: {
    imgUrls: [
      {
        link:'',
        url: '../../images/会员步骤.png'
      },
      {
        link: '',
        url: '../../images/会员福利.png'
      },
      {
        link: '',
        url: '../../images/人才招聘.png'
      },
      
    ],
    contentitems:[
      {
        link: '',
        url: '../../images/会员步骤.png',
        text:'会员步骤'
      },
      {
        link: '',
        url: '../../images/会员福利.png',
        text:'会员福利'
      },
      {
        link: '',
        url: '../../images/人才招聘.png',
        text:'人才招聘'
      },
      {
        link: '',
        url: '../../images/星秀计划.png',
        text:'星秀计划'
      },
    ],
    listitem: [
      {
        link: '',
        url: '../../images/会员步骤.png',
        text: '会员步骤',
        pic:'../../images/头像.jpg',
        content:'升级成为会员只需三步，身份证，照片，点击确定上传，即可成为青铜会员，赶紧来吧！'
      },
      {
        link: '',
        url: '../../images/会员福利.png',
        text: '会员福利',
        pic: '../../images/头像.jpg',
        content: '升级成为会员后，有大量精美礼品等你来拿哦！！'
      },
      {
        link: '',
        url: '../../images/人才招聘.png',
        text: '人才招聘',
        pic: '../../images/头像.jpg',
        content: '好位置只留给有准备的人，千里马遇伯乐！'
      },
      {
        link: '',
        url: '../../images/星秀计划.png',
        text: '星秀计划',
        pic: '../../images/头像.jpg',
        content: '星秀计划开始了，赶紧前来报名！'
      },
    ],
  }

})