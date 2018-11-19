// pages/info.js
import drawQrcode from '../../utils/weapp.qrcode.esm.js';
var utils = require('../../utils/util.js')
var api = require('../lib/js/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    api: '',
    isexp: true,
    isexp2: true,
    isShow: false,
    isShow2: false,
    shopList:[],
    info:{
      retailMarket: '',
      booth: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      api: api.api.baseUrl
    })
    drawQrcode({
      width: 200,
      height: 200,
      canvasId: 'myQrcode',
      text: 'http://market.dlyun.com:1887/page/index.html?boothId=1889'
    });
    // 获取菜市场和列表信息接口
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
    });
    wx.request({
      url: api.api.baseUrl + '/boothController/g_boothInfo',
      method: 'GET',
      data: {
        boothId: 1889
      },
      header: {
        'content-type': 'application/json'
      },
      complete() {
        // wx.hideLoading();
      },
      success: res => {
        res.data.vendor.phone = res.data.vendor.phone.substr(0, 3) + "****" + res.data.vendor.phone.substr(7);
        for (var i = 0; i < res.data.retailMarketInList.length; i++){
          res.data.retailMarketInList[i].in_market_datetime = utils.formatDate(res.data.retailMarketInList[i].in_market_datetime)
        }

        this.setData({
          shopList: res.data.retailMarketInList,
          info:res.data
        })
      }
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

  },

  // 设置店铺二维码是否折叠
  toggleArr: function () {
    this.setData({
      isexp: !(this.data.isexp),
      isShow: !(this.data.isShow)
    })
  },
  // 设置批发市场是否折叠
  toggleArr2: function () {
    this.setData({
      isexp2: !(this.data.isexp2),
      isShow2: !(this.data.isShow2)
    })
  }
})