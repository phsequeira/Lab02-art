import React from 'react';

export default class Dropdown extends React.Component {
  render() {
    return (
          <select 
          value={this.props.value}
          onChange={this.props.handleChange}>  
            { 
            this.props.options.map(option => 
                <option value={option}>{option}</option>)
            }

          </select>
)
}
}