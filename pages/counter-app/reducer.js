
const GET_STARSHIPS = "GET_STARSHIPS";
const RECEIVE_STARSHIPS = "RECEIVE_STARSHIPS";

const starships = (state = {
	isFetching: false,
	starships: []
}, action) => {
	switch(action.type) {
		case GET_STARSHIPS:
			return assign({}, state, {
				isFetching: true,
				starships: state.starships
			});
		case RECEIVE_STARSHIPS:
			return assign({}, state, {
				isFetching: false,
				starships: action.starships
			});
		default:
			return state;
	}
}

export default starships;