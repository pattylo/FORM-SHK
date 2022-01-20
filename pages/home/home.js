// home.js
var app = getApp()

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
    if(getApp().globalData.open_global_bool){
      // wx.request({
      //   url: 'http://110.42.218.135:9090/cell/testforLuo/' + getApp().globalData.userID_global + ',' + getApp().globalData.openID_global, 
      //   method:'GET',
      //   success: function(res) {
      //    console.log(res.data);
      //    that.setData({
      //      request: true
      //    })
      //   },
  
      //   fail: function( res ) {
      //     console.log(res.data);
      //    }
      //  });
       getApp().globalData.open_global_bool = false;
    }        
  },

  bindScanTap: function() {
    var that = this;
    wx.scanCode({
        success: function(res) {
          console.log(res);
          
          // wx.setStorage({
          //   key:"floor_open_id",
          //   //data:this.data.inputid //start from here to validate
          //   data:res.result,            
          // })

          getApp().globalData.openID_global = res.result;
          getApp().globalData.userID_global = that.data.getuserID;

          // wx.setStorage({
          //   key:"floor_open_bool",
          //   //data:this.data.inputid //start from here to validate
          //   data:true
          // })
          wx.showModal({
            title:'安全警告',
            content:'確認開閘 -open?',
            confirmText: '是',
            cancelText: '否',
            success(res){
              if(res.confirm){
                console.log('success');
                wx.redirectTo({
                  url: '../open/open',
                });
                wx.showToast({
                  title: 'Success',
                  icon: 'success',
                  duration: 2000
                });
              }else{
                console.log('failed');
                wx.showToast({
                  title: '已取消',
                  icon:'error',
                  duration: 2000
                })  
              }
            }
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
      url: 'http://110.42.218.135:9090/cell/testforLuo/' + getApp().globalData.userID_global + ',' + getApp().globalData.openID_global.substring(0,2) + ',' + getApp().globalData.openID_global.substring(2,6),   
      method:'GET',

      success: function(res) {
       console.log(res.data)
      },
      fail: function( res ) {
        console.log(res.data);
       }
     })
//curl -G http://110.42.218.135:9090/cell/testforLuo
  },

})


