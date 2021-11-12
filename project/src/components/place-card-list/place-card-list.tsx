import {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';

type PlaceCardListProops = {
  offers: Offers;
  nearPlaces?: boolean;
}

function PlaceCardList ({offers, nearPlaces}: PlaceCardListProops): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCardId] = useState(offers.find((offer) => offer.isActive));
  return (
    <div className={`${nearPlaces ? 'near-places__list places__list' : 'cities__places-list'} places__list tabs__content`}>
      {
        offers.map((offer) => (
          <PlaceCard key={`${offer.id}`} offer={offer} nearPlaces/>
        ))
      }
    </div>
  );
}

export default PlaceCardList;
