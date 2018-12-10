import React, { Component } from 'react';
import '../../App.css'

export default class Comments extends Component {
    constructor() {
        super();

        this.state = {
            text: ''
        }

        this.createNextPost = this.createNextPost.bind(this)
    }

    updateText(text){
        this.setState({text})
    }

    createNextPost(){
        this.props.createPostFn(this.state.text)
        this.setState({
            text:''
        })
    }

    render() {
        return (
            <div className="inputs">

            
            <input className="inputBox" onChange={(e)=>this.updateText(e.target.value)}/>

                <div>
                <button className="createButton" onClick={this.createNextPost}>Create Post</button>
                </div>
            
            </div>

        )
    }
}