//app.js
App({

  onLoad() {
    wx.getSetting({
      success: res => {
        // console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // console.log(res)
              // console.log(res.userInfo);
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    tproduct: '',
    userInfo: null,
    userId: "16Q02dA97b08040eL2M47iEZ111X011w",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
  },

})