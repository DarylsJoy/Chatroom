import React from 'react'

class System extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="message-system">
        <span>{text}</span>
      </div>
    )
  }
}

export default System
