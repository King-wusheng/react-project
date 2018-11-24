import React,{Component} from 'react'
import {Item,Logo} from './styledItem'
import {withRouter} from 'react-router-dom'
 class ListItem extends Component{
    render(){
        return(
            <Item style={{float:'left'}}>
            {/* this.props.val.shop_id */}
                <div  onClick={()=>this.props.history.push({pathname:'/brand',state:{shop_id:this.props.val.shop_id}})}>
                    <div>
                        <img  src={this.props.val.pic_url} alt=""/>
                        <Logo active={this.props.dir==='left'}>
                            <img src={this.props.val.logo_url} alt=""/>
                        </Logo>
                    </div>
                    <div>
                        <span>{this.props.val.cprice}</span>
                        <del>{this.props.val.oprice}</del>
                    </div>
                    <div>
                        {this.props.dir==='left'?this.props.val.coupon_tips:this.props.val.title}
                    </div>
                </div>
            </Item>
        )
    }
    dataImg(bool){
        
    }
}

export default withRouter(ListItem) 