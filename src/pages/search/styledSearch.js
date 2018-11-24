import styled from 'styled-components'
import border from 'components/styled/border'

const SearchIt = border({
    component:styled.div`
        height:100%;
        font-size:.12rem;
        .am-search{
            background :#fff
            .am-search-input{
                background:#f2f2f2;
                .am-search-value{
                    font-size:.12rem !important
                }
            }
        }
    `
})

const HotSerch = styled.div`
    width : 100%;
    overflow:hidden;
    margin-top:.14rem;
    padding: 0 .14rem;
    font-size:.12rem;
    p{
        color: #999;
        font-size:.14rem;
    }
    ul{
        width:100%;
        overflow:hidden;
        li{
            display:inline-block;
            color:#ff464e;
            background:#f4f4f4;
            float:left;
            margin:.08rem .1rem .03rem 0;
            padding:.05rem .1rem
        }
    }
`

const HistorySearch = styled.div`
    width : 100%;
    overflow:hidden;
    margin-top:.14rem;
    padding: 0 .14rem;
    font-size:.12rem;
    p{
        color: #999;
        font-size:.14rem;
    }
`
export {
    SearchIt,
    HotSerch,
    HistorySearch
}
