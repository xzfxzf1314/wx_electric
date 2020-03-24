// pages/topic/home/home.js
const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
const user = require('../../../utils/user.js');

//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    levelTitle: "",
    subjectTitle: "",
    subjectId: 0,
    list: [],
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
    let that = this
    let levelTitle1 = wx.getStorageSync("levelTitle")
    let subjectTitle1 = wx.getStorageSync("subjectTitle")
    var levelId = wx.getStorageSync("levelId")
    var subjectId1 = wx.getStorageSync("subjectId")
    this.setData({
        levelTitle: levelTitle1,
        subjectTitle: subjectTitle1,
        subjectId: subjectId1,
      }
    )

    
    
    this.getSheetData()
    
  },

  getSheetData: function () {
    let that = this;
    util.request(api.SheetListUrl, {
      subjectId: that.data.subjectId
    }).then(function (res) {
      console.log(res)
      if (res.errno === 0) {
        that.setData({
          list: res.data.items,
        });
      }
    });
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


  goToChoose(e) {
    wx.navigateTo({
      url: "/pages/topic/choose/choose",
    })
  }

})