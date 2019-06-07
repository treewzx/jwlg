// miniprogram/pages/lego/modify_secphone/modify_secphone.js
var netUtil = require("../../../utils/network.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    userId: ""
  },
  // 获取输入手机号
  phoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  changePhone: function() {
    var params = {
      mobile: this.data.phone,
      id: this.data.userId
    };
    netUtil.postRequest("user/queryUsersById", params, this.onStart, this.onSuccess, this.onFailed);
  },


  onStart: function () { //onStart回调
    wx.showLoading({
      title: '正在加载',
    })
  },
  onSuccess: function (res) { //onSuccess回调
    wx.hideLoading();
    wx.navigateBack({
    })
   
   
  },
  onFailed: function (msg) { //onFailed回调
    wx.hideLoading();
    if (msg) {
      wx.showToast({
        title: msg,
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      userId: options.userId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})