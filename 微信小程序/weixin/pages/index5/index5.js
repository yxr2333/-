// pages/index5/index5.js
let app = getApp()
let Bmob = app.globalData.Bmob
let city1 = ""
let rank_users = []
let users = []
let rank_cnt = 0
let len = 0
Bmob.initialize("2539d1f240f79cfa", "ctycty");
Bmob.debug(true);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:"",
    res:"",
    rank:"",
    cnt:"",
    slf:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.grade = app.globalData.res / app.globalData.cnt
    app.globalData.res = app.globalData.res.toFixed(2)
    let slf = app.globalData.res * 10000 / (177*177*30)
    slf = slf.toFixed(2)
    this.setData({
      slf:slf
    })
    this.getUser()
  },
  test(){
    if(app.globalData.city == 'wh'){
      city1 = '武汉'
    }
    if(app.globalData.city == 'yc'){
      city1 = '宜昌'
    }
    if(app.globalData.city == 'jz'){
      city1 = '荆州'
    }
    if(app.globalData.city == 'es'){
      city1 = '恩施'
    }

    for(i =  0 ; i < len; i++){
      console.log(users[i].openid)
      if(users[i].openid == app.globalData.openid){
        const query = Bmob.Query('rank');
        query.set('id', users[i].ojid) //需要修改的objectId
        query.set('grade', Math.max(users[i].grade,app.globalData.grade))
        query.save().then(res => {
          
        }).catch(err => {
        console.log(err)
        })
        break
      }
    }
    if(i == len){
      this.addUser(app.globalData.name,app.globalData.openid,app.globalData.url,app.globalData.grade,app.globalData.city,app.globalData.res,app.globalData.cnt)
    }
    console.log('排序前')
    console.log(users)
    users.sort( function(a,b){
      return parseFloat(b.grade) -  parseFloat(a.grade)
    })
    let i = 0
    console.log('排序后')
    console.log(users)
    for(i = 0; i < len; i++){
      console.log(app.globalData.grade + '****' + users[i].grade)
      if(users[i].grade < app.globalData.grade){
        break
      }
    }

    let flag = 0
    let cn_rank = 0
    for(let i =  0 ; i < 10 && i < len; i++){
      if(flag == 1 && (i >= 9)){
        break
      }
      if(!flag && users[i].grade < parseFloat(app.globalData.grade)){
        console.log('准备添加')
        flag = 1
        rank_users.push({
          grade:parseFloat(app.globalData.grade),
          res:parseFloat(app.globalData.grade),
          cnt:app.globalData.cnt,
          openid:app.globalData.openid,
          name:app.globalData.name,
          ojid:app.globalData.obid,
        })
        cn_rank++
      }
      console.log('准备判断')
      if(users[i].grade >= parseFloat(app.globalData.grade) && users[i].openid == app.globalData.openid){
        flag = 2
      }
      if(flag == 1 && users[i].openid == app.globalData.openid){
        console.log('判重')
        flag = 2
        continue
      }
      rank_users.push(users[i])
      cn_rank++
    }
    console.log(flag)
    if(!flag && cn_rank < 10){
      console.log('后续添加')
      rank_users.push({
        grade:parseFloat(app.globalData.grade),
                      res:parseFloat(app.globalData.grade),
                      cnt:app.globalData.cnt,
                      openid:app.globalData.openid,
                      name:app.globalData.name,
                      ojid:app.globalData.obid,
      })
      cn_rank++
    }
    console.log(cn_rank)
    for(let i = 0; i < cn_rank; i++){
      rank_users[i].cnt = parseFloat(rank_users[i].cnt).toFixed(2)
      rank_users[i].res = parseFloat(rank_users[i].res).toFixed(2)
    }
    console.log(rank_users)
    this.setData({
      res:app.globalData.res,
      rank:i+1,
      cnt:app.globalData.cnt,
      city:city1,
      rank_users:rank_users,
      avatarUrl:app.globalData.url
    })
  },
  return: function(){
    app.globalData.cnt = 0
    wx.reLaunch({
      url: '/pages/index2/index2',
    })
  },
  getUser(){
        users =  []
        const query = Bmob.Query("rank");
        query.find().then(res => {
            var html = '';
            for (let i = 0; i < res.length; i++) {//循环json对象，拼接tr,td的html
                 if(res[i].city == app.globalData.city){
                  users.push({
                    grade:parseFloat(res[i].grade),
                    res:parseFloat(res[i].grade),
                    cnt:res[i].cnt,
                    openid:res[i].openid,
                    name:res[i].name,
                    ojid:res[i].objectId,
                  })
                  len += 1
                 }  
            }
            console.log('len:'+len)
            this.test()
            len = 0
            city1 = ""
            rank_users = []
            users = []
            rank_cnt = 0
        }).catch(err => {
            console.log(err)
        });
    },
    addUser(name,openid,url,grade,city,res,cnt){
      Bmob.initialize("2539d1f240f79cfa", "ctycty");
      Bmob.debug(true);
      if (name != "") {
          const query = Bmob.Query('rank');
          query.set("name", name)
          query.set("openid",openid),
          query.set("grade",grade),
          query.set("url",url),
          query.set("city",city),
          query.set("res",parseFloat(res)),
          query.set("cnt",cnt),
          query.save().then(res => {
            
              // alert("参与成功")
          }).catch(err => {
              // alert("你已经参与了")
              console.log(err)
          })
      } else {
          // alert("姓名或学号不能为空")
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
    app.globalData.cnt1 = 0
    app.globalData.cnt2 = 0
    app.globalData.cnt3 = 0
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