import React from 'react'

class Users extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    // 生成用户列表
    const userMap = user => (
      <li>
        <div className="avatar">
          <img src="" alt="头像" />
        </div>
        <div className="profile">
          <h4>user.username</h4>
          <p>user.signature</p>
        </div>
      </li>
    );
    return (
      <ul>
        {[1, 2, 3].map(userMap)}
      </ul>
    )
  }
}

export default Users
