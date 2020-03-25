// pages/topic/choose/choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
        levelId:1,
        subjectId:1,
        levelDesc: "测试1",
        subjectTitle: "主题1",
        isSelect: false
      },
      {
        levelId: 2,
        subjectId: 2,
        levelDesc: "测试2",
        subjectTitle: "主题2",
        isSelect: false
      },
      {
        levelId: 3,
        subjectId: 3,
        levelDesc: "测试3",
        subjectTitle: "主题3",
        isSelect: false
      },
      {
        levelId: 4,
        subjectId: 4,
        levelDesc: "测试4",
        subjectTitle: "主题4",
        isSelect: false
      },
      {
        levelId: 5,
        subjectId: 5,
        levelDesc: "测试5",
        subjectTitle: "主题5",
        isSelect: false
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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
    wx.setStorageSync('levelDesc', dataset.leveldesc)
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