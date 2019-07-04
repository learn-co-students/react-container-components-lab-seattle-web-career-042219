import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
const KEY = `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

	state = {
		reviews: [],
		searchTerm: ""
	}

	handleSubmit = ev => {
		ev.preventDefault();
		const searchTerm = ev.target[0].value
		this.setState(prevState => ({searchTerm: searchTerm}), () => {this.fetch()})
	}

	render() {
		return (
			<div className="searchable-movie-reviews">
				<h1>Searchable NYT Film Reviews</h1>
				<form className="form" onSubmit={this.handleSubmit} >
					<input name='searchTerm' type="text" />
					<input type="submit" value="Search" />
				</form>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
	
	fetch = () => {
		fetch(URL+`searchTerm=${this.state.searchTerm}&`+KEY)
		.then(res => res.json())
		.then(json => this.setState({reviews: json.results}))
		.catch(err => console.log(err))
	}

}

export default SearchableMovieReviewsContainer

