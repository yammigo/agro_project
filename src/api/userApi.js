const apidomai="http://wx.mn-php.top"

/**
 *时间:2018/8/16 12:42
 *文件:userApi.js
 *作者:FanJianTao
 *功能:用户相关api接口
 *参数:
 *返回:
 */
//获取登录token
export function getToken(){
  return $.when(
    $.ajax({
      type: "get",
      url: apidomai+'/index/home/getToken',
      dataType: "json"
    })
  )
}

//获取用户信息
export function getuserInfo(token){
  return $.when(
    $.ajax({
      type: "get",
      url: apidomai+'/index/home/getUserInfo',
      dataType: "json",
      data:{
        token:token
      }
    })
  )
}

//用户绑定信息
export function addUser(openid,user_name,phone,checkCode,address,protocol){
  return $.when(
    $.ajax({
      type: "post",
      url: apidomai+'/index/User/addUser',
      dataType: "json",
      data:{
        openid:openid,
        user_name: user_name,
        phone	:phone,
        checkCode	:checkCode,
        address:address,
        protocol:protocol //协议
      }
    })
  )
}
