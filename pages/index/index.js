//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    comment:"",
    gmtCreate:""
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://wzhy.ink/api/comments',
      success (res) {
        that.setData( {
          comment: res.data[0].comment,
          gmtCreate: res.data[0].gmtCreate
        })
      }
    })
  }
})
