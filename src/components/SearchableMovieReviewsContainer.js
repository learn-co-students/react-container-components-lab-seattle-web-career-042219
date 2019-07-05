import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'hqo4Rt9ua7XriuVZeSp1xrjCEWkzulJJ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: null,
      searchTerm: ""
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target[0].value)
    //this.setState({searchTerm: event.target[0].value}, () => {
      fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + this.state.searchTerm + '&api-key=hqo4Rt9ua7XriuVZeSp1xrjCEWkzulJJ')
      .then(resp => resp.json())
      .then(data => this.setState({reviews: data.results}))
    //} )
  }



  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }


  displayReviews = () => {
    //console.log(this.state.reviews)
    const movieReviews = this.state.reviews.map((review, index) =>
      <MovieReviews key={index} review={review}/>
    )
    return movieReviews;
  }

  render() {
    if (this.state.reviews) {
      return(
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="term" onChange={this.handleChange} value={this.state.searchTerm}/>
            <input type="submit" value="Submit"/>
          </form>
          {
            this.displayReviews()
          }
        </div>

      )
    } else {
      return(
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="term" onChange={this.handleChange} value={this.state.searchTerm}/>
            <input type="submit" value="Submit"/>
          </form>
        </div>

      )

    }

  }


}

export default SearchableMovieReviewsContainer;
