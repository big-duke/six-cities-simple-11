import useStarRating from './useStarRating';

type StarRatingProps = {
  rating: number;
}
function StarRating({ rating }: StarRatingProps):JSX.Element {
  const ratingWidthPct = useStarRating(rating);
  return (
    <span style={{ width: ratingWidthPct }}></span>
  );
}


export default StarRating;
