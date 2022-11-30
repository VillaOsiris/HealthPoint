import Sponsor1 from "../assets/images/logo1.png";
import Sponsor2 from "../assets/images/logo2.png";
import Sponsor3 from "../assets/images/logo3.png";
import Sponsor4 from "../assets/images/logo4.png";
import Sponsor5 from "../assets/images/logo5.png";

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
