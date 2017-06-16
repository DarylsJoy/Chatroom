import React from 'react'

class User extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className={`message-container${this.props.self ? ' message-self' : ''}`}>
        <div className="message-sender">
          <img src="" alt="头像" />
        </div>
        <div className={`message-content${this.props.self ? '' : ' message-other'}`}>
          <div>username<span className="message-time">time</span></div>
          <div className="message-text">
            text
          </div>
        </div>
      </div>
    )
  }
}

export default User
