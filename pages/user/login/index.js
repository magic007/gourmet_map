// pages/login/index.js
const common = require("../../../utils/common.js");

Page({
  formsubmit:function(event){
    wx.Bmob.User.logIn(event.detail.value.username,event.detail.value.password, {
      success: function(user) {
        // Do stuff after successful login.
        common.showTip("登录成功");
        wx.setStorageSync("objectId", user['objectId']);
        setTimeout(function () {
          wx.navigateTo({
            url: '/pages/index/index',
          })
        }, 2000);
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        console.log(error);
        common.showTip("登录失败", "loading");
      }
    })
  },
  onLoad:function(){
    console.log("load")
    // wx.navigateTo({
    //   url: '/pages/index/index',
    // })
  },
  getUserInfo:function(){
    let current = wx.Bmob.User.current();
    if(current){
      console.log(current);
    }else{
      common.showTip("请先登录","loading");
    }
  }
})