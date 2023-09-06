import { useState } from "react";
import ImageGalleryItem from "./gallery";
import "./index.css";

const imagesList = [
  {
    id: 1,
    imageUrl:
      "https://wallpaperaccess.com/full/31189.jpg",
    thumbnailUrl:
      "https://wallpaperaccess.com/full/31189.jpg",
    imageAltText: "galleryImage1",
    thumbnailAltText: "thumbnailImage1",
  },
  {
    id: 2,
    imageUrl:
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
    thumbnailUrl:
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
    imageAltText: "galleryImage2",
    thumbnailAltText: "thumbnailImage2",
  },
  {
    id: 3,
    imageUrl:
        "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    thumbnailUrl:
        "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    imageAltText: "galleryImage3",
    thumbnailAltText: "thumbnailImage3",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    imageAltText: "galleryImage4",
    thumbnailAltText: "thumbnailImage4",
  },
  {
    id: 5,
    imageUrl:
      "https://wallpaperaccess.com/full/393735.jpg",
    thumbnailUrl:
      "https://wallpaperaccess.com/full/393735.jpg",
    imageAltText: "galleryImage5",
    thumbnailAltText: "thumbnailImage5",
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg",
    imageAltText: "galleryImage6",
    thumbnailAltText: "thumbnailImage6",
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80",
    imageAltText: "galleryImage7",
    thumbnailAltText: "thumbnailImage7",
  },
  {
    id: 8,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-thumb.jpg",
    thumbnailUrl:
      "https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-thumb.jpg",
    imageAltText: "galleryImage8",
    thumbnailAltText: "thumbnailImage8",
  },
];

const GalleryApp = () => {

    const [activeImage, setActiveImage] = useState(imagesList[0].id);

    const changeActiveImageId = (imageId) => {
        setActiveImage(imageId);
    }

    const getActiveImageObject = () => {
        return imagesList.find(item => item.id === activeImage);
    }

    const mainImageObject = getActiveImageObject();

  return (
    <div className="gallery-bg-container">
      <div className="w-75">
        <img
          src={mainImageObject.imageUrl}
          alt={mainImageObject.imageAltText}
          className="gallery-image"
        />
        <h1 className="gallery-app-heading">Nature Photography</h1>
        <p className="gallery-app-text">Nature Photography by Ajay</p>
        <ul className="gallery-list-container">
            {imagesList.map(eachItem => (
                <ImageGalleryItem key={eachItem.id} eachImage={eachItem} 
                changeActiveImageId={changeActiveImageId} isActive={eachItem.id === activeImage} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default GalleryApp;
