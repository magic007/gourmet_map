// pages/register/index.js

var common = require("../../../utils/common.js");
var that;
Page({

  onLoad: function () {
    that = this;
  },

  formSubmit: function (event) {
    // var username = event.detail.value.username;
    var email = event.detail.value.email;
    var phone = event.detail.value.phone;
    var password = event.detail.value.password;
    var password1 = event.detail.value.password1;

    if (password != "" && password1 != "" && phone != "") {
      if (password != password1) {
        common.showTip("密码不一致", "loading", 1500);
        return false;
      }
      let params = {
        username: phone,
        password: password
      }
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.Bmob.User.requestOpenId(res.code, { //获取userData(根据个人的需要，如果需要获取userData的需要在应用密钥中配置你的微信小程序AppId和AppSecret，且在你的项目中要填写你的appId)
              success: function (userData) {
                wx.getUserInfo({
                  success: function (result) {
                    var userInfo = result.userInfo
                    var nickName = phone

                    var user = new wx.Bmob.User(); //开始注册用户
                    user.set("username", phone);
                    user.set("openid", userData.openid);
                    user.set("password", password); //因为密码必须提供，但是微信直接登录小程序是没有密码的，所以用openId作为唯一密码
                    user.set("userData", userData);
                    user.signUp(null, {
                      success: function (res) {
                        console.log("注册成功!");

                        common.showTip('注册成功，页面跳转中。', '提示', function () {
                          setTimeout(function () {
                            wx.navigateTo({
                              url: '../../index/index'
                            })
                          }, 3000);
                        });
                      },
                      error: function (userData, error) {
                        
                        // return
                        console.log(userData, error)
                        common.showModal('注册失败' + error.message);
                      }
                    });
                  }
                })
              },
              error: function (error) {
                // Show the error message somewhere
                console.log("Error: " + error.code + " " + error.message);
              }
            });

          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    } else {
      common.showTip("请填写完整", "loading", 1500);
    }
  }

})