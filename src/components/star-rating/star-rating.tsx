type StarRatingProps = {
  rating: number;
}
function StarRating({ rating }: StarRatingProps) {
  const ratingWidthPct = getRatingWidth(rating);
  return (
    <span style={{ width: ratingWidthPct }}></span>
  );
}

function getRatingWidth(rating: number): string {
  const STAR_COUNT = 5;
  const SCALE_MAX = 100;
  const ratingWidth = Math.round(SCALE_MAX / STAR_COUNT * rating);
  return `${ratingWidth}%`;
}

export default StarRating;
