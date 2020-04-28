// pages/category/index.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsImg: null,
    goodsName: null,
    goodsPrice: null,
    goodsNumber: null,
    goodId: null,
    safe: false,
    goodssafe: false, 
    newPrice:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    // console.log(app.globalData.userId)
    // console.log(e);
    let id = e.id;

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
        // console.log(res)
        // console.log(number.toFixed(res.data.data[0].goodsPrice * 0.7))
        this.setData({
          goodsImg: res.data.data[0].goodsImg,
          goodsName: res.data.data[0].goodsName,
          goodsPrice: res.data.data[0].goodsPrice,
          goodsNumber: res.data.data[0].goodsNumber,
          goodId: res.data.data[0].id,
          goodsPriceNew: res.data.data[0].goodsPriceNew,
          goodsIntegral: res.data.data[0].goodsIntegral,
          // newPrice: number.toFixed(res.data.data[0].goodsPrice * 0.7) 
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })

  },
  //发货地址
  goodssafe() {
    var dis = this.data.safe;
    this.setData({
      safe: !dis
    })
  },
  dis() {
    var dis = this.data.safe;
    this.setData({
      safe: dis
    })
  },
  //商品选择
  goodsnumber() {
    var dis = this.data.goodssafe;
    this.setData({
      goodssafe: !dis
    })
  },
  goodsdis() {
    var dis = this.data.goodssafe;
    this.setData({
      goodssafe: dis
    })
  },

  buy(e) {
    // console.log(e);
    let id = e.currentTarget.id;
    wx.navigateTo({
      url: `/pages/buy/imbuy/imbuy?id=${id}`,
      success: res => {
        // console.log(res)
      },
      fail: err => {

      }
    })
  },

})