// app.js
let Bmob = require('./Bmob.min.js')
App({
  globalData: {//全局变量
    city:"wh",
    cnt1:0,
    cnt2:0,
    cnt3:0,
    cnt4:0,
    openid:"",
    url:"",
    grade:"",
    name:"",
    cnt:0,
    res:0,
    Bmob:Bmob
  },
  onLaunch(){
    wx.login({
      //获取code
      success: function (res) {
        var code = res.code; //返回code
        var appId = 'wx01c9d75fe87e68d8';
        var secret = '4541f1f47d42da6eb9de06f6b01dfc05';
        console.log(code);
        wx.request({
          // url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          // url: 'https://www.iloveyxr.top:9092/wechat?code=' + code,
          url: 'https://www.iloveyxr.top:9092/wechat?code=' + code,
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function (res) { 
            console.log(res.data);
            res.data = res.data.substring(52,80);
            console.log(res.data);
            var openid = res.data //返回openid
            var app = getApp()
            app.globalData.openid = openid
            console.log('openid为' + openid);
          }
        })
      }
    })
    },
    
  //   let that = this
  //   let user=wx.getStorageSync('user') || {};  
  //   let userInfo=wx.getStorageSync('userInfo') || {}; 
  //   if((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600))&&(!userInfo.nickName)){ 
  //      wx.login({  
  //      success: function(res){ 
  //          if(res.code) {
  //              wx.getUserProfile({
  //                  success: function (res) {
  //                      var objz={};
  //                      objz.avatarUrl=res.userInfo.avatarUrl;
  //                      objz.nickName=res.userInfo.nickName;
  //                      //console.log(objz);
  //                      wx.setStorageSync('userInfo', objz);//存储userInfo
  //                  }
  //              });
  //              var d=that.globalData;//这里存储了appid、secret、token串  
  //              var l='https://api.weixin.qq.com/sns/jscode2session?appid='+d.appid+'&secret='+d.secret+'&js_code='+res.code+'&grant_type=authorization_code';  
  //              wx.request({  
  //                  url: l,  
  //                  data: {},  
  //                  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
  //                  // header: {}, // 设置请求的 header  
  //                  success: function(res){ 
  //                      var obj={};
  //                      obj.openid=res.data.openid;  
  //                      obj.expires_in=Date.now()+res.data.expires_in;  
  //                      //console.log(obj);
  //                      wx.setStorageSync('user', obj);//存储openid  
  //                      console.log(obj)
  //                  }  
  //              });
  //          }else {
  //              console.log('获取用户登录态失败！' + res.errMsg)
  //          }          
  //      }  
  //    }); 
  //  } 

})
