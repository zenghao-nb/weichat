// pages/mine/mine.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    avataUrl: '',
    show: false,
    openid: null,
    userType: "",
    code: "",
    userId:"",
    token:"",
    userType:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.getSetting({
      success: (res) => {
        console.log(res)
        console.log(res.authSetting['scope.userInfo'])
        if (res.authSetting['scope.userInfo']) {
          this.setData({
            show: false
          })
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
        } else {
          //显示一个button;
          this.setData({
            show: true
          })
        }
      }
    })
  },
  //点击登录
  getUser(e) {
    var page = this
    wx.login({
      success(res) {
        console.log(res)
        app.globalData.code = res.code,
          console.log('111111111111',res.code)
          page.setData({
            code: app.globalData.code
          })

        if (res.code) {
          //发起网络请求
          wx.request({
            url: "http://192.168.101.106:60010/login/vx", //url
            data: {
              openid: res.code
            },
            method: "post",
            success: function(res) {
              console.log(res);
              console.log(res.data.data.userId);
              app.globalData.userId = res.data.data.userId;
              app.globalData.token=res.data.data.token;
              app.globalData.userType = res.data.data.userType;
              page.setData({
                // userType: res.data.data.userType,
                userInfo: e.detail.userInfo,
                avataUrl: e.detail.userInfo.avatarUrl,
                name: e.detail.userInfo.nickName,
                show: false,
                userId: app.globalData.userId,
                token:app.globalData.token,
                userType: app.globalData.userType,
              })
              console.log(app.globalData.userId)
              console.log(app.globalData.token)
              console.log(app.globalData.userType)
            }
          
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // var page = this;
    // console.log(e);
    // var Id = e.detail.cloudID;
    // console.log(Id)
    // wx.request({
    //   url: "http://192.168.101.106:60010/login/vx", //url
    //   data: {
    //     openid: Id
    //   },
    //   method: "post",
    //   success: function(res) {
    //     console.log(res);
    //     // console.log(res.data.data.userType)
    //     console.log(e.detail.userInfo.avatarUrl)
    //     page.setData({
    //       // userType: res.data.data.userType,
    //       userInfo: e.detail.userInfo,
    //       avataUrl: e.detail.userInfo.avatarUrl,
    //       name: e.detail.userInfo.nickName,
    //       show: false
    //     })
    //   },
    // })

  },
  //优惠券
  coupon(e) {
    wx.navigateTo({
      url: '/pages/minedes/coupon/coupon',
    })
  },
  //积分
  integral(e) {
    wx.navigateTo({
      url: '/pages/detail/sign/sign',
    })
  },
  money(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/minedes/money/money`
    })
  },
  //钱包
  wallet(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/minedes/wallet/wallet`
    })
  },
  //更多
  more(e) {
    wx.navigateTo({
      url: `/pages/minedes/more/more`
    })
  },
  addres(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/minedes/addres/addres`
    })
  },
  take(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/minedes/take/take`
    })
  },
  eva(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/minedes/eva/eva`
    })
  },
  team(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/minedes/team/team`
    })
  },
  card(e) {
    console.log(e)
    // wx.request({
    //   url: "http://192.168.101.106:60010/api/wqy/member/parentId/?id=${id}",
    //   method: 'GET',
    //   data: {
    //     id: '16Q02dA97b08040eL2M47iEZ111X011w'
    //   },
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    wx.navigateTo({
      url: `/pages/minedes/card/card`
    })
  },
  vip(e) {
    // console.log(e)
    // console.log(this.data.userType);
    if (this.data.userType == 0) {
      wx.navigateTo({
        url: `/pages/detail/vip/vip`
      })
    }
    if (this.data.userType == 1) {
      wx.navigateTo({
        url: `/pages/detail/vipnine/vipnine`
      })
    }
    if (this.data.userType == 2) {
      wx.navigateTo({
        url: `/pages/detail/vipsix/vipsix`
      })
    }

  },
  card(e) {
    wx.navigateTo({
      url: `/pages/minedes/card/card`
    })
  },


})