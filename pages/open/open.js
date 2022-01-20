// home.js
const app = getApp()
var util = require('../../utils/util');

Page({
  data: {
    motto: '早晨! SHK 師傅師姐',
    hasUserInfo: false,
    getuserID:'',
    open_time:'',
    getflooropenid:'',
    request:false,
    floor:'',
    which_door_id:''
  },

  onLoad: function() {
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

    wx.getStorage({
      key: 'floor_open_id',
      success: function(res) {
        console.log(res.data)        
        that.setData({
          getflooropenid:res.data,
          floor: res.data.substring(0,2),
          which_door_id: res.data.substring(2,6)
        });
      }
    }) ;

    var time_temp = util.formatTime(new Date());
    
    that.setData({
      open_time: time_temp
    });

    wx.request({
      url: 'http://110.42.218.135:9090/cell/testforLuo/' + getApp().globalData.userID_global + ',' + getApp().globalData.openID_global, 
      method:'GET',
      success: function(res) {
       console.log(res.data);
       that.setData({
         request: true
       })
      },

      fail: function( res ) {
        console.log(res.data);
       }
     })
     getApp().globalData.open_global = true;


  },

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
          
          // wx.setStorage({
          //   key:"floor_open_id",
          //   //data:this.data.inputid //start from here to validate
          //   data:res.result,            
          // })

          getApp().globalData.closeID_global = res.result;

          if(res.result == getApp().globalData.openID_global){
            wx.setStorage({
              key:"floor_open_bool",
              //data:this.data.inputid //start from here to validate
              data:false
            })
            wx.showModal({
              title:'安全警告',
              content:'確認閂閘 -close?',
              confirmText: '是',
              cancelText: '否',
              success(res){
                if(res.confirm){
                  console.log('success');
                  wx.redirectTo({
                    url: '../home/home',
                  });
                  wx.showToast({
                    title: 'Success',
                    icon: 'success',
                    duration: 2000
                  });
                }else{
                  console.log('failed');
                  wx.showToast({
                    title: 'Failed',
                    icon:'error',
                    duration: 2000
                  })  
                }
              }
            })   //here       

          }else{
            wx.showToast({
              title: 'Door Different!',
              icon:'error',
              duration: 2000
            })   

          }

          
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


