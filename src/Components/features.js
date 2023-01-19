import { VscDebugBreakpointLog } from "react-icons/vsc";
import PtImg from "../assets/images/pt.jpg";
import SpaImg from "../assets/images/spa.jpg";
import classImg from "../assets/images/class.jpg";

const Features = () => {
  return (
    <div className=" container features">
      <div className="features__block">
        <img
          src={PtImg}
          alt="personal trainer photo"
          className="features__img"
        />
        <ul className="features__list">
          <li>
            <VscDebugBreakpointLog />
            <span>Top quality machines.</span>
          </li>
          <li>
            <VscDebugBreakpointLog />
            <span>The best personal trainers.</span>
          </li>
          <li>
            <VscDebugBreakpointLog />
            <span>Dailly gym acess (5am - 12pm).</span>
          </li>
          <li>
            <VscDebugBreakpointLog />
            <span>x2 day with our trainer pass.</span>
          </li>
        </ul>
      </div>

      <div className="features__block">
        <ul className="features__list">
          <li>
            <VscDebugBreakpointLog />
            <span>Indoor Cycling classes</span>
          </li>
          <li>
            <VscDebugBreakpointLog />
            <span>Aerobic zumba classes</span>
          </li>
          <li>
            <VscDebugBreakpointLog />
            <span>TRX Suspension classes</span>
          </li>
          <li>
            <VscDebugBreakpointLog />
            <span>Realaxing yoga classes</span>
          </li>
        </ul>
        <img
          src={classImg}
          alt="cicling class photo"
          className="features__img"
        />
      </div>

      <div className="features__block">
        <img src={SpaImg} alt="spa photo" className="features__img" />
        <ul className="features__list">
          <li>
            <VscDebugBreakpointLog />
            <span>Nutricional guidance</span>
          </li>
          <li>
            <VscDebugBreakpointLog />
            <span>Chiropractic massage</span>
          </li>
          <li>
            <VscDebugBreakpointLog />
            <span>Sauna/turkish bath</span>
          </li>
          <li>
            <VscDebugBreakpointLog />
            <span>Fisiohealth pool</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
