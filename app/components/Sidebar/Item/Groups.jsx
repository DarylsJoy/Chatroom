import React from 'react'

class Groups extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    // 生成群组列表
    const groupMap = group => (
      <li>
        <div className="avatar">
          <img src="" alt="头像" />
        </div>
        <div className="profile">
          <h4>group.name</h4>
          <p>group.signature</p>
        </div>
      </li>
    );

    return (
      <ul>
        <button className="create-group">创建群组</button>
        {[1, 2, 3].map(groupMap)}
      </ul>
    )
  }
}

export default Groups
