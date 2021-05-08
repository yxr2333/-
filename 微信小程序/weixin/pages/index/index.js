// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad(){

  },
  go: function(){
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        app.globalData.name = res.userInfo.nickName
        app.globalData.url = res.userInfo.avatarUrl
        wx.navigateTo({
          url: '/pages/index2/index2',
        })
      }
    })
  }
})
