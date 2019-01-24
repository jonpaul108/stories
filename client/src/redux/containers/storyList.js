import {
  connect
} from 'react-redux';
import storyInfo from '../actions/storyInfo.js';
import StoryList from '../../components/storyList.jsx';

const mapStateToProps = state => {
  return {
    list: state.allStories.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleStoryLinkClick: (author, title, link) => {
      console.log('handleStoryLinkClick: ');
      storyInfo(author, title, link, dispatch);
    }
  }
}

const VisibleStoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryList);

export default VisibleStoryList;
