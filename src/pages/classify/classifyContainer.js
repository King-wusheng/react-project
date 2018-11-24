
import { Tabs, WhiteSpace } from 'antd-mobile';
import React , {Component} from 'react'
import {Search} from './styledClassify'
import fenlei from 'components/fenlei'
import {withRouter} from 'react-router-dom'
class ClassIfy extends Component {
  

  render() {
    const tabs = fenlei;

    return (
      <div style={{height:'100%'}}>
            <Search>
                <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1&sv=449ce9ee" alt=""/>
                <div style={{bodrder:'0'}}>搜索商品</div>
            </Search>
            <WhiteSpace />
            <Tabs tabBarUnderlineStyle={{borderColor:'#ff464e'}} tabBarActiveTextColor="#ff464e" tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                {
                    fenlei.map(val=>{
                        return <div key={val.id} style={{width:'100%',height:'100%',padding:'0 .2rem',margin:'.1rem 0 0 0 '}}>
                            {
                                val.secondCateList.map(value=>{
                                    return <div onClick={this.toCate.bind(this,value.id)} style={{width:'.58rem',margin:'0 .26rem',height:'.93rem',float:'left',display:'flex',flexDirection:'column',alignItems:'center'}} key={value.id}>
                                        <img style={{width:'.58rem',height:'.58rem'}} src={'https://s2.juancdn.com'+value.icon} alt=""/>
                                        <span>{value.name}</span>
                                    </div>
                                })
                            }
                        </div>
                    })
                }
            </Tabs>
            <WhiteSpace />
      </div>
    );
  }

  toCate(id){
    this.props.history.push({pathname:'/cate',state:{cate_id:id}})
  }
}
export default withRouter(ClassIfy)