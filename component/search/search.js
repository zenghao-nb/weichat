// component/integral/integral.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputvalue:"",
    tproduct:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  message(e) {
    // console.log(e);
    wx.navigateTo({
      url: `/pages/message/message`
    })
  },
  // bindedit: function (event) {
  //   console.log(event)
  //   this.setData({
  //     moneyNum: this.money(event.detail.value)  //money匹配金额输入规则，返回输入值
  //   });
  // },
  inputTyping(e){
    var page=this;
    this.setData({
      inputvalue:e.detail.value
    })
    // console.log(this.data.inputvalue)
    wx.request({
      url: "http://192.168.101.106:60010/api/wqy/goods/list", //url
      method: 'GET', //请求方式
      header: {
        'Content-Type': 'application/json',
        "userId": "1249888366282010626",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
      },
      data: {
        goodsName: this.data.inputvalue
      },
      success: function (res) {
        // console.log(res)
        // console.log(res.data.data)
        app.globalData.tproduct = res.data.data;
        page.setData({
          tproduct: res.data.data
        });
      
        // console.log(app.globalData.tproduct);
        // app.globalData.tproduct = this.data.tproduct; return;
        // if (res.data.code == 200) {
        // page.setData({
        //   tproduct: res.data.data,
        // });
        // app.globalData.aaa = this.data.tproduct
        // console.log(aaa)
        // // }
        // // console.log(page.data.tproduct); //已经成功将后端数据装入tproduct
        // console.log(app.globalData.tproduct)
      },
      
      fail: function () { },
      complete: function () {
        // complete 
      }
    })
  },  
 kais(){
   console.log(this.data.inputvalue)
 },
  onReady: function () {

  },

})