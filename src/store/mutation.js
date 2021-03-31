/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRES,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
export default {
  [RECEIVE_ADDRES](state,{address}){
    state.address=address
  }
}
