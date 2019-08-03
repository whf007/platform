/**
 * 用户相关服务
 */

const util = require('../utils/util.js');
const api = require('../config/api.js');


/**
 * 调用微信登录
 */
function newloginByWeixin(e) {
    let userInfo = wx.getStorageSync('userInfo');
    let token = wx.getStorageSync('token');
    if (userInfo && token) {
        return;
    }
    if (e.detail.userInfo){
        //用户按了允许授权按钮
        loginByWeixin(e.detail).then(res => {
            this.setData({
            userInfo: res.data.userInfo
        });
        app.globalData.userInfo = res.data.userInfo;
        app.globalData.token = res.data.token;
    }).catch((err) => {
            console.log(err)
    });
    } else {
        //用户按了拒绝按钮
        wx.showModal({
            title: '警告通知',
            content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
            success: function (res) {
                if (res.confirm) {
                    wx.openSetting({
                            success: (res) => {
                            if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
                        loginByWeixin(e.detail).then(res => {
                            this.setData({
                            userInfo: res.data.userInfo
                        });
                        app.globalData.userInfo = res.data.userInfo;
                        app.globalData.token = res.data.token;
                    }).catch((err) => {
                            console.log(err)
                    });
                    }
                }
                })
                }
            }
        });
    }
}
/**
 * 调用微信登录
 */
function loginByWeixin(userInfo) {

  let code = null;
  return new Promise(function (resolve, reject) {
    return util.login().then((res) => {
      code = res.code;
      return userInfo;
    }).then((userInfo) => {
      //登录远程服务器
      util.request(api.AuthLoginByWeixin, { code: code, userInfo: userInfo }, 'POST', 'application/json').then(res => {
        if (res.errno === 0) {
          //存储用户信息
          wx.setStorageSync('userInfo', res.data.userInfo);
          wx.setStorageSync('token', res.data.token);

          resolve(res);
        } else {
          util.showErrorToast(res.errmsg)
          reject(res);
        }
      }).catch((err) => {
        reject(err);
      });
    }).catch((err) => {
      reject(err);
    })
  });
}

/**
 * 判断用户是否登录
 */
function checkLogin() {
  return new Promise(function (resolve, reject) {
    if (wx.getStorageSync('userInfo') && wx.getStorageSync('token')) {

      util.checkSession().then(() => {
        resolve(true);
      }).catch(() => {
        reject(false);
      });

    } else {
      reject(false);
    }
  });
}


module.exports = {
  loginByWeixin,
  checkLogin,
  newloginByWeixin,
};











