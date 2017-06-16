import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import {
  fromJS
} from 'immutable';
import rootReducer from '../reducers';

const initialState = fromJS({
  user: null,
  target: {
    private: false,
    name: 'Group'
  },
  users: [],
  groups: [{
    name: 'Group',
    signature: '聊天室默认群组',
    avatar: 'http://7xnpxz.com1.z0.glb.clouddn.com/groupdefault.png',
    msg: []
  }],
  warning: '',
  modal: 0,
  settings: {
    receive: true,
    sound: true,
    notice: true,
    screen: false
  }
});

// 中间件
const middleware = [thunk];

// 利用compose增强store，与中间件共同使用
const finalCreateStore = compose(
  applyMiddleware(...middleware)
)(createStore);

export default finalCreateStore(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);