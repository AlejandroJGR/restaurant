import {useRef} from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowRightSquare,
  BsArrowLeftSquare,
} from "react-icons/bs";
import "./Gallery.css";

const galleryImages= [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) =>{
    const {current } = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -= 300;
    }else {
      current.scrollLeft += 300;
    }
  }
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans p__gallery-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          optio expedita? Soluta illo delectus aspernatur aperiam illum.
          Architecto, iusto!
        </p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) =>
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index}+1`}>
              <img src={image} alt="gallery" />
              <a href="https://www.instagram.com/alejandrojg23/" className="gallery__image-icon">
                <BsInstagram />
              </a>
            </div>
          )}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftSquare className="gallery__arrow-icon" onClick={()=> scroll('left')}/>
          <BsArrowRightSquare className="gallery__arrow-icon" onClick={()=> scroll('right')}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
