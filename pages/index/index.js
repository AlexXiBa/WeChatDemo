//index.js
//获取应用实例
const app = getApp()

//wxgrid.js插件使用
var WXGrid = require('../../utils/wxgrid.js')
var wxgrid = new WXGrid;
wxgrid.init(2, 4);
var img = "http://pic.qqtn.com/up/2016-9/20169281936395677.png";
var classifies = [
  { name: "活动1", img },
  { name: "活动2", img },
  { name: "活动3", img },
  { name: "活动4", img },
  { name: "活动5", img },
  { name: "活动6", img },
  { name: "活动7", img },
  { name: "活动8", img }]
wxgrid.data.add("classifies", classifies);


Page({
  data: {
    imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度
    imageHeight: wx.getSystemInfoSync().windowHeight,//图片高度 
    wxgrid,
    imgUrls: [
      { id: 0, name: '第一张图片', url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
      { id: 1, name: '第二张图片', url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg' },
      { id: 2, name: '第三张图片', url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg' }
    ],
    //是否采用衔接滑动  
    circular: true,
    current: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
//图片点击


//跳转到搜索
  search: function () {
    console.log('点击search');
    wx.navigateTo({
      url: '../search/search'
    })
  },

//定位打开地图
  position: function () {
    console.log('点击position');
    wx.navigateTo({
      url: '../map/map'
    })
  },

  swiperclick: function (e) {
    var name = this.data.imgUrls[e.target.dataset.id].name;
    console.log(name),
      wx.showModal({
        title: '提示',
        content: '你点击了' + name,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  suo: function (e) {
    wx.navigateTo({
      url: '../hot/hot',
    })
  },  
})
