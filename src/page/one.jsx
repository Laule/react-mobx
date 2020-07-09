import React from 'react';
import {observer,inject} from 'mobx-react';
@inject("homeStore")
@inject("oneStore")
@observer
class One extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state ={};
    }
    render()
    {
        return(
            <div>
                <h1>One 页面</h1>
                <h1>

                    首页的number：{this.props.homeStore.homeNum}
                </h1>
                <h2>
                    oneStore的number：{this.props.oneStore.oneNum}
                </h2>
                <button onClick={()=>{this.props.history.push('/')}}>
                    跳转到首页
                </button>  
            </div>
        )
    }
}

export default One