import styled from 'styled-components'

const HomeContainer = styled.div `
  height: 100% ;
`

const Cen_Ul = styled.ul `
  width:100%;
  height:.84rem;
  li{
    width 25%;
    float:left;
    height : 100%;
    img{
      width : 100%;
      height:100%;
    }
  }
`
const Cen_UlThr = styled.div`
  width:100%;
  height:1.08rem;
  img{
    width 100%;
    height:100%;

  }
`
const Cen_UlF = styled.div`
  width:100%;
  height:.48rem;
  margin:.1rem 0
  img{
    width:100%;
    height:100%;
  }
`
const Cen_UlT = styled.ul`
  width:100%;
  height:2.28rem;
  li{
    float:left;
    width:50%;
    height:100%;
    img{
      width:100%;
      height:50%;
    }
  }
  li:nth-child(1){
    img:nth-child(1){
      height:100% !important;
    }
  }
  
`
const Top = styled.div`
  >div {
    width :100%;
    height :.44rem;
    background :#fff ;
    display: flex;
    align-items: center;
    padding: 0 .15rem ;
    justify-content: space-around;
    div:nth-child(1) {
      flex :317;
      height: .3rem;
      display: flex;
      background: #f2f2f2;
      align-items: center;
      border-radius:.2rem;
      img:nth-child(1) {
          width: .15rem;
          height: .15rem;
          margin-right: .1rem;
          margin-left: .1rem;
      }   
      img:nth-child(2) {
        width: .2rem;
        height: .15rem;
      } 
      div {
        flex: 160;
        background: #f2f2f2;
        border none;
        color:rgb(153, 153, 153);
        font-size:.12rem;
        margin-left : .1rem
      }  
          
      
          
    }
        
  div:nth-child(2) {
    width: .44rem;
    height: 100%;
    flex:44;
    img{
      width :100%;
      height : 100%;
    }
      
  }
        
  }
    
  
`


export { 
    HomeContainer,
    Top,
    Cen_Ul,
    Cen_UlT,
    Cen_UlThr,
    Cen_UlF
}