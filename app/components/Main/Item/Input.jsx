import React from 'react'

class Input extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="main-input">
        <a className="button-image icon-image">
          <input type="file"
          />
        </a>
        <input
          type="text" placeholder="Type a message here"
        />
        <button
          className="button-send"
        >Send</button>
      </div>
    )
  }
}

export default Input
