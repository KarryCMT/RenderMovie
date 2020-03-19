// pages/welcome/welcome.js
Page({
  onTap(){
    // wx.navigateTo({
    //   url: '../posts/posts',
    // })
    wx:wx.redirectTo({
      url: '../posts/posts',
    })
    // console.log('onTap');
  },
  //事件冒泡 catchtap可以阻止冒泡
  // onContainerTap:function(){
  //   console.log('Container Tap')
  // },
  // onSubTap:function(){
  //   console.log('Sub Tap')
  // },
  // onLoad(){
  
  // },
  // onUnload:function(){

  // }
})