// pages/buy/imbuy/imbuy.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsSn: null,
    attrValue: null,
    goodsAttrList: null,
    // goodsNumber: 0,
    goodsAttrIds: null,
    goodsId: null,
    id: '',
    userId: null,
    number: '',
    md: null,
    goodsPrice: '',
    goodsImg: '',
    shGoods: '',
    payStatu: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    // console.log(e);
    let id = e.id;
    var page = this;
    wx.request({
      url: 'http://192.168.101.106:60010/api/wqy/goods/list',
      header: {
        'Content-Type': 'application/json',
        "userId": "1249888366282010626",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
      },
      data: {
        id: id,
      },
      success: (res) => {
        // console.log(res);
        // console.log(res.data.data[0].goodsAttrList[0].goodsId)
        page.setData({
          attrValue: res.data.data[0].goodsAttrList[0].attrValue,
          goodsImg: res.data.data[0].goodsImg,
          goodsAttrList: res.data.data[0].goodsAttrList,
          goodsAttrIds: res.data.data[0].goodsAttrList[0].id,
          goodsId: res.data.data[0].goodsAttrList[0].goodsId,
          number: 0,
          goodsPrice: res.data.data[0].goodsAttrList[0].goodsPrice
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },

  //减少
  move(e) {
    this.setData({
      number: this.data.number - 1,
    })
    if (this.data.number <= 1) {
      this.setData({
        number: 0
      })
    }
    console.log(this.data.number)
  },
  add(e) {
    this.setData({
      number: this.data.number + 1
    })
  },
  goodskind(e) {
    console.log(e);
    this.setData({
      md: e.currentTarget.id
    })

  },
  sure(e) {
    console.log(e)
    this.setData({
      number: this.data.number
    })
    console.log('number111111111', this.data.number)
    app.globalData.number = this.data.number;
    console.log(app.globalData.number)

    wx.request({
      url: 'http://192.168.101.106:60010/api/wqy/order',
      header: {
        'Content-Type': 'application/json',
        "userId": "1249888366282010626",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
      },
      method: "post",
      data: {
        goodsId: this.data.goodsId,
        userId: app.globalData.userId,
        goodsNumber: app.globalData.number,
        goodsAttrIds: this.data.md
      },
      success: (res) => {
        console.log(res);
        var shGoods = res.data.data
        var memberId = res.data.data.memberId
        var orderId = res.data.data.orderId
        var payStatus = res.data.data.payStatus

        app.globalData.shGoods = shGoods
        app.globalData.memberId = memberId
        app.globalData.orderId = orderId
        app.globalData.payStatus = payStatus
        console.log("orderId:" + orderId)
        console.log("memberId:" + memberId)
        console.log("shGoods:" + shGoods)
        console.log("payStatus:" + payStatus)
        wx.navigateTo({
          url: `/pages/buy/sure/sure`,
        });
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  onShareAppMessage: function () {

  }
})