// miniprogram/pages/lego/personal_message/personal_message.js
var netUtil = require("../../../utils/network.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  logout: function(options) {
    var params = {}
    netUtil.postRequest("info/checkToken", params, this.onStart, this.onSuccess, this.onFailed);

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
  onStart: function () { //onStart回调
  },
  onSuccess: function (res) { //onSuccess回调
    wx.setStorageSync("token", "");
    wx.setStorageSync("userId", "");
    wx.redirectTo({
      url: '../login/login',
    })
  },

  onFailed: function (msg) { //onFailed回调
      wx.setStorageSync("token", "");
      wx.setStorageSync("userId", "");
      wx.redirectTo({
        url: '../login/login',
      })
  },
})