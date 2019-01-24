import React from 'react';
import VisualStoryList from '../redux/containers/storyList.js';
import VisualCurrStory from '../redux/containers/currStory.js';
class Blog extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <VisualStoryList />
        <VisualCurrStory />
      </div>
    )
  }
}

export default Blog;