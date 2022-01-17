// home.js
const app = getApp()

Page({
  data: {
    motto: '早晨! SHK 師傅師姐',
    getuserID:'',
    qrcodemsg:'',
  },

  onLoad() {
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
            url: '../open/open',
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


