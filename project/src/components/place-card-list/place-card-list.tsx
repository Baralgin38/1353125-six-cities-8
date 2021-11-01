import {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';

type PlaceCardListProops = {
  offers: Offers;
}

function PlaceCardList ({offers}: PlaceCardListProops): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCardId] = useState(offers[3].id);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard key={`${offer.id}`} offer={offer}/>
        ))
      }
    </div>
  );
}

export default PlaceCardList;
