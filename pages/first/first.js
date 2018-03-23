//input.js
Page({

  data: {
    focus: false,
    inputValue: ''
  },

  bindfocus: function () {
    console.log('点击bindfocus');
    wx.navigateTo({
      url: '../search/search'
    })
  }



})