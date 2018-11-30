import React , {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {ItemAll,Center,Top,CenterTop,Interlayer,Guarantee,Footer,Home,Cart,Buy,Duugzz,Bottom,Mess,BuyNum,AddCart,Back,Curtain,ItemMessc,ItemMesss} from './styleddetails'
// import _ from 'lodash'
import { Popover, NavBar, Icon } from 'antd-mobile';
import point from 'images/point.png'
// import { Carousel, WingBlank } from 'antd-mobile';
import {fromJS,Seq,List,Map} from 'immutable'
const Item = Popover.Item;

class details extends Component{
    constructor(){
        super()
        this.bool = false;
        this.state={
            mess:[],
            bool:false,
            imgHeight: 176,
            size:'',
            color:'',
            select:[],
            colorChoose:[],
            sizeChoose:[]
        }
    }
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
    // console.log(opt.props.value);
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
        // console.log(!!this.state.select&&this.state.select.get('sku_id'))
        
        // console.log(this.state.select)
        // console.log(this.mess)
        const datas = this.mess&&this.mess.get('sku').groupBy(x=>x.get('av_fvalue'))
        const datac = this.mess&&this.mess.get('sku').groupBy(x=>x.get('av_zvalue'))
        //groupBy

        return(
            <ItemAll>
                
                <Top>
                    <NavBar
                        mode="light"
                        icon={<Icon style={{color:'#fff',width:'.3rem',height:'.3rem',background:'	rgba(51,51,51,.5)',borderRadius:'50%',textAlign:'center',marginTop:'.1rem'}} type="left" onClick={()=>this.props.history.go(-1)} />}
                        rightContent={
                        <Popover mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                            (<Item key="4" onClick={()=>this.props.history.push('/home')}  value="首页"  data-seed="logId" >首页</Item>),
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
                            <Icon style={{color:'#fff',width:'.3rem',height:'.3rem',background:'	rgba(51,51,51,.5)',borderRadius:'50%',textAlign:'center',marginTop:'.1rem'}} type="ellipsis" />
                            </div>
                        </Popover>
                        }
                        style={{backgroundColor:'rgba(0,0,0,0)'}}
                    >
                    </NavBar>
                </Top>
                <Center>
                    <div>
                        {/* <WingBlank style={{margin:0}}>
                            <Carousel
                            autoplay={true}
                            infinite
                            >
                            {data&&data.map(val => (
                                <span
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={val.av_zpic}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </span>
                            ))}
                            </Carousel>
                        </WingBlank> */}
                        <img src={this.mess&&this.mess.getIn(['info','goods_origin_url'])} alt=""/>
                    </div>
                    <CenterTop>
                       <div>
                            <div>
                                <div>
                                    <span>
                                        <span>￥{this.mess&& this.mess.getIn(['info','fprice'])} </span>
                                       
                                    </span>
                                    <del>
                                        ￥{this.mess&& this.mess.getIn(['info','oprice'])}
                                        
                                    </del>
                                </div>
                                <div>包邮</div>
                            </div>
                            <span>
                            
                            {this.mess&& this.mess.getIn(['info','join_number'])}
                            </span>
                       </div>
                       <div>
                           <p>
                           {this.mess&& this.mess.getIn(['info','goods_title'])}
                                
                           </p>
                            <img src="https://web.juanpi.com/static/media/collect.f8400f03.png" alt=""/>
                       </div>
                    </CenterTop>
                    <Interlayer></Interlayer>
                    <Guarantee>
                        <div>
                            <span>
                                <img src={point} alt=""/>
                                24小时发货
                            </span>
                            <span>
                                <img src={point} alt=""/>
                                7天包退
                            </span>
                            <span>
                                <img src={point} alt=""/>
                                售后补贴
                            </span>
                        </div>
                        <img src="https://web.juanpi.com/static/media/more.66830346.png" alt=""/>
                    </Guarantee>
                    <Interlayer></Interlayer>
                    <Footer>
                        <Home onClick={()=>this.props.history.push('/home')}>
                            <img src="https://web.juanpi.com/static/media/home_dark.41f2a808.png" alt=""/>
                            首页
                        </Home>
                        <Cart onClick={()=>this.props.history.push('/home/cart')}>
                            <img src="https://web.juanpi.com/static/media/cart_icon.5d19f0b4.png" alt=""/>
                            购物车
                        </Cart>
                        <Buy>
                            <div>立即购买</div>
                            <AddCart onClick={this.show.bind(this)}>加入购物车</AddCart>
                        </Buy>
                    </Footer> 
                </Center>
                <Curtain active={this.state.bool}></Curtain>
                <Duugzz active={this.state.bool}>
                    
                     <div>
                         <div>
                             <div>
                                 {/* <img src={this.state.select?this.state.select.get} alt=""/> */}
                                 {this.state.select.length == 0?  <img src={this.mess&& this.mess.getIn(['info','goods_pic_url'])}alt=""/> :this.state.select.map(v=>{return <img key={v.get('sku_id')} src={v.get('av_zpic')} alt=""/>})}
                             </div>
                             <div>
                                 <p>￥{this.mess&& this.mess.getIn(['info','fprice'])}
                                 </p>
                                 <p>
                                 {!!this.state.color?'已选择':'请选择'}
                                     <span>{!!this.state.color?this.state.color:'颜色'}</span>
                                     <span>{!!this.state.size?this.state.size:'尺码'}</span>
                                 </p>
                             </div>
                             <Back onClick={this.hide.bind(this)}>
                                 <img src="https://web.juanpi.com/static/media/del.bbe4aea1.png" alt=""/>
                             </Back>
                         </div>
                         <Mess>
                             <div>
                                 <span>颜色</span>
                                 <div>
                                    {
                                        datac&&datac.keySeq().map(v=>{
                                            return <ItemMessc onClick={this.color.bind(this,v)} active={v} color={this.state.color}  key={v}>{v}</ItemMessc>
                                        })
                                    }
                                    
                                 </div>
                             </div>
                             <div>
                                 <span>尺码</span>
                                 <div>
                                    {
                                        datas&&datas.keySeq().map(v=>{
                                            return <ItemMesss onClick={this.size.bind(this,v)} active={v} size={this.state.size}  key={v}>{v}</ItemMesss>
                                        })
                                    }
                                 </div>
                             </div>
                             <BuyNum>
                                 <span>购买数量</span>
                                 <div>
                                     <span>-</span>
                                     <span>1</span>
                                     <span>+</span>
                                 </div>
                             </BuyNum>
                         </Mess>
                         <Bottom>确定</Bottom>
                     </div>
                    
                 </Duugzz>
            </ItemAll>
        )
    }
    async componentWillMount(){
        this.mess = await fetch('https://webservice.juanpi.com/api/getMemberAboutInfo?goods_id='+this.props.location.state.shop_id+'&sa_id=19441354&is_pt_goods=0&req_coupons_id=95717752')
        .then(response=>response.json())
        .then(result=>{
            return fromJS(result.skudata)
        })
        
        this.setState({
            mess:this.mess
        })
    }
    show(){
        this.setState({
            bool:true
        })
    }
    hide(){
        this.setState({
            bool:false
        })
    }
    size(s){
        this.setState({
            size:s,
            sizeChoose:(this.mess.get('sku')).filter(x=>x.get('av_fvalue')===s),
            select:this.state.sizeChoose.filter(x=>x.get('av_zvalue')===this.state.color)
        })
    }    
    color(c){
        this.setState({
            color:c,
            colorChoose:(this.mess.get('sku')).filter(x=>x.get('av_zvalue')===c),
            select:this.state.colorChoose.filter(x=>x.get('av_fvalue')===this.state.size)
        })
        
    }
}

export default withRouter(details)