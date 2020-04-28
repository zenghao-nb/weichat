// component/vip/vip.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    code: '',
    desc1: '购买即日起99VIP会员可享受广泛化工化肥',
    desc2: '',
    desc3: '购买即日起699VIP会员可享受12桶水',
    price2: '699',
    price: ''
  },
  getOpenId: function (code) {
    var that = this;
    wx.request({
      url: "https://api.weixin.qq.com/sns/jscode2session?appid=小程序appid&secret=小程序应用密钥&js_code=" + code + "&grant_type=authorization_code",
      data: {},
      method: 'GET',
      success: function (res) {
        that.generateOrder(res.data.openid)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  /**生成商户订单 */
  generateOrder: function (openid) {
    var that = this
    //统一支付
    wx.request({
      url: '后台路径',
      method: 'GET',
      data: {
        gfee: 'this.data.price',
        gname: '商品名称',
        openId: openid
        // （商品价钱和商品名称根据自身需要是否传值, openid为必传）
      },

      success: function (res) {
        var pay = res.data
        //发起支付
        var timeStamp = pay[0].timeStamp;
        var packages = pay[0].package;
        var paySign = pay[0].paySign;
        var nonceStr = pay[0].nonceStr;
        var param = { "timeStamp": timeStamp, "package": packages, "paySign": paySign, "signType": "MD5", "nonceStr": nonceStr };
        that.pay(param)
      },
    })
  },
  buyVip() {
    console.log(this.data.price)
    wx.requestPayment({
      timeStamp: 'param.timeStamp',
      nonceStr: 'param.nonceStr',
      package: 'param.package',
      signType: 'MD5',
      paySign: 'param.paySign',
      success(res) {
        wx.navigateBack({
          success: function (res) {
            wx.showToast({
              title: '支付成功',
              icon: 'success',
              duration: 2000

            })

          },
          fail: function () {
            // fail


          },
          complete: function () {
            // complete

          }
        })

      },
      fail: function (res) {
        // fail
      },
      fail(res) { }
    })
  },
  vipnine() {
    console.log("fghj")
    this.setData({
      desc2: '',
      desc1: '购买即日起99VIP会员可享受广泛化工化肥',
      price: '99'
    })
  },
  vipsix() {
    console.log("fghj")
    this.setData({
      desc1: '',
      desc2: '购买即日起699VIP会员可享受12桶水',
      price: '699'
    })
    //  this.data.desc1 = null;
    //   this.data.desc1 ='购买即日起699VIP会员可享受12桶水'
  },
  buyvip2(e) {
    console.log(e)
    let price2 = e.target.dataset.price;
    console.log(price2)
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) { },
      fail(res) { }
    })
  },
  detail(e) {
    console.log(e);
    // console.log(e.target.id);
    wx.navigateTo({
      url: `/pages/category/index?id=${e.target.id}`,
      success: res => {
        // console.log(res)
      },
      fail: err => {

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const a = app.globalData.userType
    var that = this
    that.setData({
    })
    var page = this;
    wx.request({
      url: "http://192.168.101.106:60010/api/wqy/index/Goods", //url
      method: 'GET', //请求方式
      header: {
        'Content-Type': 'application/json',
        "userId": "1249888366282010626",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY2ODIzMzY4OSIsImV4cCI6MTU4Njg0ODQyNiwiaWF0IjoxNTg2ODQ0ODI2fQ.8IG2O3UkLSw4-0ihw_m8lf8oyDg2nYQIyVnSQA8toas"
      },
      data: {
        keyWords: ""
      },
      success: function (res) {
        console.log(res.data)
        // if (res.data.code == 200) {
        page.setData({
          tproduct: res.data.data
        });
        var code = app.globalData.code
        this.setData({
          code
        })
        // }
        console.log(page.data.tproduct); //已经成功将后端数据装入tproduct
      },
      fail: function () { },
      complete: function () {
        // complete 

      }
    })
  },

})