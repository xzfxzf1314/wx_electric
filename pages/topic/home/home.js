// pages/topic/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    levelDesc:'',
    subjectTitle: '',

    list: [
      {
        sheetTitle: '第一篇 篇章111',
        levelId: 1,
        sheetId: 1,
        subjectId: 1,
        doneSum: 10,
        sum: 80,
      },
      {
        sheetTitle: '第二篇 篇章222篇章222篇章222篇章222篇章222篇章222篇章222篇章222篇章222篇章222篇章222篇章222真机调试一大堆问题，到底行不行啊啊，哎，好烦呀',
        levelId: 2,
        sheetId: 2,
        subjectId: 2,
        doneSum: 10,
        sum: 20,
      },
      {
        sheetTitle: '第三篇 篇章333',
        levelId: 3,
        sheetId: 3,
        subjectId: 3,
        doneSum: 30,
        sum: 60,
      },
      {
        sheetTitle: '第四篇 篇章444',
        levelId: 4,
        sheetId: 4,
        subjectId: 4,
        doneSum: 80,
        sum: 120,
      }
      
    ]

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
    var levelDesc1 = wx.getStorageSync("levelDesc")
    var subjectTitle1 = wx.getStorageSync("subjectTitle")
    this.setData(
      {
        levelDesc: levelDesc1,
        subjectTitle: subjectTitle1
      }
    )

    var levelId = wx.getStorageSync("levelId")
    var subjectId = wx.getStorageSync("subjectId")
    var listData = this.data.list
    for (var index in listData) {
        
    }

    // console.log(levelDesc)
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
  },

  selectChapter(e) {

    var dataset = e.currentTarget.dataset

    console.log(JSON.stringify(dataset))

    var subjectid = dataset.subjectid

    wx.navigateTo({
      url: "/pages/topic/chapter/chapter?subjectId=" + subjectid,
    })
  }

})