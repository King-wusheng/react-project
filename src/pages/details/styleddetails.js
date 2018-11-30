import styled from 'styled-components'
import border from 'components/styled/border'
const ItemAll = styled.div`
    position relative;
    width:100%;
    height:100%;
    overflow:hidden;
`

const Center = styled.div`
    width:100%;
    overflow:hidden;
    >div:nth-child(1){
        width:100%;
        height:3.75rem;
        img{
            width:100%;
            height:100%;
        }
    }
    >img{
        width:100%;
        height:.5rem;
    }
`
const Top = styled.div`
    position:absolute;
    width:100%;
`
const CenterTop = styled.div`
    width:100%;
    overflow:hidden;
    padding:.12rem .14rem .1rem;
    >div:nth-child(1){
        width:100%;
        height:.35rem;
        >div{
            width:1.23rem;
            height:100%;
            float:left;
            
            >div:nth-child(1){
                float:left;
                width:.95rem;
                height:100%;
                >span{
                    margin-right:.04rem;
                    color: #ff464e;
                    line-height:.35rem;
                    text-align:center;
                    font-size:.24rem;
                    span{
                        font-size:.17rem;
                        
                    }
                }
                del{
                    color:#bbbbbb;
                    font-size:.12rem;
                    
                    text-decoration: line-through;
                }
            }
            >div:nth-child(2){
                background-color: rgb(255, 70, 78);
                color: rgb(255, 255, 255);
                font-size:.1rem;
                float:left;
                margin-left:.02rem;
                margin-top:.12rem;
            }
        }
        >span{
            float:right;
            color:#999;
            font-sise:.12rem;
        }
    }
    >div:nth-child(2){
        width:100%;
        height:.42rem;
        margin:.04rem 0 .1rem;
        display:flex;
        align-items:center;
        p{
            width:3.2rem;
            height:100%;
            font-size:.17rem;
            color:#333;
            float:left;
            display:flex;
            align-items:center;
        }
        img{
            float:right;
            width:.24rem;
            height:.24rem;

        }
    }
`
const Interlayer =styled.div`
    width:100%;
    height:.1rem;
    padding:0;
    background:rgb(244, 244, 248);
`
const Guarantee = styled.div`
    width:100%;
    height:.48rem;
    padding:0 .14rem;
    display:flex;
    align-items:center;
    >div{
        width:3rem;
        height:100%;
        display:flex;
        align-items:center;
        span{
            img{
                width:.2rem;
                height:.2rem;
            }
        }
    }
    >img{
        width:.24rem;
        height:.24rem;
    }
`
const Footer = styled.div`
    width:100%;
    height:.48rem;
    position:fixed;
    bottom:0;
    border-top:0;
    display:flex;
    align-items:center;
    >div{
        position:relative;
        width:100%;
        height:100%;
    }
    
`
const Home = border({
    component:styled.div`
        width:.72rem;
        height:100%;
        display:flex;
        flex-direction: column;
        align-items:center;
        color:#6b6b6b;
        font-size:.11rem;
        img{
            width:.24rem;
            height:.24rem;
            margin-top:.05rem;
        }
    `,
    width:'0 1px 0 0 ',
    color: '#e7e7e7',

})
const Cart = border({
    component:styled.div`
        width:.72rem;
        height:100%;
        display:flex;
        flex-direction: column;
        align-items:center;
        color:#6b6b6b;
        font-size:.11rem;
        img{
            margin-top:.05rem;
            width:.24rem;
            height:.24rem;

        }
    `,
    width:'0 1px 0 0 ',
    color: '#e7e7e7',
})
const Buy = styled.div`
    width:2.31rem;
    height:100%;
    display:flex;
    >div:nth-child(1){
        width:.93rem;
        height:100%;
        color:#333;
        line-height:.48rem;
        font-size:.12rem;
        text-align:center;
    }
    >div:nth-child(2){
        width:1.38rem;
        height:100%;
        line-height:.48rem;
        background:#ff464e;
        color:#fff;
        text-align:center;
        font-size:.12rem;
    }
`
const Curtain =styled.div`
    background:rgba(51,51,51,.5);
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    display:${props=>props.active?'block':'none'}
`
const Duugzz = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:${props=>props.active?'0':'100%'};
    transition:1s all ease;
    .kPsDST,.gfFFUv{
        font-weight:300;
        font-size:.13rem;
    }

    .fdaqGI{
        overflow:scroll
    }
    >div:nth-child(1){
        width:100%;
        position:absolute;
        background:#fff;
        display:flex;
        bottom:0;
        flex-direction: column;
        height:4.48rem;
        >div:nth-child(1){
            width:100%;
            height:.73rem;
            position:relative;
            display:flex;
            >div:nth-child(1){
                width:1rem;
                height:1.05rem;
                position:absolute;
                left:.14rem;
                top:-.36rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            >div:nth-child(2){
                margin:.06rem 0 0 1.26rem;
                width:2.25rem;
                p:nth-child(1){
                    color: #ff464e;
                    font-size: .19rem;
                    text-align: left;
                }
                p:nth-child(2){
                    color: #666;
                    font-size: .12rem;
                    text-align: left;
                    span{
                        margin: 0 .03rem 0 .05rem
                    }
                }
            }
            >div:nth-child(3){
                width:.14rem;
                height:.14rem;
                margin : .1rem .1rem 0 0 
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
`
const Bottom = styled.div`
    width:100%;
    height:.48rem;
    line-height: .48rem;
    font-size: .19rem;
    color: #fff;
    text-align: center;
    background: #ff464e;
    display:absolute;
    bottom:0;
    z-index:1000;
`
const Mess = styled.div`
    flex:1;
    overflow:hidden;
    width:100%;
    padding:0 .14rem;
    padding-top:.1rem;
    >div{
        width:100%;
        overflow:hidden;
        >span{
            font-size:.15rem;
        }
        >div{
            span:nth-child(3n-1){
                margin:.06rem .11rem;
            }
            
        }
    }

`

const ItemMessc = border({
    component:styled.span`
        float:left;
        display:block;
        width:1.06rem;
        height:.33rem;
        color:${props=>props.active===props.color?'#fff':'#333'};
        font-size:.13rem
        margin:.06rem 0;
        text-align:center;
        line-height:.33rem;
        background:${props=>props.active===props.color?'#ff464e':'#fff'}
    `,
    color:props=>props.active===props.color?'#ff464e':'#333',
    width:'1px',

})
const ItemMesss = border({
    component:styled.span`
        float:left;
        display:block;
        width:1.06rem;
        height:.33rem;
        color:${props=>props.active===props.size?'#fff':'#333'};
        font-size:.13rem
        margin:.06rem 0;
        text-align:center;
        line-height:.33rem;
        background:${props=>props.active===props.size?'#ff464e':'#fff'}
    `,
    color:props=>props.active===props.size?'#ff464e':'#333',
    width:'1px',
})

const BuyNum = styled.div`
    width:100%;
    height:.3rem;
    margin:.3rem 0;
    display:flex;
    justify-content:space-between;
    >span{
        text-align: left;
        color: #333;
        font-size:.17rem;

    }
    >div{
        display:flex;
        align-items:center;
        text-align: right;
        span:nth-child(2n+1){
            width:.3rem;
            height:.3rem;
            background:#f7f7f7;
            text-align:center;
            line-height:.3rem;
        }
        span:nth-child(2){
            margin:0 !important;
            padding:0 .18rem;
        }
    }
`
const AddCart = styled.div`

`
const Back = styled.div`

`
export {
    ItemAll,
    Center,
    Top,
    CenterTop,
    Interlayer,
    Guarantee,
    Footer,
    Home,
    Cart,
    Buy,
    Duugzz,
    Bottom,
    Mess,
    ItemMesss,
    ItemMessc,
    BuyNum,
    AddCart,
    Back,
    Curtain

}