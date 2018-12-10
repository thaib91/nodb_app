import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import Comments from './components/comments/Comments'
// import UpdatePost from './components/UpdatePost'
import './reset.css'
// import {Jumbotron} from 'react-bootstrap';
// import {Button} from 'react-bootstrap';
// import {Popover} from 'react-bootstrap'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      userInput: "",
      randomMeme: [],
      editedInput: ""

    }
    this.createPost = this.createPost.bind(this)
    this.editPost = this.editPost.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.updateEditInput = this.updateEditInput.bind(this)
  }




  componentDidMount() {
    axios.get(`/api/memes`)
      .then(res => {
        console.log(res)
        this.setState({
          randomMeme: [res.data]
        })
      })

    this.getPost()
  }

  randomClick() {
    axios.get(`/api/memes`)
      .then(res => {
        console.log(res)
        this.setState({
          randomMeme: [res.data],
        })

      })
  }

  editPost(updateID, text) {
    axios.put(`/api/memes/${updateID}`, { text })
      .then(res => {
        console.log(res)
        this.setState({
          comments: res.data,
        })
      })
  }

  updateEditInput=(val)=>{
    this.setState({editedInput:val})
  }
  

  // updateTodo=(idToUpdate, text)=>{
  //   axios.put(`/api/todo/${idToUpdate}`, {text:text})
  //     .then(res=>{
  //       this.setState({
  //         todos:res.data
  //       })
  //     })



  createPost(text) {
    axios.post(`/api/meme`, { text })
      .then(res => {
        console.log(res)
        this.setState({
          comments: res.data
        })
      })
  }

  getPost() {
    axios.get(`/api/meme`)
      .then(res => {
        this.setState({
          comments: res.data
        })
      })
  }

  deletePost(deleteID) {
    axios.delete(`/api/meme/${deleteID}`)
      .then(res => {
        this.setState({
          comments: res.data
        })
      })
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"


  render() {

    const displayMeme = this.state.randomMeme.map((memeOne) => {
      return (


        <div key={memeOne} className="memeOne">

          <span className='centerImage'>
          <img onClick={() => this.randomClick()} className="images" src={memeOne.meme} alt="" />

            <Comments createPostFn={this.createPost} />
          </span>



          {this.state.comments.map((comment, id) => {
            console.log(comment)
            return (
              <div>
              <input type="text" value={this.state.editedInput} onChange={(e)=>this.updateEditInput(e.target.value)}/>
              <button onClick={()=>this.editPost(+comment.id, this.state.editedInput)}>Edit</button>
              


              <span className="buttonHousing">
                {/* <UpdatePost editPostFn={this.editPost}
                  text={comment.text}
                  id={comment.id}
                /> */}
                <span className="commentText">{comment.text}</span> 
                {/* do I need to redefine comment.text */}
                <div className="deleteButton">
                  <button onClick={() => this.deletePost(comment.id)}>Delete</button>

                </div>
              </span>

              </div>
              )
            })
          }

      </div>
      )
    })


    return (
      <div className="App">

        <h1 className="title">Make an app with CRUD they said...</h1>
        {displayMeme}

        {/* <div>
            <button className="randomButton" onClick={() => this.randomClick()}></button>
          </div> */}

        <h1 className="footer">It'll be fun they said... #SayNoToPut</h1>

      </div>
    );
  }
}

export default App;
