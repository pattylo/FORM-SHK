// app.js
App({
  onLaunch() {
    // can save stuff to local
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // login for user
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    openID_global:'',
    userID_global:''
  }
})
