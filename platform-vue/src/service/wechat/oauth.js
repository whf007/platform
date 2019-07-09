import {APPID, REDIRECT_URI, SCOPE} from '@/config/wechat'

export default {
  getOauthCode () {
    console.log("oauthCode")
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APPID + '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) + '&response_type=code&scope=' + SCOPE + '&state=STATE#wechat_redirect'
  }
}
