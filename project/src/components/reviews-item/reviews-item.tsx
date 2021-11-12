import {Review} from '../../types/review';

type ReviewsItemProps = {
  review: Review;
}

function ReviewsItem ({review}: ReviewsItemProps): JSX.Element {
  const {comment, user, date, rating} = review;

  const getStarsCount = (reviewRating: number) => {
    switch(rating) {
      case 1:
        return '20%';
      case 2:
        return '40%';
      case 3:
        return '60%';
      case 4:
        return '80%';
      case 5:
        return '100%';
      default:
        return '0%';
    }
  };

  const starsCount = getStarsCount(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.aratarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{
              width: starsCount,
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{
          new Date(date).toLocaleString('en',{month: 'long', year: 'numeric'})
        }
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
