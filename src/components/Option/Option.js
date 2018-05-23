import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Option.scss';

class Options extends Component {
  constructor(props) {
    super(props);

    this.onOptionChange = this.onOptionChange.bind(this);
  }

  onOptionChange(e){
    e.preventDefault();
    this.props.onOptionChange(this.props.sort);
  }

  render() {
    let isActive = this.props.isActive ? (
        <button className="btn my-btn active" onClick={this.onOptionChange}> {this.props.text} </button>
    ) : (
        <button className="btn my-btn" onClick={this.onOptionChange}> {this.props.text} </button>
    );

    return (
        isActive
    );
  }
}

export default Options;