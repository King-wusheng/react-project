import styled from 'styled-components'
import border from 'components/styled/border'
const CateALL = styled.div`
    width:100%;
    height:100%;
    overflow:scroll;
    svg:not(:root){
        color:#333
    }
`
const Nav = border({
    component:styled.div`
        width:100%;
        height:.4rem;
        padding:.05rem 0;
        color:#666;
        div{
            float:left;
            width:20%;
            height:100%;
            text-align:center;
            line-height:.3rem;
        }
    `,
    width:'1px 0 0 0 ',
    color:'#ebebeb',

})

const Content = styled.div`
    width:100%;
    overflow:hidden
`

export {
    CateALL,
    Nav,
    Content
}