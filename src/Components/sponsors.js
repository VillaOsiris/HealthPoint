import {
  Sponsor1,
  Sponsor2,
  Sponsor3,
  Sponsor4,
  Sponsor5,
} from "../Utils/images";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="sponsors__text">Our Sponsors</div>
      <div className="sponsors__logos">
        <img src={Sponsor1} alt="logo 1" />
        <img src={Sponsor2} alt="logo 2" />
        <img src={Sponsor3} alt="logo 3" />
        <img src={Sponsor4} alt="logo 4" />
        <img src={Sponsor5} alt="logo 5" />
      </div>
    </div>
  );
};

export default Sponsors;
