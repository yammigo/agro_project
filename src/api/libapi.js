
// 天气api  https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=5d242b968fe9278ed3227a3ddbde67ca
export function getWeather(){
  return $.when(
    $.ajax({
      type: "get",
      url: "https://restapi.amap.com/v3/weather/weatherInfo?city=110000&key=5d242b968fe9278ed3227a3ddbde67ca",
      dataType: "json",
    })
  )
}
//ip 定位  https://restapi.amap.com/v3/ip?ip=114.247.50.2&output=xml&key=<用户的key>
export function getipaddress(){
  return $.when(
    $.ajax({
      type: "get",
      url: "https://restapi.amap.com/v3/ip?ip=114.247.50.2&output=xml&key=5d242b968fe9278ed3227a3ddbde67ca",
      dataType: "json",
    })
  )
}
