import styled from 'styled-components'
import border from 'components/styled/border'
const Search = border({
    component:styled.div`
        height:.3rem;
        margin: .12rem;
        border-radius: 5px;
        background-color: #fff;
        padding: .03rem 0;
        display:flex;
        align-items:center;
        img{
            margin-left:.06rem;
            width:.24rem;
            height:.24rem;
        }
        div{
            color:#999;
            margin-left:.12rem
        }
    `,
    color:'#bbb',
    radius:8
})
const ClassNav = styled.div`
    
`
const Category = styled.div`
    
`
const ClassContent = styled.div`
    
`
export {
    Search,
    ClassNav,
    ClassContent,
    Category
}  

