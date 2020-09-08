//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: []
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://wzhy.ink/api/comments',
      success (res) {
        that.setData( {
          list: res.data
        })
      }
    })
  }
})
