// pages/posts/posts.js
var postData = require('../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //数据绑定

    this.setData({
      post_key: postData.postList
    })
    // this.DataList = posts_content
    // console.log(this.DataList)
  },

  onPostTap(event){
    var postId = event.currentTarget.dataset.postid
    // console.log(postId)
    wx.navigateTo({
      url: './post-detail/post-detail?id=' + postId,
    })
  }
})