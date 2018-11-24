import styled from 'styled-components'

const Menu = styled.div`
    width:100%;
    overflow:hidden;
    position:relative;
`
const MenuNav = styled.ul`
    width:100%;
    height:.44rem;
    background :#fff;
`
const MenuItem = styled.li`
    width:50%;
    height:100%;
    color:#333;
    color:${ props => props.active ? '#ff464e' : '#333' };
    float:left;
    font-size:.15rem;
    text-align:center;
    line-height:.44rem;
    span{
        text-align:center;
        line-height:.44rem;
    }
`
const MenuBottom = styled.div`
    width:50%;
    height:.02rem;
    background:#ff464e
    position:absolute;
    left: ${ props => props.active === 'left' ? 0 : '50%'};
    transition: all .3s ease-in;
`
const MenuList = styled.div`
    width:100%;
    margin-top:.02rem;
    overflow:hidden;
    .sc-bZQynM{
        float:left
    }
    div{
        width:50%;
        height:2.44rem;
        background:#fff;
        div{
            width:100%;
            height:100%;
            position:relative;
            div:nth-child(1) {
                width: 100%  ;
                height: 1.87rem  ;
                img  {
                    width :100%  ;
                    height: 100% ;
                }
                     
                    
                div{
                    position : absolute  ;
                    bottom  :-.13rem  ;
                    right :.13rem  ;
                    width : .51rem  ;
                    height  :.26rem  ;
                    padding:0 !important;
                    background-color : #fff  ;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }     
            div:nth-child(2)  {
                width: 100%  ;
                height :.22rem  ;
                margin-top : .06rem  ;
                padding: 0 .08rem  ;
                font-size : .15rem  ;
                color: #ff464e  ;
                del  {
                    margin-left :.05rem;
                    text-decoration : line-through  ;
                    color: #ccc  ;
                    font-size : .10rem  ;
                }
            }
            div:nth-child(3)   {
                
                position : absolve  ;
                font-size : 0.12rem  ;
                color : #3b3b3b  ;
                padding-left : 0.08rem  ;
                padding-right:  .62rem  ;
                overflow : hidden  ;
                white-space  :nowrap  ;
                text-overflow : ellipsis  ;
                margin-bottom :0.12rem  ;
                p {
                    color : #bbb  ;
                    position : absolute  ;
                    font-size  :.12rem  ;
                    right :.12rem  ;
                } 
            }
        }
    }

`
export {
    Menu,
    MenuNav,
    MenuBottom,
    MenuItem,
    MenuList,
}