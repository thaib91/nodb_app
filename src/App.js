import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import Comments from './components/comments/Comments'
import UpdatePost from './components/UpdatePost'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memes: [],
      comments: [],
      userInput: " ",
      randomMeme: [],
      editedInput:""

    }
    this.createPost=this.createPost.bind(this)
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

  // editPost(updateID){
  //   axios.put(`/api/memes/:id/${updateID}`, {text})
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         comments: res.data
  //       })
  //     })
  // }



  createPost(text){
    axios.post(`/api/meme`, {text})
      .then(res =>{
        console.log(res)
        this.setState({
          comments: res.data
        })
      })
  }

  getPost(){
    axios.get(`/api/meme`)
      .then(res=>{
        this.setState({
          comments: res.data
        })
      })
  }

  deletePost(deleteID){
    axios.delete(`/api/meme/${deleteID}`)
      .then(res=>{
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


  render() {


    const displayMeme = this.state.randomMeme.map((memeOne) => {
      return (
          <div key={memeOne}>
            <img onClick={() => this.randomClick()}  className="images" src={memeOne.meme} alt="" />
          </div>
      )


    })


    return (
      <div className="App">
      {displayMeme}

      <Comments createPostFn={this.createPost}/>
    
        {this.state.comments.map((comment)=>{
          console.log(comment)
          return(
            <div key={comment.id}>
              {comment.text}
              <div>
              <button onClick={()=>this.deletePost(comment.id)}>Delete</button>
              <button onClick={()=>this.editPost(comment.id)}>Edit</button>
              </div>
            </div>
          )
        })}


     
        {/* <div>
            <button className="randomButton" onClick={() => this.randomClick()}></button>
          </div> */}

      </div>
    );
  }
}

export default App;
