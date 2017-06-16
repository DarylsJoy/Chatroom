import React from 'react'

import Nav from './Item/Nav'
import Messages from './Item/Messages'
import Input from './Item/Input'

class Main extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="main">
        <Nav />
        <Messages />
        <Input />
      </div>
    )
  }
}

export default Main
