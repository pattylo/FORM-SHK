// index.js
const app = getApp()

Page({
  data: {
    motto: '您好! SHK 師傅師姐',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    inputid:'',
    inputpasscode:'',
    inputpasscode2:'',
    getid:false
  },
  // function

  onLoad() {

    if (wx.canIUse('hideHomeButton')) {
      wx.hideHomeButton()
    }
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    
    wx.getStorage({
      key: 'ID',
      success: function(res) {
        console.log(res.data)        
        wx.redirectTo({
          url: '../home/home',
        })
      },
      fail: function(res){
        wx.redirectTo({
          url: '../regis/regis',
        })
      }
    })    
  },

})


