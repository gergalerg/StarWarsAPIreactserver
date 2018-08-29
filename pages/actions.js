import { logging, ReactServerAgent } from "react-server";
const logger = logging.getLogger(__LOGGER__);
import { GET_STARSHIPS, RECEIVE_STARSHIPS } from './counter-app/reducer';

const fetchStarships = () => {
	return ReactServerAgent.get("https://swapi.co/api/starships/?format=json")
	.then( (response) => response.body)
	.then( data =>  data.results );
}

const dispatchStarships = () => {
	return (dispatch) => {
		return dispatch(fetchStarships());
	}
}

export default fetchStarships;


