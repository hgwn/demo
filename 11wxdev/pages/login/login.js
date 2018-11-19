// pages/login/login.js
var api = require('../lib/js/api.js')
var md5 = require('../../utils/md5.min.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usePhone:'',
    usePSW: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  // 获取用户手机号
  usePhone: function(e){
    this.setData({
      usePhone: e.detail.value
    })
  },
  // 获取用户密码
  usePSW: function (e) {
    this.setData({
      usePSW: e.detail.value
    })
  },

  // 点击登录
  loginBtn: function(){
    if (!this.data.usePhone){
      wx.showToast({
        title: '手机号码不能为空!',
        icon: 'none',
      })
    } else if (this.data.usePhone.length != 11){
      wx.showToast({
        title: '手机号码必须为11位数字!',
        icon: 'none',
      })
    } else if (!this.data.usePSW){
      wx.showToast({
        title: '密码不能为空!',
        icon: 'none',
      })
    }else{
      wx.request({
        url: api.api.baseUrl + '/vendorLoginController/getVendorList.do',
        method: 'POST',
        data: {
          phone: this.data.usePhone,
          password: md5.hex_md5(this.data.usePSW)
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        complete() {
          // wx.hideLoading();
        },
        success: res => {
          if (res.data.status) {
            wx.setStorageSync('vendorId', res.data.vendorList[0].vendorId)
            wx.navigateTo({
              url: '../shopsList/shopsList',
            })
          } else {
            wx.showToast({
              title: '手机号或密码有误!',
              icon: 'none',
            })

            wx.navigateTo({
              url: '../shopsList/shopsList',
            })
          }
        }
      })
    }
  }
})