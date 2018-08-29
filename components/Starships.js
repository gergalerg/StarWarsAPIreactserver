import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../pages/store';
import fetchStarships  from '../pages/actions';
import { logging } from 'react-server';
const logger = logging.getLogger(__LOGGER__);

import { GET_STARSHIPS, RECEIVE_STARSHIPS } from '../pages/counter-app/reducer';
class Starships extends Component {
	constructor(props) {
		super(props)
		fetchStarships().then(res=> {
			store.starships = res;
			store.dispatch(store, {type: GET_STARSHIPS});
			logger.info(`store: ${store.starships}`)
			})
	}
	render() {
		return (
      <p>
      	Hello
      </p>
		)
	}
}

const mapStateToProps = state => ({  
	starships: state.starships.map( s => ({
		name: s.name,
		model: s.model,
		manufacturer: s.manufacturer
	})),
})

export default connect(mapStateToProps, null)(Starships)
