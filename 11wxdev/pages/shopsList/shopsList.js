//shopsList.js
//获取应用实例
const app = getApp()

var api = require('../lib/js/api.js')
Page({
  data: {
    stockList:[
      {
        in_good_name: "猪肉",
        price: 40,
        in_id: '4401060100107943'
      }, {
        in_good_name: "猪肉",
        price: 40,
        in_id: '4401060100107943'
      }, {
        in_good_name: "猪肉",
        price: 40,
        in_id: '4401060100107943'
      }
    ]
  },
  //点击快速录入按钮
  quickEntry: function(e) {
    console.log(e.currentTarget.dataset.inid)
    var inId = e.currentTarget.dataset.inid;
    wx.navigateTo({
      url: '../quickEntry/quickEntry?type=quickEntry&inId='+ inId
    })
  },
  // 点击新增进货单
  goAddStock:function(){
    wx.navigateTo({
      url: '../quickEntry/quickEntry?type=add'
    })
  },
  onLoad: function () {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
    });
    wx.request({
      url: api.api.baseUrl+'/retailMarketInController/getDetailList.do',
      method: 'GET',
      data: { vendorId: wx.getStorageSync('vendorId')},
      header: {
        'content-type' : 'application/json'
      },
      complete(){
        // wx.hideLoading();
      },
      success: res => {
        this.setData({
          stockList: res.data.retailMarketInList
        })
      }
    });
  },
  // 点击跳转溯源信息
  goInfo(){
    wx.navigateTo({
      url: '../info/info',
    })
  }
})
