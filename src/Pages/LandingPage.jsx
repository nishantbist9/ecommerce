import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {

  const products = [
    {
      name: "Full Face Helmet",
      price: "Rs. 4500",
      image: "/helmet.png",
      tag: "Best Seller"
    },
    {
      name: "Riding Gloves",
      price: "Rs. 1500",
      image: "/gloves.png",
      tag: "Grip+"
    },
    {
      name: "Safety Jacket",
      price: "Rs. 5500",
      image: "/jacket.png",
      tag: "Armored"
    },
    {
      name: "Knee Guard",
      price: "Rs. 2000",
      image: "/guard.png",
      tag: "Impact Rated"
    }
  ];

  const features = [
    { icon: "🛡️", title: "Premium Quality", desc: "Certified protective materials, tested for real-world impact." },
    { icon: "🚚", title: "Fast Delivery", desc: "Dispatched within 24 hours, tracked door to door." },
    { icon: "⭐", title: "Trusted Products", desc: "Rated by thousands of riders across the country." }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .lp {
          font-family: 'Inter', sans-serif;
          background: #F5F3EE;
          color: #0B0B0D;
          width: 100%;
          min-height: 100vh;
          margin: 0;
        }

        .lp h1, .lp h2, .lp h3 {
          font-family: 'Archivo Black', sans-serif;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          margin: 0;
        }

        /* HERO */
        .lp-hero {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 90px 70px 110px;
          min-height: 100vh;
          width: 100%;
          background: #3A3D46;
          color: #F5F3EE;
          flex-wrap: wrap;
          overflow: hidden;
        }

        .lp-hero-copy { max-width: 560px; z-index: 2; }

        .lp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFB800;
          color: #0B0B0D;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 14px;
          margin-bottom: 22px;
        }

        .lp-hero h1 {
          font-size: 52px;
          line-height: 1.05;
          margin-bottom: 20px;
        }

        .lp-hero p {
          font-size: 17px;
          line-height: 1.6;
          color: #D4D3CE;
          margin-bottom: 34px;
          max-width: 460px;
        }

        .lp-shop-btn {
          padding: 16px 32px;
          background: #FFB800;
          color: #0B0B0D;
          border: none;
          font-family: 'Archivo Black', sans-serif;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .lp-shop-btn:hover {
          background: #F5F3EE;
          transform: translateY(-2px);
        }

        .lp-hero-image-wrap {
          position: relative;
          z-index: 2;
        }

        .lp-hero-image {
          width: 340px;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
        }

        /* Hazard stripe divider - signature element */
        .lp-hazard {
          height: 22px;
          width: 100%;
          background: repeating-linear-gradient(
            135deg,
            #FFB800,
            #FFB800 22px,
            #0B0B0D 22px,
            #0B0B0D 44px
          );
        }

        /* FEATURED PRODUCTS */
        .lp-section {
          padding: 70px;
        }

        .lp-section-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .lp-section-head h2 {
          font-size: 32px;
        }

        .lp-section-head span {
          font-size: 13px;
          color: #8A8A8F;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .lp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 28px;
        }

        .lp-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E5E2D9;
          padding: 26px 22px 22px;
          text-align: left;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }

        .lp-card:hover {
          box-shadow: 0 14px 30px rgba(11,11,13,0.12);
          transform: translateY(-4px);
        }

        .lp-tag {
          position: absolute;
          top: -10px;
          left: 20px;
          background: #DC2626;
          color: #F5F3EE;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 5px 10px;
          transform: rotate(-2deg);
        }

        .lp-card-image {
          width: 100%;
          height: 170px;
          object-fit: contain;
          margin-bottom: 16px;
        }

        .lp-card h3 {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          text-transform: none;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .lp-card-price {
          font-size: 15px;
          font-weight: 600;
          color: #DC2626;
          margin: 0 0 16px;
        }

        .lp-card-btn {
          width: 100%;
          padding: 12px;
          background: #0B0B0D;
          color: #F5F3EE;
          border: none;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .lp-card-btn:hover {
          background: #FFB800;
          color: #0B0B0D;
        }

        /* FEATURES STRIP */
        .lp-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1px;
          background: #E5E2D9;
          border-top: 1px solid #E5E2D9;
          border-bottom: 1px solid #E5E2D9;
        }

        .lp-feature {
          background: #F5F3EE;
          padding: 42px 36px;
          text-align: left;
        }

        .lp-feature-icon {
          font-size: 26px;
          margin-bottom: 14px;
          display: block;
        }

        .lp-feature h3 {
          font-family: 'Inter', sans-serif;
          text-transform: none;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .lp-feature p {
          font-size: 14px;
          color: #6B6B6F;
          line-height: 1.5;
          margin: 0;
        }

        /* FOOTER */
        .lp-footer {
          background: #3A3D46;
          color: #F5F3EE;
          padding: 40px 25px;
          text-align: center;
        }

        .lp-footer h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .lp-footer p {
          color: #8A8A8F;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0;
        }

        @media (max-width: 640px) {
          .lp-hero { padding: 60px 28px 80px; min-height: auto; }
          .lp-hero h1 { font-size: 34px; }
          .lp-section { padding: 45px 24px; }
        }
      `}</style>

      <div className="lp">
        <Navbar />

        <div className="lp-hero">
          <div className="lp-hero-copy">
            <div className="lp-eyebrow">⚠ Certified Rider Protection</div>
            <h1>Ride Safe With Premium Safety Gear</h1>
            <p>
              Shop helmets, gloves, jackets and riding protection
              equipment built to take the impact so you don't have to.
            </p>
            <Link to="/register">
              <button className="lp-shop-btn">Shop Now</button>
            </Link>
          </div>

          <div className="lp-hero-image-wrap">
            <img src="/heroHelmet.png" alt="Helmet" className="lp-hero-image" />
          </div>
        </div>

        <div className="lp-hazard" />

        <div className="lp-section">
          <div className="lp-section-head">
            <h2>Featured Products</h2>
            <span>04 Items In Stock</span>
          </div>

          <div className="lp-grid">
            {products.map((item, index) => (
              <div key={index} className="lp-card">
                <span className="lp-tag">{item.tag}</span>
                <img src={item.image} alt={item.name} className="lp-card-image" />
                <h3>{item.name}</h3>
                <p className="lp-card-price">{item.price}</p>
                <button className="lp-card-btn">View Product</button>
              </div>
            ))}
          </div>
        </div>

        <div className="lp-features">
          {features.map((f, i) => (
            <div key={i} className="lp-feature">
              <span className="lp-feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <footer className="lp-footer">
          <h3>Online Helmet & Safety Gear Shopping System</h3>
          <p>Ride Smart • Ride Safe</p>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
