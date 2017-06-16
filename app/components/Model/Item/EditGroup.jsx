import React from 'react'

class EditGroup extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="edit-group">
        <h2>创建群组</h2>
        <p className="warning">warning</p>
        <div>
          <img src="http://7xnpxz.com1.z0.glb.clouddn.com/groupdefault.png" alt="头像" />
          <input type="file" />
        </div>
        <form action="#">
          <input type="text" placeholder="请输入群组名" maxLength="10" />
          <textarea placeholder="请输入群组简介" maxLength="30"></textarea>
          <input type="submit" value="确认" />
          <input type="button" value="取消" />
        </form>
      </div>
    )
  }
}

export default EditGroup
