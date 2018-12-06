const apidomai = "http://wx.mn-php.top"

/**
 *时间:2018/8/16 9:52
 *文件:apihttp.js
 *作者:FanJianTao
 *功能:接口集
 *参数:
 *返回:
 */
//用户绑定信息
export function addUser(openid, user_name, phone, checkCode, address) {
  return $.when(
    $.ajax({
      type: "post",
      url: apidomai + '/index/User/addUser',
      dataType: "json",
      data: {
        openid: openid,
        user_name: user_name,
        phone: phone,
        checkCode: checkCode,
        address: address
      }
    })
  )
}

//根据手机号查找用户
export function findUser(phone) {
  return $.when(
    $.ajax({
      type: "post",
      url: apidomai + '/index/User/findUser',
      dataType: "json",
      data: {
        phone: phone
      }
    })
  )
}

//发送手机验证码
export function getPhoneCode(phone) {
  return $.when(
    $.ajax({
      type: "get",
      url: apidomai + '/index/User/getPhoneCode',
      dataType: "json",
      data: {
        phone: phone
      }
    })
  )
}

//确认接入
export function confirmAdd(phone, code) {
  return $.when(
    $.ajax({
      type: "get",
      url: apidomai + '/index/User/getPhoneCode',
      dataType: "json",
      data: {
        phone: phone,
        code: code
      }
    })
  )
}

//获取用户大棚列表（安装人员）
export function getList(user_id) {
  return $.when(
    $.ajax({
      type: "get",
      url: apidomai + '/index/GreenH/getList',
      dataType: "json",
      data: {
        user_id: user_id

      }
    })
  )
}

//安装人员添加大棚接口
export function addGreenHouse(user_id, g_name, length, width, height, address) {
  return $.when(
    $.ajax({
      type: "post",
      url: apidomai + '/index/GreenH/addGreenHouse',
      dataType: "json",
      data: {
        user_id: user_id,
        g_name: g_name,
        length: length,
        width: width,
        height: height,
        address: address

      }
    })
  )
}

//安装人员添加设备
export function addDevice(g_id, device_id, device_type, device_name, comment, openid,userid) {
  return $.when(
    $.ajax({
      type: "post",
      url: apidomai + '/index/Device/addDevice',
      dataType: "json",
      data: {
        g_id: g_id,
        device_id: device_id,
        device_type: device_type,
        device_name: device_name,
        comment: comment,
        openid: openid,
        user_id: userid

      }
    })
  )
}

//城市级联选择
export function selectAddress() {
  return $.when(
    $.ajax({
      type: 'get',
      url: 'https://apis.map.qq.com/ws/district/v1/getchildren?key=CQCBZ-YZWCX-FN44S-7YC7N-LU6I7-T7BPW',
      dataType: 'jsonp',
      data:{
        output:'jsonp',
        callback:'function1'
      },


    })
  )
}

export function getchildren(id) {
  return $.when(
    $.ajax({
      type: 'get',
      url: 'https://apis.map.qq.com/ws/district/v1/getchildren?key=CQCBZ-YZWCX-FN44S-7YC7N-LU6I7-T7BPW',
      dataType: 'jsonp',
      data:{
        output:'jsonp',
        callback:'function1',
        id:id
      },

    })
  )
}


