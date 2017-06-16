import React from 'react'

class NoticeAudio extends React.PureComponent {
  render() {
    return (
      <audio style={{ display: 'none' }}>
        <source src="http://7xnpxz.com1.z0.glb.clouddn.com/notice.mp3" type="audio/mp3" />
        <source src="http://7xnpxz.com1.z0.glb.clouddn.com/notice.ogg" type="audio/ogg" />
      </audio>
    )
  }
}

export default NoticeAudio
