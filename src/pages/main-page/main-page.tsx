/* eslint-disable no-console */
import { Logo, OfferList, Map, Tabs, Sort, Header } from 'components';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Nullable, Offer, Point, Location, SortOrder } from 'types';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { changeCity } from 'store/actions';
import { SpinnerCircular } from 'spinners-react';
import { fetchOffers } from 'store/api-action';


const compareOffers: Record<SortOrder, (a: Offer, b: Offer) => number> = {
  'Top rated first': (a: Offer, b: Offer) => b.rating - a.rating,
  'Price: high to low': (a: Offer, b: Offer) => b.price - a.price,
  'Price: low to high': (a: Offer, b: Offer) => a.price - b.price,
  Popular: () => 0,
};

function MainPage(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Nullable<Offer>>(null);
  const selectedCity = useAppSelector((state) => state.city);
  const sortOrder = useAppSelector((state) => state.sortOrder);
  const compareFn = compareOffers[sortOrder];
  const citiOffers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === selectedCity).sort(compareFn));
  const pending = useAppSelector((state) => state.pending);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());

  }, [dispatch]);


  const currentLocation: Nullable<Location> = citiOffers.length ? citiOffers[0].city.location : null;

  const handleCitySelect = (value: string) => dispatch(changeCity(value));

  const points: Point[] = citiOffers.map((offer) => ({ id: offer.id, ...offer.location }));
  return (
    <>
      <Helmet>
        <title>{`6 Cities | ${selectedCity}`}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <Header />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeTab={selectedCity} onTabClick={handleCitySelect} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{pending ? 'Loading offers ...' : `${citiOffers.length} places to stay in ${selectedCity}`}</b>
              <Sort />

              {pending ? <SpinnerCircular /> : <OfferList offers={citiOffers} setActiveCard={setActiveCard} />}

            </section>

            <div className="cities__right-section">
              {currentLocation && <Map center={currentLocation} points={points} activePointId={activeCard?.id} />}
            </div>
          </div>
          {/* eslint-disable-next-line react/jsx-closing-tag-location */}
        </div>
      </main>
    </>
  );


}
export default MainPage;
