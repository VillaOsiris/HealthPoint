import Hero2 from "../assets/images/hero1.png";

const Hero = () => {
  return (
    <div className="hero__container">
      <img src={Hero2} alt="hero img" className="hero__img" />
      <div className="hero__text">
        <h3>A BOOST TO</h3>
        <h2>YOUR LIFE</h2>
      </div>
    </div>
  );
};

export default Hero;
