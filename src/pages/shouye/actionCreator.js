import { GET_SWIPER } from './actionTypes'
import { GOODS ,GOODS_List} from './actionTypes'

export const SwiperImg = (payload) => {
    return {
        type: GET_SWIPER,
        payload
        
    }
    
}

export const Img = (dispatch) => {
    return () => {
        fetch('https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4&app_name=zhe&app_version=&platform=&catname=newest_zhe'
        )
        .then(response => response.json())
        .then(result => {
            dispatch(SwiperImg(result))
        })
        
    }
}


export const Goods = (payload) => {
    return {
        type: GOODS,
        payload
        
    }
    
}

export const GoodsMess = (dispatch) => {
    return () => {
        fetch('https://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe'
        )
        .then(response => response.json())
        .then(result => {
            dispatch(Goods&&Goods(result))
        })
        
    }
}

export const List = (payload) => {
    return {
        type: GOODS_List,
        payload
        
    }
    
    
}

export const GoodsList = (dispatch) => {
    return () => {
        fetch('https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc')
        .then(response => response.json())
        .then(result => {
            dispatch(List(result))
        })
    }
}
