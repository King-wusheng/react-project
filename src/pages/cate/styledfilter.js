import styled from 'styled-components'

const Main = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    position:absolute;
    top:0;
    left:${props=>props.active?'0':'100%'};
    transition:1s all ease;
    >div{
        width:100%;
        height:100%;
        display:flex;
    }
`
const Leftfilter = styled.div`
    z-index:1000;
    background:#333;
    opacity:${props=>props.active?'.5':'0'};
    height:100%;
    width:.45rem

`
const RightFilter = styled.div`
    z-index:1000;
    background:#fff;
    width:3.30rem;
    padding-top:.32rem;
    position:relative;
    >div:nth-child(1){
        width : 100%;
        height :auto ;
        padding-left :.16rem;
        text-align: left;
        margin-bottom: .19rem;
    }

    >div:nth-child(2){
        padding:0 !important;
        color:#333;
        margin-bottom:.36rem;
        width:100%;
        overflow:hidden;
        padding:.14rem 0 0 0;
        display:flex;
        >div{
            margin:.02rem .15rem 0 0;
            width:.92rem;
            height:.29rem;
            line-height:.29rem;
            text-align:center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            background:#f4f4f8; 
            font-size:.12rem;
        }
    }
    >div:nth-child(3){
        width : 100%;
        height :auto ;
        padding-left :.16rem;
        text-align: left;
        margin-bottom: .19rem;
    }
    >div:nth-child(4){
        width: 100%;
        height: .28rem ;
        margin :.16rem 0 .36rem 0;
        padding: 0 .16rem;
        display: flex ;
        input{
            width: 1.22rem ;
            height :100%;
            background: #f4f4f8;
            border-left: 0 ;
            border-top: 0 ;
            border-bottom: 0;
            border-right: 0;
            text-align: center;
            line-height :.28rem;
            font-size :.12rem;
        }
            
        >div{
            text-align :center;
            display :flex ;
            align-items: center;
            justify-content :center;
            margin: 0 .1rem;
        } 
            
    }
    >div:nth-child(5){
        width: 100%;
        height: auto ;
        padding :0 .16rem ;
        display: flex;
        justify-content: space-between;
        >div:nth-child(1){
            display: inline-block;
            width: auto;
        }
        >div:nth-child(2){
            color: #999;
            font-size: .12rem;
            display: flex;
            align-items: center;
        }  
    }

    >div:nth-child(6){
        width:100%;
        overflow:hidden;
        display:flex;
        div{
            float:left；
            margin:.12rem .15rem 0 0;
            width:.92rem;
            height:.29rem;
            line-height:.29rem;
            text-align:center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            background:#f4f4f8; 
            font-size:.12rem;
        }
    }

    >div:nth-child(7){
        width:100%;
        position: absolute  ;
        top: 6.22rem;
        left: 0  ;
        display :flex;
        height: .44rem;
        font-size :.16rem;
        div:nth-child(1){
            width:50%;
            text-align :center ;
            line-height :.44rem ;
        }
            
        div:nth-child(2){
            width:50%;
            text-align :center ;
            line-height: .44rem ;
            background: #ff464e;
            color: white;
        }
            
    }

`

export {
    Main,
    Leftfilter,
    RightFilter
}