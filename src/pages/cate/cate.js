import React , {Component} from 'react'
import { Popover, NavBar, Icon } from 'antd-mobile';
import {CateALL,Nav,Content} from './styledcate'
import Items from './item/item'
import data from 'components/classify.json'
const Item = Popover.Item;

class Cate extends Component{
    constructor(){
        super()
        this.state={
            mess:[]
        }
    }
    render(){
        return(
            <CateALL>
                <div>
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
                                 <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                                <Icon type="ellipsis" />
                                </div>
                            </Popover>
                            }
                        >
                           羽绒棉服
                        </NavBar>
                        
                    </div>
                            
                    <Nav>
                        <div>推荐</div>
                        <div>价格</div>
                        <div>销量</div>
                        <div>上新</div>
                        <div>筛选</div>
                    </Nav>  
                    <Content>
                        {
                            data.map(value=>{
                                return <Items key={value.goods_id} value={value}></Items>
                            })
                        }
                    </Content>
                </div>
                    
            </CateALL>
        )
    }
}
export default Cate