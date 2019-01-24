import React from 'react';
import VisualStoryList from '../redux/containers/storyList.js';
import VisualCurrStory from '../redux/containers/currStory.js';
import styles from '../css/storyPage.css';

class StoryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.handleGetAllStories();
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.border}>
          <VisualStoryList />
        </div>
        <div className={styles.currStory}>
          <VisualCurrStory />
        </div>
      </div>
    )
  }
}

export default StoryPage;