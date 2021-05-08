// pages/index4/es.js
const app = getApp()
let res = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cnt:app.globalData.cnt,
    res:0,
    bal:app.globalData.cnt,
    unit2:'万'
  },
  cnt1Input:function(e)
  {
    app.globalData.cnt1 = parseFloat(e.detail.value) 
    if(isNaN(app.globalData.cnt1)){
      app.globalData.cnt1 = 0
    }
    let res = app.globalData.cnt1 + app.globalData.cnt2 + app.globalData.cnt3
    let bal = app.globalData.cnt * (1 - res / 100)
    bal = bal.toFixed(2)
    if(bal < 10000){
      this.setData({
        res:res,
        bal:bal,
        unit2:'万'
      });
    }else{
      this.setData({
        res:res,
        bal:bal/10000,
        unit2:'亿'
      });
    }
  },
  cnt2Input:function(e)
  {
    app.globalData.cnt2 = parseFloat(e.detail.value) 
    if(isNaN(app.globalData.cnt2)){
      app.globalData.cnt2 = 0
    }
    let res = app.globalData.cnt1 + app.globalData.cnt2 + app.globalData.cnt3
    let bal = app.globalData.cnt * (1 - res / 100)
    bal = bal.toFixed(2)
    if(bal < 10000){
      this.setData({
        res:res,
        bal:bal,
        unit2:'万'
      });
    }else{
      this.setData({
        res:res,
        bal:bal/10000,
        unit2:'亿'
      });
    }
  },
  cnt3Input:function(e)
  {
    app.globalData.cnt3 = parseFloat(e.detail.value) 
    if(isNaN(app.globalData.cnt3)){
      app.globalData.cnt3 = 0
    }
    let res = app.globalData.cnt1 + app.globalData.cnt2 + app.globalData.cnt3
    let bal = app.globalData.cnt * (1 - res / 100)
    bal = bal.toFixed(2)
    if(bal < 10000){
      this.setData({
        res:res,
        bal:bal,
        unit2:'万'
      });
    }else{
      this.setData({
        res:res,
        bal:bal/10000,
        unit2:'亿'
      });
    }
  },
  check:function(){
    if(this.data.res == 100 && app.globalData.cnt1 >= 0 && app.globalData.cnt2 >= 0 && app.globalData.cnt3 >= 0){
      if(app.globalData.cnt < 1400){
        app.globalData.res = app.globalData.cnt * 12.37688 - 10726.625
      }else{
        app.globalData.res = app.globalData.cnt * -0.03347 + 6647.86308
      }
      app.globalData.res  = app.globalData.res * (1-(Math.abs(app.globalData.cnt1) + Math.abs(app.globalData.cnt2 - 100) + Math.abs(app.globalData.cnt3)) / 300)
      app.globalData.cnt1 = 0
      app.globalData.cnt2 = 0
      app.globalData.cnt3 = 0
      console.log(app.globalData.res)
      wx.navigateTo({
        url: '/pages/index5/index5',
      })
    }else{
      console.log(this.data.res)
      wx.showToast({
        title: '请正确输入投资比例',
        icon: 'none',
        duration: 1500
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.cnt >= 10000){
      this.setData({
        cnt:app.globalData.cnt / 10000,
        bal:app.globalData.cnt/10000,
        unit:'亿',
        unit2:'亿',
        res:0
      })
    }else{
      this.setData({
        cnt:app.globalData.cnt,
        bal:app.globalData.cnt,
        unit:'万',
        unit2:'万',
        res:0
      });
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