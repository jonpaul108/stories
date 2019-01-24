import {connect} from 'react-redux';
import ChangePage from '../../components/changePage.jsx';
import changePage from '../actions/changePage.js';

const mapStateToProps = state => {
  return {
    page: state.page.item
  }
}

const mapDispatchToProps = dispatch => {
return {
   handlePageClick: (e) => {
    const page = e.target.value;
    dispatch(changePage(page));
  }
}
};

const VisualChangePage = connect(mapStateToProps, mapDispatchToProps)(ChangePage);

export default VisualChangePage;
