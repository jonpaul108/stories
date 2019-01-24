import React from 'react';
import Admin from './admin.jsx';
import VisualStoryList from '../redux/containers/storyList.js';
import CurrStory from '../redux/containers/currStory.js';
import styles from '../css/app.css';
import VisualChangePage from '../redux/containers/changePage.js';
import VisualHeader from '../redux/containers/header.js';
import VisualFooter from '../redux/containers/footer.js';
import {
  connect
} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Billy-Bill-Billson',
      signedIn: false
    }
  }

  render() {
    return (
      <div className={styles.body}>
        <VisualHeader />
        <div className={styles.main}>
          <VisualChangePage />
        </div>
        <VisualFooter />
      </div>
    )
  }
}

export default App;