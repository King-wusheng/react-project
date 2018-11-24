import styled from 'styled-components'
import bg from 'images/bg.png'
const BrandAll = styled.div`
    height:100%;
    width:100%;
    svg:not(:root) {
        overflow: hidden;
        color: #000;
    }
    overflow:scroll;
    .sc-kkGfuU{
        overflow:hidden;
    }
`
const Header = styled.div`
    width:100%;
    padding:.1rem;
    overflow:hidden;
    background:url(${bg}) repeat;
    .am-tabs-default-bar-tab{
        font-size:.12rem;
    }
    div{
        width:100%;
        padding:.13rem 0 .13rem .14rem;
        overflow:hidden;
        background:#fff;
        >div:nth-child(1){
            width:100%;
            height.99rem;
            display:flex;
            align-items:center;
           
            
            >div:nth-child(1){
                display:block;
                padding:0;
                width:.46rem;
                height:.46rem;
                display:flex;
                align-items:center;
                >img{
                    margin:0;
                    width:.45rem;
                    height:.22rem;
                }
            }
            div:nth-child(2){
                display:block;
                width:1.88rem;
                margin-left:.1rem;
                p:nth-child(1){
                    height:.3rem;
                    width:100%;

                }
                p:nth-child(2){
                    width:100%;
                    color:#333;
                    opacity:.5;
                    font-size:.12rem;
                }
            }
            >img{
                margin-left:.5rem;
                width:.24rem;
                height:.24rem;
                margin-right:.1rem
            }
            
        }
        div:nth-child(2){
            display:${props=>props.active?'block':'none'};
            margin-top:.16rem;
            padding:0;
            font-size:.13rem;
            span{
                color:#ff464e;
                margin-right:.14rem;
                padding:0 .05rem;
                
            }
        }
        div:nth-child(3){
            display:${props=>props.active?'block':'none'};
            padding:0;
        }
    }
`
const MessageAll = styled.div`
    width:100%;
    overflow:hidden;
    .am-tabs-default-bar-tab{
        font-size:.12rem;
    }
`


export {
    BrandAll,
    Header,
    MessageAll
}

