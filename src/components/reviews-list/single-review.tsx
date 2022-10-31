import { StarRating } from 'components';
import { Review } from 'types';
import dayjs from 'dayjs';

type ReviewProps = {
  review: Review;
}
function SingleReview({ review }: ReviewProps): JSX.Element {
  const { user } = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt={user.name} />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <StarRating rating={review.rating} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(review.date).format('YYYY-MM-DD')}>{dayjs(review.date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default SingleReview;
