//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    inputvalue: "",
    tproduct: '',
    tproductP: '',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    js: "",

    // tproduct: [{}]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    // console.log(app.globalData.tproduct);
    // 公告栏
    // wx.request({
    //   url: 'http://192.168.101.106:60010/api/wqy/index/scroll',
    //   header: {
    //     'Content-Type': 'application/json',
    //     "userId": "1249888366282010626",
    //     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
    //   },
    // })
    var page = this;
    wx.request({
      url: "http://192.168.101.106:60010/api/wqy/index/Goods", //url
      method: 'GET', //请求方式
      header: {
        'Content-Type': 'application/json',
        "userId": "1249888366282010626",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
      },
      data: {
        keyWords: ""
      },
      success: function(res) {
        // console.log(res)
        console.log(res.data.data)
        app.globalData.tproductP = res.data.data;
        // if (res.data.code == 200) {
        page.setData({
          tproductP: app.globalData.tproductP,

        });
        console.log(page.data.tproductP)
        console.log(page.data.tproduct)
        // }
        // console.log(page.data.tproduct); //已经成功将后端数据装入tproduct
      },
      fail: function() {},
      complete: function() {
        // complete 
        //  
      }
    })
  },

  detail(e) {
    // console.log(e);
    // console.log(e.target.id);
    wx.navigateTo({
      url: `/pages/category/index?id=${e.target.id}`,
      success: res => {
        // console.log(res)
      },
      fail: err => {

      }
    })
  },
  hot(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/detail/hot/hot`
    })
  },
  vip(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/detail/vip/vip`
    })
  },
  sign(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/detail/sign/sign`
    })
  },
  shoplimit(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/detail/shoplimit/shoplimit`
    })
  },
  vipP(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/detail/vipP/vipP`
    })
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  message(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/message/message`
    })
  },
  formSubmit(e) {
    var page = this;
    console.log(e.detail.value.inputvalue)
    var goods = e.detail.value.inputvalue
    wx.request({
      url: "http://192.168.101.106:60010/api/wqy/goods/list", //url
      method: 'GET', //请求方式
      header: {
        'Content-Type': 'application/json',
        "userId": "1249888366282010626",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
      },
      data: {
        goodsName: goods
      },
      success: function(res) {
        app.globalData.tproduct = res.data.data;
        page.setData({
          tproductP: app.globalData.tproduct,

        });
        console.log(app.globalData.tproduct)
      },
      fail: function() {},
      complete: function() {

      },

      fail: function() {},
      complete: function() {
      }
    })
  }

})