import React from 'react'

class EditProfile extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="edit-user">
        <h2>个人资料</h2>
        <p className="warning">warning</p>
        <div>
          <img src="" alt="头像" />
          <input type="file" />
        </div>
        <p>{`昵称：abc`}</p>
        <p>{`注册时间：2017-5-30`}</p>
        <label htmlFor="signature">签名：</label>
        <input type="text" id="signature" placeholder="请输入签名" maxLength="25" />
        <button>确认</button>
        <button>取消</button>
      </div>
    )
  }
}

export default EditProfile
