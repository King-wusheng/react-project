import React , {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Content,TopNav,GoodMess} from './styledlist'
import Item from './item/item'
class ListItem extends Component{

    constructor(){
        super()
        this.state={

        }
    }
    render(){
        console.log(this.props)
        return (
            <Content>
                <TopNav>
                    {
                        this.props.data.msort.map(val=>{
                            return <div key={val.text}>{val.text}
                                
                            </div>
                        })
                    }
                </TopNav>
                <GoodMess>
                    {
                        this.props.data.goods.map(value=>{
                            return <Item key={value.goods_id} value={value}></Item>
                        })
                    }
                    
                </GoodMess>
            </Content>
        )
    }

    
}

export default withRouter(ListItem)
