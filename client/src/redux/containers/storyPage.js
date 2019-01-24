import {connect} from 'react-redux';
import getAllStories from '../actions/getAllStories.js';
import StoryPage from '../../components/storyPage.jsx';

const mapStateToProps = state => {
  return {
    stories: state.allStories.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetAllStories: () => {
      getAllStories(dispatch)
    }
  }
}

const VisualStoryPage = connect(mapStateToProps, mapDispatchToProps)(StoryPage);

export default VisualStoryPage;
