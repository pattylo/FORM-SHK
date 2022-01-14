// index.js
const app = getApp()

Page({
  data: {
    motto: '早晨 SHK 師傅師姐',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    inputid:'',
    inputpasscode:'',
    inputpasscode2:''
  },
  // function
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

  bindPasscode:function(e){
    this.setData({
      inputpasscode:e.detail.value
    })
    console.log(e.detail)
  }, 

  bindPasscode2:function(e){
    this.setData({
      inputpasscode2:e.detail.value
    })
    console.log(e.detail)
  }, 

  bindregistertap() {
    if(this.data.inputpasscode.length == 0 || this.data.inputpasscode2.length ==0){
      wx.showToast({
        title: '唔該輸入密碼!',
        icon: 'error',
        duration: 2000
      })   
    }else{
      if(this.data.inputpasscode2 == this.data.inputpasscode){
        wx.showToast({
          title: '成功!',
          icon: 'success',
          duration: 2000
        })
        wx.redirectTo({
          url: '../home/home'
        })
        wx.setStorage({
          key:"ID",
          data:this.data.inputid
        })
        wx.setStorage({
          key:"passcode",
          data:this.data.inputpasscode
        })
        }else{
        wx.showToast({
          title: '密碼唔同!',
          icon: 'error',
          duration: 2000
        })    
      }    
    }

    wx.setStorage({
      key

    })

      
  },

  doLogin: function(e) {
    var that = this;
    if(that.data.username.length ==0 || that.data.password.length ==0){//校验非空
      wx.showToast({  //弹框提示
        icon: 'none',
        title: '用户名或密码不能为空！',
        duration: 2000,
      })
    }else {
      wx.request({  //向后台发送请求
        url: '你的请求地址',
        method: "get",
        header: { 'content-type': 'application/json' },
        data: {
          username: this.data.username, //this.data.username 代表你data中username的值
          password: this.data.password,
        },
        success: function (res) { //res为后台返回给前端的数据
          console.log("res.data"+res.data.code),
          that.setData({
            userId: res.data.data,  //保存userId
            code: res.data.code,    
          })
          console.log(res.data);
          if(that.data.code == 200){ //如果返回的code为200，代表用户名密码验证成功
            wx.showToast({
              title: '登录成功',
            })
            wx.setStorageSync('userId', res.data.data); //保存userId至本地，以便随时调用
            console.log(res.data.data);
            
              wx.redirectTo({
                url: '../index/index',  //跳转至首页
              })
          }else{
            wx.showToast({
              icon: 'none',
              title: '用户名或密码错误',
            })
          }
 
        }
      })
    }
  }

})


