// home.js
const app = getApp()

Page({
  data: {
    motto: '早晨! SHK 師傅師姐',
    getuserID:'',
    qrcodemsg:'',
  },

  onLoad() {
    if (wx.canIUse('hideHomeButton')) {
        wx.hideHomeButton()
      }
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
          wx.setStorage({
            key:"floor_open_id",
            //data:this.data.inputid //start from here to validate
            data:res.result
          })
          wx.setStorage({
            key:"floor_open_bool",
            //data:this.data.inputid //start from here to validate
            data:true
          })
          wx.redirectTo({
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

  developertap(){
    wx.request({
      url: '110.42.218.135/testforLuo', 
      // data: {
      //   x: '' ,
      //   y: ''
      // },
      method:'GET',
      // header: {
      //   'content-type': 'application/json'
      // },
      success: function(res) {
       console.log(res.data)
      },
      fail: function( res ) {
        console.log(res.data);
       }
     })






  },





})


