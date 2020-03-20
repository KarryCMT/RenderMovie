// pages/posts/post-detail/post-detail.js
var postData = require('../../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId= options.id;
    var postList = postData.postList[postId];
    this.setData({
      postList
    })
    console.log(postList)
  },

})