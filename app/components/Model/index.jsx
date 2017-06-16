import React from 'react'

import EditProfile from './Item/EditProfile'
import EditGroup from './Item/EditGroup'

class Model extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="modal" style={{ display: true ? 'none' : 'block' }}>
        {
          true
            ?
            <EditProfile />
            :
            <EditGroup />
        }
      </div>
    )
  }
}

export default Model
