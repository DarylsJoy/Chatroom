import React from 'react'

class App extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    )
  }
}

export default App
