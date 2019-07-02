import React from "react";

const Review = ({ headline, link, byline, summary_short }) => {
  return (
    <div key={headline} className="review">
      <a className="review-link" href={link.url}>
        {headline}
      </a>
      <span className="author">{byline}</span>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">{reviews.map(Review)}</div>;
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
