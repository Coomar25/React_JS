import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/reducers'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})