import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Action from '../Redux/Action';
import './Home.css';

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Example image array for the slider (replace with actual data if dynamic)
  const sliderData = [
    {
      src: 'https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-2-attr-hero?qlt=82&ts=1726650323712',
      caption: 'The iconic Taj Mahal, a symbol of eternal love.'
    },
    {
      src: 'https://s7ap1.scene7.com/is/image/incredibleindia/gateway-of-india-mumbai-maharashtra-2-attr-hero?qlt=82&ts=1742162842869',
      caption: 'Gateway of India, Mumbai: A historic landmark.'
    },
    {
      src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNQB1Z5U6sEplSzJPG_mSoedMvXRmWRM1g2fRoNT8Pbw7N-hAK0acfXTFFdciT0MCHzFXTf-6VhLHPSlu3n5sDhqQXvzVAz3c33TTnObx5Ve8tORPANckNE0H0-t4_yBGUP0I7ZFiYZnmX5DxFjzoEqfQRusX4hb-cpXumG26OxHPkOK5i8FFW8E2peZc/s1024/Hawa%20Mahal-%20The%20Iconic%20%22Palace%20of%20Winds%22%20in%20Jaipur-1.jpg',
      caption: 'Hawa Mahal, Jaipur: Palace of Winds.'
    },
    {
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/4a/3d/a3/img-20180308-055907-hht.jpg?w=1200&h=-1&s=1',
      caption: 'Varanasi Ghats: Spiritual serenity by the Ganges.'
    },
    {
      src: 'https://www.tripsavvy.com/thmb/UoylMLyzOBPdDp34ForEiJd9m3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-522478216-5ab12c4e3de4230036949cee.jpg',
      caption: 'Kerala Backwaters: Tranquil houseboat cruises.'
    },
    {
      src: 'https://static2.tripoto.com/media/filter/tst/img/789513/TripDocument/1535439582_golden_temple_1200.jpg',
      caption: 'Golden Temple, Amritsar: A sacred pilgrimage site.'
    }
  ];

  useEffect(() => {
    dispatch(Action());
  }, [dispatch]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollLeft = currentSlide * scrollAmount;
    }
  }, [currentSlide]);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000); // Change slide every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isPaused, sliderData.length]);

  const manualScroll = (direction) => {
    setIsPaused(true); // Pause on manual scroll
    setCurrentSlide((prevSlide) => {
      const newSlide = prevSlide + direction;
      if (newSlide < 0) return sliderData.length - 1;
      if (newSlide >= sliderData.length) return 0;
      return newSlide;
    });
  };

  return (
    <div className="home-container">
      <div
        className="scroll-img-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="scroll-arrow left-arrow" onClick={() => manualScroll(-1)}>
          &lt;
        </button>
        <div className="scroll-images" ref={scrollContainerRef}>
          {sliderData.map((item, index) => (
            <div key={index} className="slide-item">
              <img src={item.src} alt={`destination-${index}`} />
              <div className="slide-caption">{item.caption}</div>
            </div>
          ))}
        </div>
        <button className="scroll-arrow right-arrow" onClick={() => manualScroll(1)}>
          &gt;
        </button>
      </div>
      <div className="card-container">
  {products?.map((item, ind) => (
    <div className="productCart" key={ind}>
      <Link to={`/card/${item._id}`}>
        <img src={item.img} alt={item.name} />

        <div className="productCart-content">
          <p>{item.name}</p>
          <p><strong>Price:</strong> {item.price}</p>
          <p><strong>Boarding:</strong> {item.boardingPoint}</p>
          <p><strong>Time:</strong> {item.time}</p>
          <p><strong>Destination:</strong> {item.destination}</p>
          <p><strong>Route:</strong> {item.routeDetails}</p>

          <p className="product-description">{item.description}</p>

          {/* ⭐ Attractive Star Rating */}
          <div className="star-rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={i < Math.floor(item.rating) ? "star filled" : "star"}
              >
                ★
              </span>
            ))}
            <span className="rating-number">{item.rating}</span>
          </div>
        </div>
      </Link>

      <Link to={`/booking/${item._id}`} className="btn">
        Book Now
      </Link>
    </div>
  ))}
</div>

      <footer class="travel-footer">
  <div class="footer-container">

    <div class="footer-section">
      <h3>🚍 Tour & Travels</h3>
      <p>Your trusted partner for safe & comfortable journeys.</p>
    </div>

    <div class="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Packages</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Contact</h4>
      <p>📍 Indore, Madhya Pradesh</p>
      <p>📞 +91 98765 43210</p>
      <p>✉ support@travel.com</p>
    </div>

    <div class="footer-section">
      <h4>Follow Us</h4>
      <div class="social-icons">
        <a href="#">🌐</a>
        <a href="#">📘</a>
        <a href="#">📸</a>
        <a href="#">▶️</a>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    © 2025 Tour & Travels | All Rights Reserved
  </div>
</footer>

    </div>
  );
};

export default Home;