import React, {Component} from 'react';

import { Button, Switch, Tag, Layout} from "element-react";
// import "element-theme-default";

class AppComponent extends Component{
    render(){
        return (
            <div>
            	<Button type = "primary">123</Button>
            	<div>
                <Tag>标签一</Tag>
                <Tag type="gray">标签二</Tag>
                <Tag type="primary">标签三</Tag>
                <Tag type="success">标签四</Tag>
                <Tag type="warning">标签五</Tag>
                <Tag type="danger">标签六</Tag>
              </div>
            </div>
        )
    }
}

export default AppComponent