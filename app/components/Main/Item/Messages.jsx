import React from 'react'

import User from './User'
import System from './System'

class Message extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {

    // 生成消息列表
    const msgMap = (msgItem, index) => {
      /*if (msgItem.type === 'system') {
        return <System key={index} text={msgItem.text} />;
      }
      if (msgItem.sender === username) {
        return (
          <User
            key={index}
            self
            avatar={avatar}
            username={username}
            time={msgItem.time}
            type={msgItem.type}
            text={msgItem.text}
          />
        );
      }*/

      return (
        <User
          key={index}
          self={false}
        />
      );
    };

    return (
      <div className="main-messages" >
        {[1, 2, 3].map(msgMap)}
      </div>
    )
  }
}

export default Message
