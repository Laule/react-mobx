import React from 'react';
import {observer,inject} from 'mobx-react';
@inject("homeStore")
@observer
class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div>
                <h1>首页number：{this.props.homeStore.homeNum}</h1>

<button onClick={()=>{this.props.homeStore.addNum()}}>
    添加
</button>
<button onClick={()=>{this.props.homeStore.lessNum()}}>
    减去
</button>


                <button onClick={()=>{
                    this.props.history.push("/one")
                }}>
                    跳转到第一个页面
                </button>  
            </div>
        )
    }
}

export default Home