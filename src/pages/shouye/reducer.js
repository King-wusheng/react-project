
import {GET_SWIPER} from './actionTypes'
import {GOODS,GOODS_List} from './actionTypes'

const swiperImg = {
    data:{},
    Goods:{},
    List:{}
}

export default (state=swiperImg,actions) => {
    if(actions.type === GET_SWIPER) {
        return {
            data : {...state.data,...actions.payload},
           
        }
    }
    if(actions.type === GOODS) {
        return {
            ...state,
            Goods : {...state.Goods,...actions.payload},
        }
    }
    if(actions.type === GOODS_List) {
        return {
            ...state,
            List : {...state.List,...actions.payload},
        }
        
    }
    return state
}