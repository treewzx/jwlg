// miniprogram/pages/lego/member_manager/member_manager.js
var handletime = 0;
var totalUsedTime = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    phoneInputHint: "请输入会员手机号码",
    nameInputHint: "请输入会员姓名",
    setInter: '',
    or: '或者'

  },
  // 获取输入手机号
  phoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getConsumerInfo: function() {
    wx.navigateTo({
      url: '../member_info/member_info?phone=' + this.data.phone,
    })
  },


  startSetInter: function() {
    var that = this;
    var i = 0;
    var usedDate = 0;

    this.data.setInter = setInterval(
      function() {
        //函数
        if (wx.getStorageSync("startTime") > 0) {
          var date = new Date();
          console.log("starttime:", wx.getStorageSync("startTime"));
          that.handletime = new Date().getTime() - wx.getStorageSync("startTime");
        } else {
          console.log("starttime----:", new Date().getTime());
          wx.setStorageSync("startTime", new Date().getTime());
        }
        console.log("saved handleTime:", wx.getStorageSync("handleTime"))
        that.totalUsedTime = new Date(that.handletime + wx.getStorageSync("handleTime"));
        that.setData({
          or: that.totalUsedTime.getMinutes() + "分" + that.totalUsedTime.getSeconds() + "秒",
        })

      }, 1000);
  },

  //暂停计时器
  pauseSetInter: function() {
    clearInterval(this.data.setInter)
    this.handletime = 0;
    wx.setStorageSync("handleTime", this.totalUsedTime.getTime());
    wx.setStorageSync("startTime", 0);
  },

  //清除计时器 即清除setInter
  endSetInter: function() {
    clearInterval(this.data.setInter)
    this.handletime = 0;
    wx.setStorageSync("startTime", 0);
    wx.setStorageSync("handleTime", 0);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.handletime = 0;
    var date = new Date(wx.getStorageSync("handleTime"));
    this.setData({
      or: date.getMinutes() + "分" + date.getSeconds() + "秒"
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