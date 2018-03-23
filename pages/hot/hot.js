// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度
    imageHeight : wx.getSystemInfoSync().windowHeight,//图片高度 

    imgUrls: [
      { id: 0, name: '第一张图片', url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'},
      { id: 1, name: '第二张图片', url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'},
      { id: 2, name: '第三张图片', url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'}
    ],
    //是否采用衔接滑动  
    circular: true,  
    current: 0 ,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    gridsdetails:[
      { id: 0, name: '活动1', icon:'../../images/icon_tabbar.png'},
      { id: 1, name: '活动2', icon: '../../images/icon_tabbar.png' },
      { id: 2, name: '活动3', icon: '../../images/icon_tabbar.png' },
      { id: 3, name: '活动4', icon: '../../images/icon_tabbar.png' },
      { id: 4, name: '活动5', icon: '../../images/icon_tabbar.png' },
      { id: 5, name: '活动6', icon: '../../images/icon_tabbar.png' },
      { id: 6, name: '活动7', icon: '../../images/icon_tabbar.png' },
      { id: 7, name: '活动8', icon: '../../images/icon_tabbar.png' },
      { id: 8, name: '活动9', icon: '../../images/icon_tabbar.png' },

    ]

  },

  swiperclick : function (e) {
    var name = this.data.imgUrls[e.target.dataset.id].name;
    console.log(name),
    wx.showModal({
      title: '提示',
      content: '你点击了'+name,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },


  gridclick: function (e) {
    var name = this.data.imgUrls[e.target.dataset.id].name;
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
  
  }
})