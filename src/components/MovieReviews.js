// Code MovieReviews Here
import React from 'react';


const MovieReviews = (props) => {
  let {byline, display_title, headline, summary_short} = props.review;
  return (
    <div className="review-list">
      <div className="review">
        <h1>{display_title}</h1>
        <p>{headline}</p>
        <p>{byline}</p>
        <p>{summary_short}</p>
      </div>
    </div>

  )


}

export default MovieReviews;
