// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello SHK User',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    inputid:'',
    inputpasscode:'',
    inputpasscode2:''
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)        
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

bindIDInput:function(e){
    this.setData({
      inputid: e.detail.value
    })
    console.log(e.detail)
  },

  // getInputName:function(e){
  //   console.log(e.detail)
  //   // 获取到input的值
  //   let inputid = e.detail.value;
  //   // 获取到光标的位置
  //   let local = e.detail.cursor;
  // },

  bindPasscode:function(e){
    this.setData({
      passcode:e.detail.value
    })
    console.log(e.detail)
  }, 

  bindPasscode2:function(e){
    this.setData({
      passcode:e.detail.value
    })
    console.log(e.detail)
  }, 

  bindregistertap() {
    if(this.passcode2 === this.passcode){
    wx.showToast({
      title: 'Succeed!',
      icon: 'success',
      duration: 2000
    })
    //then navigate
  }else{
    wx.showToast({
      title: 'Fail!',
      icon: 'error',
      duration: 2000
    })
}
    
  },


  
  testfunction(){
    wx.setStorage({
    key: 'number',
    data: res.data.result.number
    })
  }

  


})


