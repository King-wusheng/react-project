import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {All,Top,Main,Center,Span} from './styledprofile'
import { NavBar, Icon } from 'antd-mobile';
import tuan from 'images/tuan.png'
import shou from 'images/shou.png'
import pay from 'images/pay .png'
import car from 'images/car.png'

class Profile extends Component{
    render(){
        return(
            <All>
                <Top>
                    <div>
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" />}
                            onLeftClick={() => console.log('onLeftClick')}
                            style={{color:'#fff'}}
                        >个人中心</NavBar>
                    </div>
                    <div>
                        <span>注册</span>
                        <p></p>
                        <span>登录</span>
                    </div>
                </Top>
                <Main>
                    <div>
                        <div>
                            <span>我的订单</span>
                            <span>全部订单</span>
                        </div>
                        <div>
                            <div>
                                <img src={pay} alt=""/>
                                <span>代付款</span>
                            </div>
                            <div>
                                <img src={tuan} alt=""/>
                                <span>待成团</span>
                            </div>
                            <div>
                                <img src={car} alt=""/>
                                <span>待收货</span>
                            </div>
                            <div>
                                <img src={shou} alt=""/>
                                <span>退款售后</span>
                            </div>
                        </div>
                    </div>
                </Main>
                <Center>
                    <div>
                        <span>我的优惠券</span>
                        <Span>我的收藏</Span>
                        <Span>我的拼团</Span>
                        <Span>我的免单卷</Span>
                        <Span>借钱</Span>
                    </div>
                    <div>
                        <span>客服中心</span>
                        <Span>关于卷皮</Span>
                    </div>
                </Center>
            </All>
        )
    }
}

export default withRouter(Profile)