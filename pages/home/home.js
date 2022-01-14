// home.js
const app = getApp()

Page({
  data: {
    motto: 'Hello SHK User',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false

  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindScanTap() {
    wx.scanCode({
        success (res) {
          console.log(res)
        }
      })
    
  },

})


