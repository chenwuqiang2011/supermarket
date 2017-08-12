import React, {Component} from 'react'
import './Spinner.scss'

export default class Spinner extends Component{
    render(){
        if(!this.props.show){
            return null
        }        
        return (
            <div>
                <div className="dk-spinner-mask"></div>
                <div className="dk-spinner dk-spinner-three-bounce">
                    <div className="dk-bounce1"></div>
                    <div className="dk-bounce2"></div>
                    <div className="dk-bounce3"></div>
                </div>
            </div>
        )
    }
}