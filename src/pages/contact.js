import {
  FaPhoneSquareAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contacts">
      <div className="contacts__info">
        <h2>Contact Info</h2>
        <h3>
          <FaPhoneSquareAlt /> Phone
        </h3>
        <p>011-672-555</p>
        <h3>
          <FaEnvelope /> Email
        </h3>
        <p>info@healthpoint.company</p>
        <h3>
          <FaMapMarkerAlt /> Address
        </h3>
        <p>Only gym street, antartica</p>
        <h3>
          <FaRegClock /> Hours
        </h3>
        <p>All days: 5:30am–12:00pm</p>
      </div>
      <div className="contacts__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18746056.429133985!2d0!3d-73.33519674645457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAnt%C3%A1rtida!5e0!3m2!1spt-PT!2spt!4v1663533338608!5m2!1spt-PT!2spt"
          loading="lazy"
        ></iframe>
      </div>
      <div className="contacts__form">
        <h2>Get in touch</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="contacts__form--input"
          />
          <input
            type="email"
            placeholder="Email"
            className="contacts__form--input"
          />
          <input
            type="text"
            placeholder="Subject"
            className="contacts__form--input"
          />
          <textarea
            placeholder="Message"
            className="contacts__form--textarea"
          ></textarea>
          <input type="submit" value="Submit" className="contacts__form--btn" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
