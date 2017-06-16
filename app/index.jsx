import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'

import store from './store'
import RouteMap from './router/routeMap'

import './static/css/normalize.less'
import './static/css/App.less'

render(
  <Provider store={store}>
    <RouteMap history={hashHistory} />
  </Provider>,
  document.getElementById('root')
)
