import React, { Component } from 'react';
// import App from '../App';
import "../App.css"

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
        this.updatePost = this.updatePost.bind(this);
    }

    updateText(value) {
        console.log(value)
        this.setState({ text: value });
    }
    //prop is editPostFn
    updatePost() {
        this.props.editPostFn(this.props.id, this.state.text)

    }


    render() {
        return (
            <div className="editHousing">
                <input className="editBox" value={this.state.text} onChange={(e) => this.updateText(e.target.value)} />
                <div>
                    <button className="editButton" onClick={this.updatePost}>Edit</button>

                </div>
            </div>
        )
    }
}