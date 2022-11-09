import { Logo, OfferList, Map, Tabs } from 'components';
import { Helmet } from 'react-helmet-async';
import { offers } from 'mock/offers';
import { useState } from 'react';
import { Nullable, Offer, Point } from 'types';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { changeCity } from 'store/actions';

type MainPageType = {
  offersCount: number;
}

function MainPage({ offersCount }: MainPageType): JSX.Element {
  const [activeCard, setActiveCard] = useState<Nullable<Offer>>(null);
  const selectedCity = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();
  const handleCitySelect = (value: string) => dispatch(changeCity({ city: value }));


  const { location:currentLocation } = offers[0].city;
  const points: Point[] = offers.map((offer) => ({ id: offer.id, ...offer.location }));
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
              <b className="places__found">{`${offersCount} places to stay in ${selectedCity}`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OfferList offers={offers} setActiveCard={setActiveCard} />
            </section>
            <div className="cities__right-section">
              <Map center={currentLocation} points={points} activePointId={activeCard?.id} />
            </div>
          </div>
        </div>
      </main>
    </>
  );


}
export default MainPage;
