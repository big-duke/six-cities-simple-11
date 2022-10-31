type PropertiesProp = {
  goods?: string[] | null;
}
function PropertyGoods({ goods }: PropertiesProp): JSX.Element {
  const properties = goods?.map((good) => (<li key={good} className="property__inside-item">{good}</li>));
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {properties}
      </ul>
    </div>
  );
}
export default PropertyGoods;
