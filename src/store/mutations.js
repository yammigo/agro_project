import * as types from './mutations-types'
const mutations ={
  [types.SET_USERINFO](state,userinfo){
    state.userInfo=userinfo;
  },
  [types.SET_OPENID](state,openid){
    state.openid=openid;
  },
  [types.SET_USERID] (state,userid){
    state.userid=userid;
  }
}
export default mutations
