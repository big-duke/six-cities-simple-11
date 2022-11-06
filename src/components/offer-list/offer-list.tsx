import { Card } from 'components/card';
import { Nullable, Offer } from 'types';

type OfferListType = {
  offers: Offer[];
  setActiveCard: (offer: Nullable<Offer>) => void;

}
function OfferList({ offers , setActiveCard}: OfferListType): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard} />)}
    </div>
  );

}

export default OfferList;
