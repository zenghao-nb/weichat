// component/vip/vip.js
var util = require('../../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jifen: 0,
    flag: true,
    days: 0,
    color: "#68b752"
  },
  sign() {
    var id = app.globalData.userId
    var flag = this.data.flag
    if (flag) {
      this.setData({
        jifen: this.data.jifen + 100,
        flag: false,
        days: this.data.days + 1
      })
    }
    wx.request({
      url: "http://192.168.101.106:60010/api/wqy/userSign/sign" + id, //url
      method: 'GET', //请求方式
      header: {
        'Content-Type': 'application/json',
        "userId": "1249888366282010626",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
      },

      success: function(res) {
        console.log(11)
      },
      fail: function(error) {
        console.log(error.data)
      },
      complete: function() {}
    })
    console.log(util.formatTime(new Date()))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var page = this;
    var time = util.formatTime(new Date());
    var id = app.globalData.userId
    console.log(id)
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
        console.log(res.data)
        // if (res.data.code == 200) {
        page.setData({
          tproduct: res.data.data
        });
        // }
        console.log(page.data.tproduct); //已经成功将后端数据装入tproduct
      },
      fail: function() {},
      complete: function() {
        // complete 
      }
    })
    wx.request({
      url: "http://192.168.101.106:60010/api/wqy/member/" + id, //url
      method: 'GET', //请求方式
      header: {
        'Content-Type': 'application/json',
        "userId": "1249888366282010626",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
      },

      success: function(res) {
        page.setData({
          jifen: res.data.data.integral
        })
      },
      fail: function(error) {
        console.log(error.data)
      },
      complete: function() {}
    })


  },
  rule(e) {
    wx.navigateTo({
      url: '/pages/detail/rule/rule',
    })
  },
  date() {


  },

})