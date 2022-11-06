import { Card } from 'components/card';
import { useState } from 'react';
import { Nullable, Offer } from 'types';

type OfferListType = {
  offers: Offer[];

}
function OfferList({ offers }: OfferListType): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState<Nullable<Offer>>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard} />)}
    </div>
  );

}

export default OfferList;
