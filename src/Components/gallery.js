import GalImg1 from "../assets/images/gallery_img_1.jpg";
import GalImg2 from "../assets/images/gallery_img_2.jpg";
import GalImg3 from "../assets/images/gallery_img_3.jpg";
import GalImg4 from "../assets/images/gallery_img_4.jpg";
import GalImg5 from "../assets/images/gallery_img_5.jpg";
import GalImg6 from "../assets/images/gallery_img_6.jpg";
import GalImg7 from "../assets/images/gallery_img_7.jpeg";
import GalImg8 from "../assets/images/gallery_img_8.jpg";
import GalImg9 from "../assets/images/gallery_img_9.jpg";
import GalImg10 from "../assets/images/gallery_img_10.jpg";
import GalImg11 from "../assets/images/gallery_img_11.jpg";
import GalImg12 from "../assets/images/gallery_img_12.jpg";

const Gallery = () => {
  return (
    <section className="gallery__grid">
      <figure className="gallery__item gallery__item--1">
        <img src={GalImg1} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={GalImg2} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src={GalImg3} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src={GalImg4} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src={GalImg5} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src={GalImg6} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img src={GalImg7} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img src={GalImg8} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img src={GalImg9} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img src={GalImg10} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img src={GalImg11} alt="" />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img src={GalImg12} alt="" />
      </figure>
    </section>
  );
};

export default Gallery;
