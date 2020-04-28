// pages/buy/sure/sure.js
let app = getApp();
// const username = app.globalData.username
// const phonenumber = app.globalData.phonenumber
// const address = app.globalData.address
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add:'',
    phonenumber:'',
    username:'',

    shOrder: {
      "address": "1111",
      "aliOrderId": "121222",
      "company": "",
      "createTime": {},
      "id": 0,
      "memberId": "16Q02dA97b08040eL2M47iEZ111X011w",
      "number": "1",
      "orderId": "25ZZ2pF779T8llJ03b9wmBXFh15vNoOu",
      "payStatus": 0,
      "receiver": "",
      "sendStatus": 0,
      "tel": "",
      "totalPrice": 2099.3,
      "updateTime": {},
      "zcode": "",
    },

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    // console.log(this.data.k1)
    var add = app.globalData.address
    var phonenumber = app.globalData.phonenumber
    var username = app.globalData.username
    console.log('addddddd', add)
    this.setData({
      add,
      phonenumber,
      username
    })
    
    console.log('11111',add)
    // wx.request({
    //   url: 'http://192.168.101.106:60010/api/wqy/order',
    //   method:'POST',
    //   header: {
    //     'Content-Type': 'application/json',
    //     "userId": "1249888366282010626",
    //     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
    //   },
    //   data: {
    //     shOrder  : this.data.shOrder ,

    //   },
    // })

  },
})