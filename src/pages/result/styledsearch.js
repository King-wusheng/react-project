import styled from 'styled-components'


const Center = styled.div`
    width:100%;
    height:2.67rem;
    
    div{
        width:100%;
        height:100%;
        padding:.41rem 0;
        text-align:center;
        img{
            width:1.41rem;
            height:1.41rem;
        }
        p:nth-child(2){
            font-size:.16reml
            color:#333;
            margin-bottom:.05rem;
        }
        p:nth-child(3){
            font-size:.12rem;
            color:#666;

        }
    }
`

const Nav = styled.div`
    width:100%;
    height:.4rem;
    background:#f4f4f8
    text-align:center;
    line-height:.4rem;
    color:#666;
    font-size:.13rem;
    span{
        margin: 0 .05rem
    }
`
const Main = styled.div`
    width:100%;
    overflow:hidden;
    .am-search{
        width:2.7rem;
        background : #fff;
        .am-search-cancel{
            color:#666
        }
    }
`
const Goods = styled.div`
    width:100%;
    overflow:hidden;
`
export {Center,Nav,Goods,Main}