import {connect} from 'react-redux';
import changePage from '../actions/changePage.js';
import Header from '../../components/header.jsx';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    handleOnClick:(page) => {
      // const page = e.target.value;
      // console.log('visualheader changepage: ', page);
      dispatch(changePage(page))
    }
  }
}

const VisualHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default VisualHeader;
