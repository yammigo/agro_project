const apidomai="http://wx.mn-php.top"

/**
 *时间:2018/8/16 12:43
 *文件:clientApi.js
 *作者:FanJianTao
 *功能:客户端相关api
 *参数:
 *返回:
 */
//用户页面-大鹏列表
export function greenList(userId){
  return $.when(
    $.ajax({
      type: "get",
      url: apidomai+'/index/GreenH/greenList',
      dataType: "json",
      data:{
        user_id:userId
      }
    })

  )
}

//用户页面-大鹏详情
export function greenDetail(g_id){
  return $.when(
    $.ajax({
      type: "get",
      url: apidomai+'/index/GreenH/greenDetail',
      dataType: "json",
      data:{
        g_id:g_id
      }
    })
  )
}

export function devList(g_id){
  return $.when(
    $.ajax({
      type: "get",
      url: apidomai+'/index/Device/devList',
      dataType: "json",
      data:{
        g_id:g_id
      }
    })
  )
}

export function userdevList(g_id){
  // 安装人员获取用户大棚列表
  return $.when(
    $.ajax({
      type: "get",
      url: apidomai+'/index/Device/deviceList',
      dataType: "json",
      data:{
        g_id:g_id
      }
    })
  )
}

export function AllControll(user_id){
  return $.when(
    $.ajax({
      type: "get",
      url: apidomai+'/index/AllControll/index',
      dataType: "json",
      data:{
        user_id:user_id
      }
    })
  )
}
