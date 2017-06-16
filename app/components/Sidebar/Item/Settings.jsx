import React from 'react'

import CheckBox from './CheckBox'

class Settings extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ul>
        <CheckBox id={'toggleReceive'} text={'接收私聊'} />
        <CheckBox id={'toggleSound'} text={'声音提醒'} />
        <CheckBox id={'toggleNotice'} text={'桌面提醒'} />
        <CheckBox id={'toggleScreen'} text={'切换全屏'} />
      </ul>
    )
  }
}

export default Settings
