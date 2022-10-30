import { Link } from 'react-router-dom';
import { StarRating } from 'components';
import { AppRoutes } from 'router';
import { Offer } from 'types';

import './style.css';

type CardProps = {
  offer: Offer;
}
function Card({ offer }: CardProps): JSX.Element {
  return (

    <article className="cities__card place-card">
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.description} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`\u20AC${offer.price}`}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <StarRating rating={offer.rating} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoutes.ROOM}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>


  );
}

export default Card;
