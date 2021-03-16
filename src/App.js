import React,{Component} from 'react';
import './App.css';
import axios from 'axios';

import Navbar from './Components/Navbar';
import Searchimg from './Components/SearchImg';
import PictureList from './Components/PictureList';
import SearchImg from './Components/SearchImg';
import FixImg from './Components/FixImg';


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true
		};
	}

	componentDidMount() {
		this.performSearch();
	}

	performSearch = (query = 'Drink') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=XU8M6LWiY2sQ-Skw-pS0LwbZf3qym2soRaSV9e79RRY`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						< Navbar/>
						<Searchimg onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <PictureList data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}


