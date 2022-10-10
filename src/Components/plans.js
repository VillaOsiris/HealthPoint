const Plans = () => {
  return (
    <section className="plans">
      <div className="plan">
        <div className="plan__header">
          <p className="plan__header--title">Regular</p>
          <h2 className="plan__header--price">€79.99</h2>
          <p className="plan__header--text">/Month</p>
        </div>
        <div className="plan__content">
          <ul>
            <li>Full gym access</li>
            <li>Specialization classes</li>
            <li>Monthly nutrition/spa ticket</li>
          </ul>
          <button>Try now</button>
        </div>
      </div>
      <div className="plan best">
        <div className="plan__header">
          <p className="plan__header--title">Season Pass</p>
          <h2 className="plan__header--price">€999.99</h2>
          <p className="plan__header--text">/year</p>
        </div>
        <div className="plan__content">
          <ul>
            <li>Full gym access</li>
            <li>Free access to all features</li>
            <li>Personal Trainer discounts</li>
          </ul>
          <button className="best">Try 1 month Free</button>
        </div>
      </div>
      <div className="plan">
        <div className="plan__header">
          <p className="plan__header--title">Pro Athlete</p>
          <h2 className="plan__header--price">€599.99</h2>
          <p className="plan__header--text">/year</p>
        </div>
        <div className="plan__content">
          <ul>
            <li>Full gym access</li>
            <li>Nutrition/spa access</li>
            <li>Ice bath access</li>
          </ul>
          <button>Try now</button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
