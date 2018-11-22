import React , {Component} from "react";
import { TabBar } from 'antd-mobile';
import  home from 'images/home.png'
import  cart from 'images/cart.png'
import  my from 'images/my.png'
import  classify from 'images/classify.png'
import  homeshow from 'images/homeshow.png'
import  cartshow from 'images/cartshow.png'
import  myshow from 'images/myshow.png'
import  classifyshow from 'images/classifyshow.png'

import {HomeList} from 'pages/shouye'

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'hime',
          fullScreen: true,
        };
    }
    render(){
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                unselectedTintColor="#666"
                tintColor="#FF464E"
                barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${home}) center center / 24px 24px  no-repeat` }}
                        />
                        }
                        selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${homeshow}) center center /  24px 24px no-repeat` }}
                        />
                        }
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'home',
                        });
                        }}
                        data-seed="logId"
                    >
                    <HomeList></HomeList>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${classify}) center center /   24px 24px  no-repeat` }}
                        />
                        }
                        selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${classifyshow}) center center /  24px 24px  no-repeat` }}
                        />
                        }
                        title="分类"
                        key="classify"
                        selected={this.state.selectedTab === 'classify'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'classify',
                        });
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${cart}) center center /  24px 24px  no-repeat` }}
                            />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${cartshow}) center center /  24px 24px no-repeat` }}
                                />
                            }
                        title="购物车"
                        key="cart"
                        selected={this.state.selectedTab === 'cart'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'cart',
                        });
                        }}
                    >
                        <div>tab4</div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${my}) center center /  32px 24px no-repeat` }}
                            />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${myshow}) center center /  32px 24px no-repeat` }}
                                />
                            }
                        title="我的"
                        key="profile"
                        selected={this.state.selectedTab === 'profile'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'profile',
                        });
                        }}
                    >
                        <div>tab5</div>
                    </TabBar.Item>
                </TabBar>
            </div>
          );
    }
}

export default HomeContainer