import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'

import './styles/reset.css'
import './styles/global.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker()
