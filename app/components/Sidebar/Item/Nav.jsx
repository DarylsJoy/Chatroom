import React from 'react'

class Nav extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="sidebar-nav">
        <div className="sidebar-profile">
          <button
            className="avatar"
            title="个人资料"
            onClick={this.props.showEditUser}
          >
            <img
              src={this.props.user.avatar}
              alt="头像"
            />
          </button>
          <div className="profile">
            <h3>{this.props.user.username}</h3>
            <p>{this.props.user.signature}</p>
          </div>
          <div className="button-wrapper">
            <button
              className="icon-signout"
              title="退出登录"
              onClick={this.props.signout}
            ></button>
            <button
              className="icon-menu"
              onClick={() => this.props.toggleMenu(!this.props.menu)}
            ></button>
          </div>
        </div>
        <div className="input-search">
          <i className="icon-search"></i>
          <input type="text"
            placeholder="Seach here"
            onKeyUp={this.handleSearch.bind(this)}
          />
        </div>
      </div>
    )
  }

  handleSearch(e) {
    if (e.keyCode === 13) {
      const keyword = e.target.value.replace(/(^\s*)|(\s*$)/g, '');
      if (keyword !== null && keyword !== '') {
        e.target.value = '';
        this.props.search(keyword);
      }
    }
  };
}

export default Nav
