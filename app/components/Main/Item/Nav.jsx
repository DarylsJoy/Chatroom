import React from 'react'

class Nav extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <nav className="main-nav">
        <div>
          <img src="" alt="头像" />
        </div>
        <h2>name</h2>
        <p>signature</p>
      </nav>
    )
  }
}

export default Nav
