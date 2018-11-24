import React , {Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import {AllMess} from './styleditem'
import Item from './item/item'
import {withRouter} from 'react-router-dom'
class PrivilegeItem extends Component{
    constructor(){
        super()
        this.state={
            message:[],
        }
    }
    render(){
        // const tabs = [
        //     { title: 'First Tab' },
        //     { title: 'Second Tab' },
        // ];
        const tabs = this.state.message.floor_bar
        function renderTabBar(props) {
            return (<Sticky>
                {({ style }) => <div  style={{ ...style,zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
            </Sticky>);
        } 
        return(
            <div>
                <WhiteSpace />
                    <StickyContainer>
                        <Tabs tabs={tabs}
                            initalPage={'t2'}
                            renderTabBar={renderTabBar}
                            tabBarTextStyle={{fontSize:'.12rem'}}
                            tabBarActiveTextColor='#ff464e'
                            tabBarUnderlineStyle={{borderColor:'#ff464e'}}
                        >
                            {
                                this.state.message.floor_data&&this.state.message.floor_data.map((val,index)=>{
                                    return <AllMess key={index}>
                                        {
                                            
                                            val.map((value,index)=>{
                                                if(!!value.tabname){
                                                    return <div key={index} style={{width:'100%',height:'.44rem',color:'#333',textAlign:"center",lineHeight:".44rem"}}>—  {value.tabname} —</div>
                                                }else{
                                                    return <Item value={value} key={index} />
                                                }
                                            })
                                        }
                                       
                                    </AllMess>
                                })
                            }
                        </Tabs>
                    </StickyContainer>
                <WhiteSpace />
                
            </div>
        )
    }

   


    async componentWillMount(){
        this.data = await fetch('https://webservice.juanpi.com/api/getBrandGoods?page=1&brand_id=1975586_'+this.props.location.state.shop_id+'&msort=1&goods_utype=C4&price_range=&cat_threeids=')
        .then(response=>response.json())
        .then(result=>{
            return result
        })
        this.setState({
            message:this.data
        })
    }
}

export default withRouter(PrivilegeItem) 
