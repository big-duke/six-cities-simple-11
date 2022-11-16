/* eslint-disable no-console */
import { Logo, OfferList, Map, Tabs, Sort } from 'components';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Nullable, Offer, Point, Location } from 'types';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { changeCity, fetchOffers } from 'store/actions';
import { SpinnerCircular } from 'spinners-react';


function MainPage(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Nullable<Offer>>(null);

  const selectedCity = useAppSelector((state) => state.city);
  const citiOffers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === selectedCity));
  const pending = useAppSelector((state) => state.pending);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);


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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
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
