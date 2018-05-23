import React, {Component} from 'react';
import './App.scss';
import Option from "../Option/Option";
import View from '../View/View'


class App extends Component {
  constructor(props) {
    super(props);
    this.changeOrder = this.changeOrder.bind(this);
  }

  changeOrder(order) {
    console.log('Order: ', order);

    if (this.props.order !== order) {
      this.props.changeOrder(order);
    }
  }

  componentDidMount() {
    this.props.loadCampers(this.props.order);
  }

  render() {

    const campers = this.props.campers.map((camper, index) => {
      return (
          <View key={index} index={index} camper={camper}/>
      );
    });

    return (
        <div className="container">
          <div className="camper-leaderboard">
            <h1 className="title">
              Campers Leaderboard
            </h1>
            <div className="options">
              <Option isActive={this.props.order === 'RECENT'} sort="RECENT" text="Recent 30 Days"
                      onOptionChange={this.changeOrder}/>
              <Option isActive={this.props.order === 'ALLTIME'} sort="ALLTIME" text="All Time Top"
                      onOptionChange={this.changeOrder}/>
            </div>
            <div className="table-responsive">
              <table className="table points-table">
                <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Camper Name</th>
                  <th className="number">Points in 30 Days</th>
                  <th className="number">All Time Points</th>
                </tr>
                </thead>
                <tbody>
                  {campers}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
