import React , {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {GoodList} from './styledItem'
class Items extends Component{
    render(){
        return (
            <GoodList onClick={()=>this.props.history.push({pathname:'/details',state:{shop_id:this.props.value.goods_id}})} active={this.props.value.corner}>
                <div>
                    <img src={this.props.value.corner} alt=""/>
                    <img src={this.props.value.pic_url} alt=""/>
                </div>
                <div>
                    <span>￥{this.props.value.cprice}</span>
                    <span>￥{this.props.value.oprice}</span>
                </div>
                <div>
                    {this.props.value.title}
                </div>
            </GoodList>
        )
    }
}

export default withRouter(Items)