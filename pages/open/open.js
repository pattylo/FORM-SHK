// home.js
const app = getApp()
var util = require('../../utils/util');

Page({
  data: {
    motto: '早晨! SHK 師傅師姐',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    getuserID:'',
    open_time:''
  },

  onLoad: function() {
    // if (wx.canIUse('hideHomeButton')) {
    //     wx.hideHomeButton()
    //   }
    var that = this;
    wx.getStorage({
      key: 'ID',
      success: function(res) {
        console.log(res.data)        
        that.setData({
          getuserID:res.data
        })
      }
    });

    var time_temp = util.formatTime(new Date());
    that.setData({
      open_time: time_temp
    });
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindScanTap: function() {
    var that = this;
    wx.scanCode({
        success: function(res) {
          console.log(res);
          wx.showToast({
            title: 'Success',
            icon: 'success',
            duration: 2000
          });
          wx.navigateTo({
            url: '../home/home',
          })
        },
        fail: (res) =>{
          console.log(res);
          wx.showToast({
            title: 'Failed',
            icon:'error',
            duration: 2000
          })          
        }
    })          
  },

})


