import styled from 'styled-components'

const Item = styled.div`
    width:100%;
    overflow:hidden
                 
`
const Logo = styled.div`
    display:${props=>props.active?'block':'none'}
`
export {
    Item,
    Logo
}