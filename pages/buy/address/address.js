// pages/buy/address/address.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add: '',
    phonenumber:'',
    username: '',
  },
 
  addAddress(e){
    wx.navigateTo({
      url: `/pages/buy/recive/recive`
    })
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.address)
    var add = app.globalData.address
    var phonenumber = app.globalData.phonenumber
    var username = app.globalData.username
    console.log('addddddd',add)
    console.log('phonenumber', phonenumber)
    console.log('username', username)
    this.setData({
      add,
      phonenumber,
      username
    })
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