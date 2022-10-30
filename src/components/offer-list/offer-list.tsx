import { Card } from 'components/card';
import { Offer } from 'types';

type OfferListType = {
  offers: Offer[];

}
function OfferList({ offers }: OfferListType): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
    </div>
  );

}

export default OfferList;
