import React from 'react'

import Users from './Users';
import Groups from './Groups';
import Settings from './Settings';

class Main extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = { content: 1 };
  }

  render() {
    // 根据状态展示不同列表
    let SideBarList;
    if (this.state.content === 1) {
      SideBarList = (
        <Users />
      );
    } else if (this.state.content === 2) {
      SideBarList = (
        <Groups />
      );
    } else {
      SideBarList = (
        <Settings />
      );
    }

    return (
      <div className="sidebar-main">
        <div className="sidebar-menu">
          <button onClick={() => this.setState({ content: 1 })}>用户</button>
          <button onClick={() => this.setState({ content: 2 })}>群组</button>
          <button onClick={() => this.setState({ content: 3 })}>设置</button>
        </div>
        <div className="sidebar-content">
          {SideBarList}
        </div>
      </div>
    )
  }
}

export default Main
