// 快速录入js
var api = require('../lib/js/api.js')
Page({
  data:{
    shopsOld: [],
    shops: ['请选择','牛肉', '猪肉', '羊肉', '猪心'],
    shopsListOld: [],
    shopsList: ['请选择', '东照市场', '白云市场', '江高市场', '海珠市场'],
    shopsType: ['请选择', '自营', '工厂', '加工'],
    date: '2016-09-01',
    region: ['广东省', '广州市', '全部'],
    customItem: '全部',
    isexp: false,
    isShow:true,
    weight: '',
    price: '',
    storeName: '',
    areaList: [],
    inId: '',
    shopDetail: {}
  },
  // 改变商品
  bindPickerChangeShops: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail)
    this.setData({
      index1: e.detail.value
    })
  },
  // 改变批发市场
  bindPickerChangeShopsList: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  // 改变进货类型
  bindPickerChangeShopsType: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  onLoad:function(options){
    console.log(getCurrentPages());
    console.log(options);
    // 设置头部标题
    if(options.type=='add'){
      wx.setNavigationBarTitle({
        title: '数据录入',
      })
    } else if (options.type =='quickEntry'){
      this.setData({
        inId: options.inId
      })
      wx.setNavigationBarTitle({
        title: '快速录入',
      });
      
    }
    this.bindPickerChangeShops({detail:{value:0}});
    this.bindPickerChangeShopsList({ detail: { value: 0 } });
    this.bindPickerChangeShopsType({ detail: { value: 0 } });
    this.setData({
      date:this.getNowFormatData()
    })

    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
    });
    // 获取商品列表
    wx.request({
      url: api.api.baseUrl + '/meatVegCategoryController/getGoodList.do',
      method: 'POST',
      data: {
        vendorId: wx.getStorageSync('vendorId'),
        inShow: 1
      },
      header: {
        'content-type': 'application/json'
      },
      complete() {
        // wx.hideLoading();
      },
      success: res => {
        var goodListName =["请选择"];
        res.data.goodList.map((item, index)=>{
          goodListName.push(item.meatVegCategoryName)
        })
        this.setData({
          shops: goodListName,
          shopsOld: res.data.goodList
        })
        this.returnData();
      }
    })

    // 获取批发市场列表
    wx.request({
      url: api.api.baseUrl + '/terminalMarketController/getTerminalMarketList.do',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      complete() {
        // wx.hideLoading();
      },
      success: res => {
        var marketListName = ["请选择"];
        res.data.terminalMarketList.map((item, index) => {
          marketListName.push(item.terminalMarketName)
        })
        this.setData({
          shopsList: marketListName,
          shopsListOld: res.data.terminalMarketList
        })
      }
    })

    // 获取省市区信息
    wx.request({
      url: api.api.baseUrl + '/areaController/getAll.do',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      complete() {
        // wx.hideLoading();
      },
      success: res => {
        this.setData({
          areaList: res.data,
        })
      }
    })
  },
  returnData: function (){
    console.log(this.data.inId);
    if (this.data.inId) {
      // 获取快速录入回填详情信息
      wx.request({
        url: api.api.baseUrl + '/retailMarketInController/getDetailByInId.do',
        method: 'GET',
        data: {
          inId: this.data.inId
        },
        header: {
          'content-type': 'application/json'
        },
        complete() {
          // wx.hideLoading();
        },
        success: res => {
          var indexShops = this.data.shops.indexOf(res.data.retailMarketIn.inGoodName)
          var indexShopsList = this.data.shopsList.indexOf(res.data.retailMarketIn.terminalMarketName)
          // var indexShops = this.data.shops.indexOf('猪肉')
          // var indexShopsList = this.data.shopsList.indexOf('江南批发市场')
          this.bindPickerChangeShops({ detail: { value: indexShops } });
          this.bindPickerChangeShopsList({ detail: { value: indexShopsList } });
          this.setData({
            weight: res.data.retailMarketIn.weight,
            price: res.data.retailMarketIn.price,
            // weight: 10,
            // price: 20,
          })
        }
      })
    }
  },
  // 获取重量值
  getWeight(e){
    this.setData({
      weight: e.detail.value 
    })
  },
  // 获取单价
  getPrice(e){
    this.setData({
      price: e.detail.value
    })
  },
  // 获取批发商名称
  getStoreName(e) {
    this.setData({
      storeName: e.detail.value || 0
    })
  },
  // 获取批发号
  getStoreNumber(e) {
    this.setData({
      storeNumber: e.detail.value || 0
    })
  },
  // 获取产地名称
  getProduceAreaName(e) {
    this.setData({
      produceAreaName: e.detail.value || 0
    })
  },
  // 获取生产基地
  getProduceBase(e) {
    this.setData({
      produceBase: e.detail.value || 0
    })
  },
  // 获取车牌号码
  getTransportCarNum(e){
    this.setData({
      transportCarNum: e.detail.value || 0
    })
  },
  // 获取当前日期格式化
  getNowFormatData: function(){
    var date = new Date();
    var sep = '-';
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var strDate = date.getDate();
    if( month >= 1 && month <= 9 ){
      month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9){
       strDate = '0' + strDate;
    }
    var currentdate = year+ sep+ month+ sep+ strDate;
    return currentdate;
  },
  // 选择日期
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 选择省市区
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(e.detail.value.join(''))
    this.setData({
      region: e.detail.value
    })
  },
  // 提交
  sendBtn:function(){
    console.log(this.data.index1)
    if (this.data.index1<=0){
      wx.showToast({
        title: '请选择商品',
        icon: 'none',
      })
    } else if (this.data.index2<=0){
      wx.showToast({
        title: '请选择批发市场',
        icon: 'none',
      })
    } else if (!this.data.weight){
      wx.showToast({
        title: '请输入重量',
        icon: 'none',
      })
    } else if (!this.data.price) {
      wx.showToast({
        title: '请输入单价',
        icon: 'none',
      })
    } else{
      var param = {
        vendorId: wx.getStorageSync("vendorId"),
        inType: 1,//0为常用，1为全部
        inGoodId: this.data.shopsOld[(this.data.index1) - 1].meatVegCategoryId,
        inGoodName: this.data.shopsOld[(this.data.index1) - 1].meatVegCategoryName,
        terminalMarketId: this.data.shopsListOld[(this.data.index2) - 1].terminalMarketId,
        terminalMarketName: this.data.shopsListOld[(this.data.index2) - 1].terminalMarketName,
        weight: this.data.weight,
        price: this.data.price,
        inMarketDateTime: this.data.date,
        terminalMarketOperatorName: this.data.storeName,
        identifyId: '',
        inWholesaleId: this.data.storeNumber || '',
        inGoodAreaCodeZw: this.data.region.join(''),
        produceAreaName: this.data.produceAreaName || '',
        produceBase: this.data.produceBase || '',
        transportCarNum: this.data.transportCarNum || ''
      }
      wx.request({
        url: api.api.baseUrl + '/retailMarketInController/save.do',
        method: 'POST',
        data: {
          ...param
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        complete() {
          // wx.hideLoading();
        },
        success: res => {
          if (res.data.state) {
            wx.navigateTo({
              url: '../shopsList/shopsList',
            })
          } else {
            wx.showToast({
              title: '提交失败！',
              icon: 'none',
            })
          }
        }
      })
    }
    // wx.navigateBack()
  },
  // 切换设置更多信息
  toggleArr:function(){
    this.setData({
      isexp: !(this.data.isexp),
      isShow: !(this.data.isShow)
    })
  }
})