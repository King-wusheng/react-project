import React,{Component} from 'react'
import { connect } from 'react-redux'
import HomeUi from './homeUi'
import {Img} from '../actionCreator'
import {GoodsMess,GoodsList} from '../actionCreator'

const mapState = (state)=>{
    return {
        data:state.shouye.data,
        Goods:state.shouye.Goods,
        showList:state.shouye.List
    }
}

const mapImg =(dispatch)=>{
    return{
        Swiper(){
            dispatch(Img(dispatch))
        },
        goods(){
            dispatch(GoodsMess(dispatch))
        },
        list(){
            dispatch(GoodsList(dispatch))
        }
    }
}

class HomeContainer extends Component{
    render(){
        return (
            <HomeUi {...this.props}></HomeUi>
        )
    }
    //在此生命周期进行数据请求
    componentDidMount () {
        this.props.Swiper()
        this.props.goods()
        this.props.list()
    }
}
export default connect(mapState,mapImg)(HomeContainer)