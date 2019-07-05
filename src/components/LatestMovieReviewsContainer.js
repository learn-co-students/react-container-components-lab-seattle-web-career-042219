import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'hqo4Rt9ua7XriuVZeSp1xrjCEWkzulJJ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }


  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      reviews: data.results
    }))
  }



  // displayReviews = () => {
  //
  //   const movieReviews = this.state.reviews.map((review, index) =>
  //     <MovieReviews key={index} review={review}/>
  //   );
  //   return movieReviews;
  // }

  render() {

    return(
      <div className="latest-movie-reviews">
        {
          this.state.reviews.map((review, index) =>
            <MovieReviews key={index} review={review}/>
          )
        }
      </div>
    )

  }

}

export default LatestMovieReviewsContainer;
