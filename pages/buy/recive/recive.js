// pages/buy/recive/recive.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
username:'',
phonenumber:'',
address:''
  },
  
  //获取用户的输入姓名
  usernameInput:function(e){
this.setData({
  username:e.detail.value
})
  },
  phonenumberInput:function(e){
    this.setData({
      phonenumber:e.detail.value
    })
      },
      addressInput:function(e){
        this.setData({
          address:e.detail.value
        })
          },
  finish(e){
   console.log(this.data.username)
   console.log(this.data.phonenumber)
   console.log(this.data.address)
let username = this.data.username;
let phonenumber = this.data.phonenumber;
let address = this.data.address;
app.globalData.username = username;
app.globalData.phonenumber = phonenumber;
app.globalData.address = address;
console.log(app.globalData)
wx.navigateTo({
  url: '/pages/buy/sure/sure',
  
})
// wx.request({
//   url: 'http://192.168.101.106:60010/api/wqy/order',
//   method:'GET',
//   data:{
   
//   },
// })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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