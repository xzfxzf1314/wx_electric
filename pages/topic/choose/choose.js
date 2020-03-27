// pages/topic/choose/choose.js
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
    listData: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    

    this.getChooseData();

    
  },

  getChooseData: function() {
    let that = this;
    util.request(api.ChooseUrl).then(function (res) {
      console.log(res)
      if (res.errno === 0) {
        that.setData({
          listData: res.data.items,
        });
        that.refresh();
      }
    });
  },

  refresh: function() {
    var levelId = wx.getStorageSync("levelId")
    var subjectId = wx.getStorageSync("subjectId")

    var listData = this.data.listData

    var currentIndex = -1;
    for (var index in listData) {
      if (levelId == listData[index].levelId && subjectId == listData[index].subjectId) {
        currentIndex = index
      }
    }

    if (currentIndex != -1) {
      this.data.listData[currentIndex].isSelect = true
      this.setData({
        listData: this.data.listData
      })
    }

    console.log(JSON.stringify(this.data.listData))
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
    
    // console.log("levelId: " + levelId + "  " + JSON.stringify(list))
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

  select: function(e) {
    var dataset = e.currentTarget.dataset
    // console.log(dataset)

    wx.setStorageSync('levelId', dataset.levelid)
    wx.setStorageSync('levelTitle', dataset.leveltitle)
    wx.setStorageSync('subjectId', dataset.subjectid)
    wx.setStorageSync('subjectTitle', dataset.subjecttitle)

    wx.navigateBack({
      
    })
  },


  // select(e) {
  //   var bean = e.currentTarget.dataset.levelId
  //   console.log(bean)
  // }

})