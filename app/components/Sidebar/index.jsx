import React from 'react'

import Nav from './Item/Nav';
import Main from './Item/Main';
import Search from './Item/Search';

class Sidebar extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: false,
      keyword: ''
    };
  }

  render() {
    const menu = this.props.menu;
    let resStyle = {};
    if (document.body.clientWidth <= 886) {
      resStyle = { flex: this.props.menu ? '1' : 'none' };
    }

    return (
      <aside className="sidebar" style={resStyle}>
        <Nav
          menu={menu}
          toggleMenu={this.props.toggleMenu}
          user={this.props.user}
          signout={this.props.signout}
          showEditUser={() => this.props.changeModal(1)}
          search={keyword => this.setState({ search: true, keyword })}
        />
        {
          this.state.search
            ?
            <Search
              menu={menu}
              users={this.props.users}
              groups={this.props.groups}
              keyword={this.state.keyword}
              privateChat={this.props.privateChat}
              joinGroup={this.props.joinGroup}
              back={() => this.setState({ search: false })}
            />
            :
            <Main
              menu={menu}
              users={this.props.users}
              groups={this.props.groups}
              settings={this.props.settings}
              privateChat={this.props.privateChat}
              joinGroup={this.props.joinGroup}
              showEditGroup={() => this.props.changeModal(2)}
              toggleReceive={this.props.toggleReceive}
              toggleSound={this.props.toggleSound}
              toggleNotice={this.props.toggleNotice}
              toggleScreen={this.props.toggleScreen}
            />
        }
      </aside>

    );
  }
}

export default Sidebar
