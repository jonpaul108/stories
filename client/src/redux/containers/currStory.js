import {
  connect
} from 'react-redux';
import storyInfo from '../actions/storyInfo.js';
import CurrStory from '../../components/currStory.jsx';

const mapStateToProps = state => {
  return {
    story: state.storyInfo.text,
    author: state.storyInfo.author,
    title: state.storyInfo.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChooseStory: (e) => {
      dispatch(storyInfo(story));
    }
  }
}

const VisibleCurrStory = connect(mapStateToProps, mapDispatchToProps)(CurrStory);

export default VisibleCurrStory;
