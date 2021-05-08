// pages/index2/index2.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {name: 'wh', value: '湖北省武汉市', checked: 'true'},
      {name: 'yc', value: '湖北省宜昌市'},
      {name: 'jz', value: '湖北省荆州市'},
      {name: 'es', value: '湖北省恩施市'},
    ]
  },
  radioChange: function(e) {
    app.globalData.city = e.detail.value
  },
  next: function(){
    wx.navigateTo({
      url: '/pages/index3/index3',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  onShow: function () {
    app.globalData.city = 'wh'
  },
})