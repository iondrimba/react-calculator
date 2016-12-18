import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../views/home.jsx';


function mapStateToProps(store) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;