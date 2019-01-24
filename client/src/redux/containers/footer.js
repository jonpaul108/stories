import {connect} from 'react-redux';
import Footer from '../../components/footer.jsx';
import adminSignIn from '../actions/adminSignIn.js';
import adminSignOut from '../actions/adminSignOut.js';
import changePage from '../actions/changePage.js';

const mapStateToProps = state => {
  return {
    signedIn: state.signedIn.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSignIn: (username, pass) => {
      adminSignIn(username, pass, dispatch)
    },
    handleSignOut: () => {
      dispatch(adminSignOut())
    },
    handleChangePage: (page) => {
      dispatch(changePage(page))
    }
  }
}

const VisualFooter = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default VisualFooter;
