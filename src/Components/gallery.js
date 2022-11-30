import {
  GalImg1,
  GalImg2,
  GalImg3,
  GalImg4,
  GalImg5,
  GalImg6,
  GalImg7,
  GalImg8,
  GalImg9,
  GalImg10,
  GalImg11,
  GalImg12,
} from "../Utils/images";

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
