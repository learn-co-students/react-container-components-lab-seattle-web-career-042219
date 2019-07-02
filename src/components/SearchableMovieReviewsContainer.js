import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  handleSearchInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            id="search-input"
            type="text"
            onChange={this.handleSearchInputChange}
          />
          <input type="submit" value="Search" />
        </form>
        <h3>Results</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
