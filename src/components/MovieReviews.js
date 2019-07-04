// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
	return (
		<div className="review-list">
			{reviews.map(Review)}
		</div>
	)
}

const Review = ({display_title, byline, mpaa_rating, summary_short, link}) => {
	const name = byline.split(' ').map(str => str.charAt(0) + str.slice(1).toLowerCase()).join(' ')
	const rating = mpaa_rating !== '' ? '- Rating: '+mpaa_rating : null
	return (
		<div className="review" key={display_title}>
			<a href={link.url}><h2>{display_title}</h2></a>
			<p>By: {name} {rating}</p>
			<p>{summary_short}</p>
			<span>&nbsp;&nbsp;</span>
		</div>
	)
}

export default MovieReviews