import React from 'react'
import { RootElement } from 'react-server'
import { RootProvider } from 'react-server-redux'
import Starships from '../../components/Starships'
import store from '../store'
import { logging, } from "react-server";
const logger = logging.getLogger(__LOGGER__);

import { GET_STARSHIPS, RECEIVE_STARSHIPS } from './reducer';

export default class StarshipsPage {
	getElements() {
		return [
			<RootProvider store={store}>
				<RootElement key={0}>
					<Starships />
				</RootElement>
			</RootProvider>,
		]
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'Redux Counter app, powered by React Server'},
			{name: 'generator', content: 'React Server'},
		]
	}
}
