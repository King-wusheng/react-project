import styled from 'styled-components'

const GoodList = styled.div`
    width:50%;
    height:2.43rem;
    float:left;
    border-right:2px solid #eee;
    border-top:2px solid #eee;
    div:nth-child(1){
        width:100%;
        height:1.87rem;
        position:relative;
        img:nth-child(1){
            width:.45rem;
            height:.45rem;
            display:${props=>props.active?'active':'none'};
            position:absolute;
            left:0;
            top:0;
        }
        img:nth-child(2){
            width:100%;
            height:100%;

        }
    }
    div:nth-child(2){
        color:#bbb;
        font-size:.12rem;
        margin-top:.06rem;
        padding: 0 .08rem;
        span:nth-child(1){
            color:#ff464e;
            font-size:.14rem;
            margin-right:.05rem;
        }
        span:nth-child(2){
           text-decoration: line-through;
        }
    }
    div:nth-child(3){
        width:100%;
        padding: 0 .62rem 0 .08rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color:#3b3b3b;
    }
`
export {
    GoodList,

}
