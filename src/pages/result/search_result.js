import React,{Component} from 'react'
import {Center,Nav,Goods,Main} from './styledsearch'
import {withRouter} from 'react-router-dom'
import { NavBar, Icon,SearchBar } from 'antd-mobile';
import result from 'images/rearch-result.png'
// import {fromJS} from 'immutable'
import BScroll from 'better-scroll'
import Items from 'components/common/item/item'
class Result extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    

    }
    render(){
        return(
            <div id='scroll' style={{width:'100%',height:'100%',overflow:'hidden'}}>
                <Main>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" style={{color:'#666'}} />}
                        onLeftClick={() => this.props.history.go(-1)}
                        rightContent={[
                            <Icon key="1" type="ellipsis" style={{color:'#666'}} />,
                        ]}
                    >
                        <SearchBar placeholder={this.props.location.state.keyword} maxLength={8} />
                    </NavBar>
                    <Center>
                        <div>
                            <img src={result} alt=""/>
                            <p>诶呀,结果溜走了，换个词试试</p>
                            <p>为您推荐以下商品</p>
                        </div>
                    </Center>
                    <Nav>
                        --<span>热销商品</span>--
                    </Nav>
                    <Goods>
                        {
                            this.state.data&&this.state.data.map(value=>{
                                return <Items value={value} key={value.goods_id} />
                            })
                        }
                    </Goods>
                </Main>
            </div>
        )
    }


    async componentWillMount(){
        const mess = await fetch('https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp')
        .then(response=>response.json())
        .then(result=>{
            return result.data.goods
        })

        this.setState({
            data:mess
        })
    }

    componentDidMount(){
        this.scroll = new BScroll('#scroll', {click: true})
    }
    
}
export default withRouter(Result)
