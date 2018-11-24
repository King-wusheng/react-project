import React ,{Component} from 'react'
import {BrandAll,Header} from './styledBrand'
import { Popover, NavBar, Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import gz from 'images/gz.png'
import PrivilegeItem from './list/privilegeItem'
import ListItem from './list/listItems'


const Item = Popover.Item;


class Brand extends Component{
    constructor(){
        super()
        this.state={
            message:[],
        }
    }
    state = {
        visible: false,
        selected: '',
      };
    onSelect = (opt) => {
        if(opt.props.value ==='首页'){
            this.props.history.push('/home')
        }
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
      };
    handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
      };
    render(){
        const data = this.state.message.brandInfo
        return(
            <BrandAll>
                <div>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" onClick={()=>this.props.history.push('/home')} />}
                        rightContent={
                        <Popover mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                            (<Item key="4" value="首页"  data-seed="logId" >首页</Item>),
                            (<Item key="5" value="我的收藏"  style={{ whiteSpace: 'nowrap' }}>我的收藏</Item>),
                            (<Item key="6" value="我的订单">
                                <span style={{ marginRight: 5 }}>我的订单</span>
                            </Item>),
                            ]}
                            align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                            height: '100%',
                            padding: '0 15px',
                            marginRight: '-15px',
                            display: 'flex',
                            alignItems: 'center',
                            }}
                            >
                            <Icon type="ellipsis" />
                            </div>
                        </Popover>
                        }
                    >
                        {data&&data.shop_name}
                    </NavBar>
                    </div>
                <Header active={data&&!!data.coupon_data}>
                    <div>
                        <div>
                            <div>
                                <img src={data&&data.logo_url} alt=""/>
                            </div>
                            <div>
                                <p>{data&&data.shop_name}</p>
                                <p>{data&&data.store_info}</p>
                            </div>
                            <img src={gz} alt=""/>
                            
                        </div>
                        {/* <div>
                            <span>{data&&data.coupon_data&&data.coupon_data[0].title}</span>
                            {data&&data.coupon_data&&data.coupon_data[0].content }
                        </div> */}
                        {/* <div>4444</div> */}
                    </div>
                </Header> 
                <div>
                    {
                        this.type()
                    }
                   
                </div>      
            </BrandAll>
        )
    }
    type(){
        if(this.data&&this.data.msort){
            return <ListItem data={this.data}></ListItem>
        }else{
            return  <PrivilegeItem></PrivilegeItem>
        }
    }
    async componentWillMount(){
        this.data = await fetch('https://webservice.juanpi.com/api/getBrandGoods?page=1&brand_id=1975586_'+this.props.location.state.shop_id+'&msort=1&goods_utype=C4&price_range=&cat_threeids=')
        .then(response=>response.json())
        .then(result=>{
            console.log(result)
            return result
        })
        this.setState({
            message:this.data
        })
    }
}

export default withRouter(Brand)
