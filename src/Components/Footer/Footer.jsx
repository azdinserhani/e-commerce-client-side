import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="item">
          <span>Information</span>
          <hr />
          <a>Custom Service</a>
          <a>F.A.Q.'s</a>
          <a>Ordering Tracking</a>
          <a>Contact Us</a>
          <a>Events</a>
          <a>Popular</a>
        </div>
        <div className="item">
          <span>Services</span>
          <hr />
          <a> Sitemap</a>
          <a>Privacy Policy</a>
          <a> Your Account</a>
          <a> Advanced Search</a>
          <a>Term & Condition</a>
          <a> Contact Us</a>
        </div>
        <div className="item">
          <span>Account</span>
          <hr />
          <a>About Us</a>
          <a>Delivery Information</a>
          <a>Privacy Policy</a>
          <a>Discount</a>
          <a> Custom Service</a>
          <a>Term & Condition</a>
        </div>
        <div className="item">
          <span>Account</span>
          <hr />
          <p>
            Share contact information, store details, and brand content with
            your customers.Stay tuned to our blog for in-depth tech reviews and
            industry insights.
          </p>
          <div className="icons">
            <div className="icon">
              <InstagramIcon />
            </div>
            <div className="icon">
              <XIcon />
            </div>
            <div className="icon">
              <FacebookIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
