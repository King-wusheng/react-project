import React,{Component} from 'react'
import {SearchAll} from './styledsearch'
import {withRouter} from 'react-router-dom'
class Result extends Component{
    constructor(){
        super()
        this.state={
            mess:[]
        }
    }
    render(){
        return(
            <SearchAll></SearchAll>
        )
    }

    async componentWillMount(){
        const mess = await fetch('https://m.juanpi.com/search?keyword=%E7%94%B7%E8%A3%9D&&user_groupids=p8_c4_l4_222&page=2&is_ajax=1',{
            headers:{
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(result =>{
            console.log(result)
            return result
        })
        console.log(mess)
    }
}
export default withRouter(Result)
