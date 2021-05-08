// pages/index3/index3.js
let app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    unit:'万'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onload: function(){
    /*wx.showToast({
      title: '预备金额不少于1000万不多于10亿',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: false,
      success: (result)=>{
        console.log("success");
      },
      fail: ()=>{
        console.log("err");
      },
    });*/
  },
  onShow: function (options) {
    
  },

  cntInput:function(e)
  {
    app.globalData.cnt = parseFloat(e.detail.value)
  },

  check: function(){
    if(!isNaN(app.globalData.cnt) && app.globalData.cnt >= 1000 && app.globalData.cnt <= 100000){
      console.log(app.globalData.city)
      wx.navigateTo({
        url: '/pages/index4/'+app.globalData.city,
      })
    }else{
      wx.showToast({
        title: '请输入1000万到10亿的金额',
        icon: 'none',
        duration: 1500
      })
    }
  },
})