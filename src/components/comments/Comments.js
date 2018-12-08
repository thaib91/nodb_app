import React, { Component } from 'react';

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
            <div>
            <input onChange={(e)=>this.updateText(e.target.value)}/>

            <div>
                <button onClick={this.createNextPost}>Create Post</button>
            </div>
            </div>

        )
    }
}