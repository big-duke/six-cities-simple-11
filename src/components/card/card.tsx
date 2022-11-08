import { generatePath, Link } from 'react-router-dom';
import { StarRating } from 'components';
import { AppRoutes } from 'router';
import { Nullable, Offer } from 'types';

import './style.css';

type CardProps = {
  offer: Offer;
  setActiveCard: (offer: Nullable<Offer>) => void;
}
function Card({ offer, setActiveCard }: CardProps): JSX.Element {
  const offerDetailRef = generatePath(AppRoutes.ROOM, { id: offer.id.toString() });

  return (

    <article className="cities__card place-card"
      onMouseEnter={() => setActiveCard(offer)}
      onMouseLeave={() => setActiveCard(null)}
    >

      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerDetailRef}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.description} />
        </Link>
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
          <Link to={offerDetailRef}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>


  );
}

export default Card;
