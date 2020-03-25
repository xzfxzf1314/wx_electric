// pages/topic/choose/choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
      levelId: 1,
      subjectId: 1,
      sheetId: 1,
      chapterTitle: "第一章 章节测试1",
      doneSum: 10,
      sum: 80,
    },
    {
      levelId: 2,
      subjectId: 2,
      sheetId: 2,
      chapterTitle: "第二章 章节测试2",
      doneSum: 10,
      sum: 60,
    },
    {
      levelId: 3,
      subjectId: 3,
      sheetId: 3,
      chapterTitle: "第三章 章节测试3",
      doneSum: 60,
      sum: 100,
    },
    {
      levelId: 4,
      subjectId: 4,
      sheetId: 4,
      chapterTitle: "第四章 章节测试4",
      doneSum: 80,
      sum: 80,
    },
    {
      levelId: 5,
      subjectId: 5,
      sheetId: 5,
      chapterTitle: "第五章 章节测试5",
      doneSum: 30,
      sum: 80,
    }],

    subjectId:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sid = options.subjectId
    console.log("sid: " + sid + " options: " + JSON.stringify(options))
    this.setData ({
      subjectId: sid
    })
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

    // console.log("levelId: " + levelId + "  " + JSON.stringify(list))
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

  select: function (e) {
    var dataset = e.currentTarget.dataset
    console.log(dataset)

    wx.setStorageSync('levelId', dataset.levelid)
    wx.setStorageSync('levelDesc', dataset.leveldesc)
    wx.setStorageSync('subjectId', dataset.subjectid)
    wx.setStorageSync('subjectTitle', dataset.subjecttitle)

    wx.navigateBack({

    })
  },


  goToSelect(e) {
    wx.navigateTo({
      url: "/pages/topic/select/select",
    })
  }

})