import React , {Component} from 'react'
import {Main,Leftfilter,RightFilter} from './styledfilter'
import {withRouter} from 'react-router-dom'


class FilterItem extends Component{
    render(){
        return (
            <Main active={this.props.show}>
                <div>
                    <Leftfilter activeleft={this.props.show} onClick={this.props.filterGood}>
                    </Leftfilter>
                    <RightFilter>
                        <div>筛选</div>
                        <div>
                            <div>会员专属</div>
                            <div>卷皮优选</div>
                            <div>卷皮直发</div>
                        </div>
                        <div>价格区间(元)</div>
                        <div>
                            <input type="number"  placeholder="最低价"  v-model="low" />
                            <div>——</div>
                            <input type="number" placeholder="最高价"  v-model="high" />
                        </div>
                        <div>
                            <div>分类</div>
                            <div>
                                更多
                            </div>
                        </div>
                        <div>
                            <div>女士棉服</div>
                            <div>女士羽绒服</div>
                            <div>女士皮衣皮草</div>
                        </div>
                        <div>
                            <div >重置</div>
                            <div >确定</div>
                        </div>
                    </RightFilter>
                </div>
            </Main>
        )
    }
    
}

export default withRouter(FilterItem)
