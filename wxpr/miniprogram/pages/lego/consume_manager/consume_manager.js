// miniprogram/pages/lego/consume_manager/consume_manager.js
var netUtil = require("../../../utils/network.js");
var dateUtil = require("../../../utils/util.js");
var timer;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deskList: [],
    toyId: "--",
    startTime: "--",
    customerInfo: "",
    usedTime: "--",
    leftTime: "--",


  },

  startPlay: function(e) {
    var deskId = parseInt(e.currentTarget.id);
    wx.navigateTo({
      url: '../start_play/start_play?deskId=' + deskId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  
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
    var that = this;
    netUtil.postRequest("xiaofei/deskList", {}, this.onStart, this.onSuccess, this.onFailed);
    timer = setInterval(function() {
      netUtil.postRequest("xiaofei/deskList", {}, that.onStart, that.onSuccess, that.onFailed);
    }, 20000);
  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    clearInterval(timer);
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
      deskList: res.deskList,
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
});
function CountTime() {
  timer = setTimeout(function () {
    console.log("----Countdown----");
    Countdown();
  }, 1000);
};