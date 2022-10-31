import { Review } from 'types';
import SingleReview from './single-review';


type ReviewsProps = {
  reviews: Review[];
}
function ReviewsList({ reviews }: ReviewsProps): JSX.Element {
  const reviewsList = (<ul className="reviews__list">{reviews.map((review) => <SingleReview key={review.id} review={review} />)}</ul>);
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviewsList}
    </>
  );
}

export default ReviewsList;
