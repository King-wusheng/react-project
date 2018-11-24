import React ,{Component}from 'react'
import ListItem from './listItem/listItem.js'
import {Menu,MenuNav,MenuItem,MenuList,MenuBottom} from './styledList'
let page = 1 

export class TabExample extends Component{
    async componentDidMount(){
        this.leftData = await fetch('https://webservice.juanpi.com/api/getGoods?page='+page+'&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc')
        .then(response => response.json())
        .then(result => {
        
          return result.data.goods
         
        })
        this.rightData = await fetch('https://webservice.juanpi.com/api/getGoods?page='+page+'&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp')
        .then(response => response.json())
        .then(result => {
            return result.data.goods
           
        })
    }
    constructor (props) {
        super(props)
    
        this.state = {
          dir: 'left',
          activeDir: 'left'
        }
    }
    render(){
        return(
            <div>
                <Menu>
                    <MenuNav>
                        <MenuItem active={
                            this.state.activeDir === 'left'} 
                            onClick={() => this.handleNavClick('left')}>
                            <span>精选专场</span>
                        </MenuItem>
                        <MenuItem 
                            active={this.state.activeDir === 'right'} 
                            onClick={() => this.handleNavClick('right')}>
                            <span>精选单品</span>
                        </MenuItem>
                    </MenuNav>
                    <MenuBottom active={this.state.dir}></MenuBottom>
                    <MenuList>
                        {
                            this.leftData&&(this.state.activeDir === 'left'?this.leftData:this.rightData)
                            .map(val=>{
                               return <ListItem key={val.goods_id} val={val} dir={this.state.dir}/>
                           })
                        }
                    </MenuList> 
                </Menu>
            </div>
            
        )
    }
    handleNavClick (dir) {
        this.setState({
            dir
        })
        setTimeout(() => {
            this.setState({
              activeDir: dir
            })
        }, 300)
    }
}


