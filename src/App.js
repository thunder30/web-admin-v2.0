import React from 'react'
import AuthProvider from './contexts/AuthProvider'
import Router from './router'
import './style/app.less'
import { Provider } from 'react-redux'
import {store} from './redux/store'

function App() {
    return (
        <Provider store={store}>
        <AuthProvider>
            <Router />
        </AuthProvider>
        </Provider>
    )
}

export default App
