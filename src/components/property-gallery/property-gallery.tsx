type PropertyGalleryProps = {
  images?: string[] | null;
  propertyType: string;
}
function PropertyGallery({ images, propertyType }: PropertyGalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images?.map((img) => (<div key={img} className="property__image-wrapper"><img className="property__image" src={img} alt={propertyType} /></div>))}
      </div>
    </div>
  );
}

export default PropertyGallery;
