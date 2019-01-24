import React from 'react';
import axios from 'axios';

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      url: '',
      signedIn: false,
      type: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(e) {
    console.log('handleSubmit');
    e.preventDefault();
    const type = this.state.type;
    const title = this.state.title;
    const author = this.state.author;
    const url = this.state.url;
    const kind = this.state.type
    axios.post(`/new/${type}/${title}`, {
        title,
        author,
        url,
        kind
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log('failed to post: ', err);
      })
  }

  handleOnChange(e) {
    const val = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: val
    })
  }

  render() {
    const {
      title,
      author,
      url,
      signedIn,
      type
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type='text' placeholder='title' name='title' value={title} onChange={this.handleOnChange}></input>
          <input type='text' placeholder='author' name='author' value={author} onChange={this.handleOnChange}></input>
          <input type='text' placeholder='url' name='url' value={url} onChange={this.handleOnChange}></input>
          <select name='type' value={type} onChange={this.handleOnChange}>
            <option value=''></option>
            <option value='story'>story</option>
            <option value='blog'>blog</option>
          </select>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default Admin;