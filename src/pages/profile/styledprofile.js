import styled from 'styled-components'
import bg from 'images/user_center_bg.png'
import border from 'components/styled/border'

const All = styled.div`
    background:#f4f4f8;
    width:100%;
    height:100%;
`
const Top = styled.div`
    width:100%;
    height:1.44rem;
    background:url(${bg});
    display:flex;
    flex-direction:column;
    >div:nth-child(1){
        width:100%;
        flex:88
        background:rgba(0,0,0,0)
        
    }
    >div:nth-child(2){
        flex:200;
        display:flex;
        justify-content:center;
        >p{
            width:.01rem;
            height:.2rem;
            background:#fff;
            margin-top:.4rem;
        }
        >span{
            display:inline-block;
            width:.4rem;
            height:100%;
            margin:0 .48rem; 
            color: #fff;
            font-size:.2rem;
            line-height:1rem;
        }
    }
    .am-navbar{
        background-color: rgba(0,0,0,0) !important;
        color:#fff
        .am-navbar-title{
            color:#fff
        }
    }
`
const Main = styled.div`
    background:#fff;
    width:100%;
    overflow:hidden;
    >div{
        width:100%;
        display:flex;
        flex-direction:column;
        >div:nth-child(1){
            width:100%;
            padding:0 .18rem;
            height:.48rem;
            display:flex;

            justify-content:space-between;
            align-items:center;
            >span:nth-child(1){
                color:#333;
                font-size:.15rem;
            }
            >span:nth-child(2){
                fong-size:.14rem;
                color:#999;margin-right:.08rem;
            }
        }
        div:nth-child(2){
            width:100%;
            height:.74rem;
            display:flex;
            >div{
                width:25%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                img{
                    width:.3rem;
                    height:.3rem;
                    margin-bottom:.06rem;
                }
            }
        }
    }
`
const Center = styled.div`
    width:100%;
    overflow:hidden;
    
    div{
        width:100%;
        overflow:hidden;
        background:#fff;
        margin-top:.1rem;
        span{
            color:#333;
            font-size:.15rem;
            display:inline-block;
            width:100%;
            height:.48rem;
            line-height:.48rem;
            padding: 0 .18rem;
        }
    }
`

const Span = border({
    component:styled.span`
        color:#333;
        font-size:.15rem;
        display:inline-block;
        width:100%;
        height:.48rem;
        line-height:.48rem;
        padding: 0 .18rem;
    `,
    color:'#ebebeb',
    width:'1px 0 0 0'
})
export {All,Top,Main,Center,Span}