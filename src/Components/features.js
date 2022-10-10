import { VscDebugBreakpointLog } from "react-icons/vsc";

const Features = () => {
  return (
    <div className="lines">
      <div className="features__grid">
        <div className="features__block">
          <img
            src="/assets/images/pt.jpg"
            alt="personal trainer photo"
            className="features__img"
          />
          <ul className="features__text">
            <li>
              <VscDebugBreakpointLog />
              <span>Top quality machines.</span>
            </li>
            <li>
              <VscDebugBreakpointLog />
              <span>The best instructors and personal trainers.</span>
            </li>
            <li>
              <VscDebugBreakpointLog />
              <span>Once a day gym acess (5am - 12pm).</span>
            </li>
            <li>
              <VscDebugBreakpointLog />
              <span>x2 day with our personal trainer pass.</span>
            </li>
          </ul>
        </div>

        <div className="features__block">
          <ul className="features__text">
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
            src="/assets/images/class.jpg"
            alt="cicling class photo"
            className="features__img"
          />
        </div>

        <div className="features__block">
          <img
            src="/assets/images/spa.jpg"
            alt="spa photo"
            className="features__img"
          />
          <ul className="features__text">
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
    </div>
  );
};

export default Features;
