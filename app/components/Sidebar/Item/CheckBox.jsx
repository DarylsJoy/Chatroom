import React from 'react'

class CheckBox extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <li className="checkbox">
        <h4>{this.props.text}</h4>
        <div>
          <input type="checkbox" id={this.props.id} />
          <label htmlFor={this.props.id}></label>
        </div>
      </li>
    )
  }
}

export default CheckBox
