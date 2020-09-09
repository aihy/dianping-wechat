//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: []
  },
  formData: {
    comment: ""
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: 'https://wzhy.ink/api/comments',
      success (res) {
        that.setData( {
          list: res.data
        })
      }
    })
  },
  bindFormSubmit(e) {
    console.log(e.detail.value)
    wx.request({
      url: 'https://wzhy.ink/api/comment',
      method: "POST",
      data: e.detail.value,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success (res) {
        console.log(res)
        wx.redirectTo({
          url: 'index'
        })
      }
    })
  },
})
