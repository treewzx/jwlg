// miniprogram/pages/lego/end_play/end_play.js
var netUtil = require("../../../utils/network.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['请选择','1', '2', '3', '4','5'],
    jifenindex: 0,
    deskId: "",
    deskInfo: "",
    usedTime: 0,
    quan: 0,
    jifen: 0,
    detailList: [],
  },

  guanchaChange: function(e) {
    this.setData({
      jifenindex: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      deskId: options.deskId,
    })
    var params = {
      id: options.deskId
    }
    netUtil.postRequest("xiaofei/beforehandEndGame", params, this.onStart, this.onSuccess, this.onFailed);

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

  },
  onStart: function() { //onStart回调
  },

  onSuccess: function(res) { //onSuccess回调
    this.setData({
      phone: res.endGame.username,
      consumerName: res.endGame.name,
      consumerType: res.endGame.type,
      startTime: res.endGame.start_time,
      beforUsedTime: res.endGame.sumLength,
      unUsedTime: res.endGame.surplusLength,
      usedTime: res.endGame.xiaofeiTime,
      countUsedTime: res.endGame.xiaofeiTime,
      detailList: res.detailList,
    })
  },
  onFailed: function(msg) { //onFailed回调
    if (msg.match("token")) {
      wx.setStorageSync("token", "");
      wx.setStorageSync("userId", "");
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      wx.showToast({
        title: msg,
      })
    }
  },
})