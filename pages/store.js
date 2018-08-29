import { createStore } from 'redux'
import reducer from './counter-app/reducer'

const store = createStore(
	reducer
)

export default store;
	
