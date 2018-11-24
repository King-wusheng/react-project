import React ,{Component} from 'react'
import {SearchIt,HotSerch,HistorySearch} from './styledSearch'
import { SearchBar } from 'antd-mobile';
import data from 'components/search.json'
class SearchAll extends Component{
      onChange= (value) => {

      };
      clear = () => {

      };
    render(){
        return (
            <SearchIt>
                <SearchBar placeholder={data.def_keywords} maxLength={8} />
                <HotSerch>
                    <p>热搜</p>
                    <ul>
                        {
                            data.jump_keywords.map((val,index)=>{
                                return <li key={index}>{val.text}</li>
                            })
                        }
                        
                    </ul>
                </HotSerch>
                <HistorySearch>
                    <p>搜索历史</p>
                </HistorySearch>
            </SearchIt>
        )
    }
    
}




export {SearchAll}

