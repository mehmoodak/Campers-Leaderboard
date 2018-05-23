import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View.scss';

export default class View extends Component {

  render() {
    return (
        <tr className="camper-row">
          <th>{this.props.index + 1}</th>
          <td>
            <img className="camper-picture rounded" src={this.props.camper.img} alt="Camper"/>
            <a target="_label" href={'https://freecodecamp.com/' + this.props.camper.username}>
              {this.props.camper.username}
            </a>
          </td>
          <td className="number">{this.props.camper.recent}</td>
          <td className="number">{this.props.camper.alltime}</td>
        </tr>
    );
  }
}