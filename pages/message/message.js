// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tproduct:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var page=this
    wx.request({
      url: 'http://192.168.101.106:60010/api/wqy/index/list',
      method: 'GET', //请求方式
      header: {
        'Content-Type': 'application/json',
        "userId": "1249888366282010626",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
      },
      data: {
      },
      success: function (res) {
        // console.log(res)
        // console.log(res.data.data)
        // if (res.data.code == 200) {
        page.setData({
          tproduct: res.data.data.data,
        });
        // }
        // console.log(page.data.tproduct); //已经成功将后端数据装入tproduct
      },
      fail: function () { },
      complete: function () {
        // complete 
      }
    })
    wx.setBackgroundColor({
      backgroundColor: '#f8f8f8', // 窗口的背景色为白色
    })
  },
  mesDes(e) {
    // console.log(e);
    // console.log(e.target.id);
    wx.navigateTo({
      url: `/pages/detail/mesDes/mesDes`
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