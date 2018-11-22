import React , {Component} from 'react'

import {HomeContainer,Top,Cen_Ul,Cen_UlT,Cen_UlThr,Cen_UlF} from './styledHome'
import SearchImg from 'images/search_jp.png'
import { Carousel, WingBlank } from 'antd-mobile';

import GoodsAll from './GoodsAll/Goodsall'

class HomeList extends Component{
    state = {
        imgHeight: 176,
        Goods:this.props.Goods || []
    }
    
    render(){
        return (
            
            <HomeContainer>
                <Top>
                    <div>
                        <div>
                            <img src={SearchImg} alt="" />
                            
                            <img src="http://s2.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" alt=""/>
                            <div>搜索</div>
                        </div>
                        <div>
                            <img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png" alt=""/>
                        </div>
                    </div>
                </Top>
                <WingBlank style={{margin:0}}>
                    <Carousel
                    autoplay={true}
                    infinite
                    >
                    {this.props.data.adsInfo&&this.props.data.adsInfo.slide_ads.config.slide.map(val => (
                        <a
                        key={val.id}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val.pic}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                <Cen_Ul>
                    {this.props.Goods&&this.props.Goods.adsRes&&this.props.Goods.adsRes.block[0].multi_block[0].data.map(val=>(
                        <li key={val.child[0].url}>
                            <img src={val.child[0].pic} alt=""/>
                        </li>
                    ))}
                </Cen_Ul>
                <Cen_UlT>
                    {this.props.Goods&&this.props.Goods.adsRes&&this.props.Goods.adsRes.block[0].multi_block[1].data.map(val=>(
                        <li key={val.child[0].url} key={val.child[0].url}>
                        {val.child.map(p=>(
                            <img key={p.server_jsonstr} src={p.pic} alt=""/>
                        ))}
                        </li>
                    ))}
                </Cen_UlT>
                <Cen_UlThr>
                    <img src="https://s2.juancdn.com/jas/181120/c/8/5bf3d6f133b089331a5c7d2f_1080x312.gif" alt=""/>
                </Cen_UlThr>
                <Cen_UlF>
                    <img src="https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png" alt=""/>
                </Cen_UlF>
                <GoodsAll {...this.props}></GoodsAll>
            </HomeContainer>
        )
    }
}

export default HomeList
