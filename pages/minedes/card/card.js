// pages/minedes/card/card.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // img:app.
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.request({
      url: "http://192.168.101.106:60010/api/wqy/member/parentId",
      method:'GET',
      data:{
        id: '16Q02dA97b08040eL2M47iEZ111X011w'
      },
      success(res){
      console.log(res)
      }
    })
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              this.setData({
                name: res.userInfo.nickName,
                avataUrl: res.userInfo.avatarUrl
              })
            },
            fail: (err) => {
              console.log(err)
            } 
            
          })
        }
      }
    })
      
    }
  
})