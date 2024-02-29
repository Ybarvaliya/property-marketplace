import img1 from "../Assets/h2.1.png";
import img2 from "../Assets/h2.2.png";
import img3 from "../Assets/h2.3.png";
import img4 from "../Assets/h2.4.png";

import './HIW.css'

const HIW = () => {
  return (
    <div>
      <h1 className="con1T">HOW IT WORKS?</h1>
      <h5 className="con1T2">Step by Step Guide</h5>
      <div className="flex">
        <img src={img1} alt="" />
        <div className="">
          <h1 className="th1"> Discover Your Perfect Home</h1>
          <p>
            Use our advanced filters to narrow down your search. Specify
            everything from location to amenities, ensuring you find the
            property that feels right.
          </p>
          <a href="">Learn More</a>
        </div>
      </div>
      <div className="flex">
        <div>
          <h1 className="th1">Showcase Your Property</h1>
          <p>
            List your property with ease. Fill in detailed forms to highlight
            every feature, attracting the perfect buyer directly.
          </p>
          <a href="">Learn More</a>
        </div>
        <img src={img2} alt="" />
      </div>
      <div className="flex">
        <img src={img3} alt="" />
        <div>
          <h1 className="th1">Connect and Communicate</h1>
          <p>
            Our platform facilitates direct communication between buyer and
            seller, making negotiations transparent and straightforward.
          </p>
          <a href="">Learn More</a>
        </div>
      </div>
      <div className="flex">
        <div>
          <h1 className="th1">Seal the Deal Securely</h1>
          <p>
            Advance payments made safe. Secure your agreement with confidence,
            and step closer to your dream property.
          </p>
          <a href="">Learn More</a>
        </div>
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default HIW;
