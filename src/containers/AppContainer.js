import {connect} from 'react-redux';
import {changeOrderStatus, loadCampers} from '../redux/actions';
import App from '../components/App/App';

const mapStateToProps = state => {
  return {
    order: state.order,
    campers: state.campers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeOrder: order => {
      dispatch(changeOrderStatus(order));
      dispatch(loadCampers(order.toLowerCase()));
    },
    loadCampers: type => {
      dispatch(loadCampers(type.toLowerCase()));
    }
  }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
