import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../views/home.jsx';
import add from '../actions/add';


function mapStateToProps(store) {
  return {
    history: store.history,
    historyDisplay: store.historyDisplay,
    displayValue: store.displayValue
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    addAction: (value) => {
      dispatch(add(value))
    }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;