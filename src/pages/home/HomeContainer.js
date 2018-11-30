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
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {HomeList} from 'pages/shouye'
import {Cart} from 'pages/cart'
import {Profile} from 'pages/profile'
import ClassIfy from 'pages/classify'

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'home',
          fullScreen: true,
        };
    }
    render(){
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 ,background:'#fff'} : { height: 400 ,background:'#fff'}}>
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
                            this.props.history.push('/home/shouye')
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
                            this.props.history.push('/home/classify')
                        }}
                        data-seed="logId1"
                    >
                    <ClassIfy></ClassIfy>
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
                            this.props.history.push('/home/cart')
                        }}
                    >
                        <Cart></Cart>
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
                            this.props.history.push('/home/profile')
                        }}
                    >
                        <Profile></Profile>
                    </TabBar.Item>
                </TabBar>
                
                
            </div>
          );
    }
}

export default HomeContainer