import "./index.css";

const ImageGalleryItem = (props) => {

    const {eachImage, changeActiveImageId, isActive} = props;
    const {id, thumbnailUrl, thumbnailAltText} = eachImage;

    const changeImage = () => {
        changeActiveImageId(id);
    }

    const activeImageStyle = isActive ? "active-image-gallery" : "";

    return (
        <li className="image-thumbnail-item-gallery">
            <button className="gallery-thumbnail-button" onClick={changeImage}>
                <img src={thumbnailUrl} alt={thumbnailAltText} className={`gallery-thumbnail-image ${activeImageStyle}`} />
            </button>
        </li>
    );
}

export default ImageGalleryItem;

