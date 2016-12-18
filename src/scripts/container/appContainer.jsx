import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../views/home.jsx';
import add from '../actions/add';


function mapStateToProps(store) {
  return {
    history: store.history,
    displayValue: store.displayValue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: bindActionCreators(add, dispatch)
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;