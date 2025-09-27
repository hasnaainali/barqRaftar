import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  DoughnutController,
  LineController,
} from "chart.js";
import './COD.css';

// upfront steps)
const upfrontSteps = [
  {
    text: "Book Parcels with PostEx",
    image: `${process.env.PUBLIC_URL}/images/upfrontImg1.png`,
  },
  {
    text: "PostEx Picks Your Parcel from Doorstep",
    image: `${process.env.PUBLIC_URL}/images/upfrontImg2.png`,
  },
  {
    text: "Upfront Payment Transferred Instantly",
    image: `${process.env.PUBLIC_URL}/images/upfrontImg3.png`,
  },
];

const featuresData = [
  {
    icon: `${process.env.PUBLIC_URL}/images/feature_same_day_delivery.svg`,
    title: "Same Day Delivery",
    description:
      "Experience fast and reliable service with Same Day Delivery, ensuring happy customers and seamless operations."
  },
  {
    icon: `${process.env.PUBLIC_URL}/images/feature_nationalwide_coverage.svg`,
    title: "Nationwide Coverage",
    description:
      "We cover the entire country, ensuring your items reach their destination hassle-free."
  },
  {
    icon: `${process.env.PUBLIC_URL}/images/feature_flexible_pricing.svg`,
    title: "Flexible Pricing",
    description:
      "Adjust costs to fit your budget with customizable options and personalized payment plans."
  },
  {
    icon: `${process.env.PUBLIC_URL}/images/feature_easy_instalment.svg`,
    title: "Easy Integration",
    description:
      "Instantly integrate our user-friendly APIs with any e-commerce platform for a hassle-free setup."
  },
];

const integrations = [
  {
    img: `${process.env.PUBLIC_URL}/images/andriod.png`,
    alt: "Android"
  },
  {
    img: `${process.env.PUBLIC_URL}/images/IOS_logo.webp`,
    alt: "iOS"
  },
  {
    img: `${process.env.PUBLIC_URL}/images/magento.png`,
    alt: "Magento"
  },
  {
    img: `${process.env.PUBLIC_URL}/images/woocommerce.png`,
    alt: "WooCommerce"
  },
  {
    img: `${process.env.PUBLIC_URL}/images/shopify.png`,
    alt: "Shopify"
  },
];

const COD = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);

  useEffect(() => {
    const ctxPie = document.getElementById("pie-chart");
    const ctxLine = document.getElementById("line-chart");

    Chart.register(
      DoughnutController,
      LineController,
      ArcElement,
      Tooltip,
      Legend,
      LineElement,
      PointElement,
      CategoryScale,
      LinearScale
    );

    if (pieChartRef.current) {
      pieChartRef.current.destroy();
    }
    if (lineChartRef.current) {
      lineChartRef.current.destroy();
    }

    if (ctxPie) {
      pieChartRef.current = new Chart(ctxPie, {
        type: "doughnut",
        data: {
          labels: ["PostEx", "Others"],
          datasets: [
            {
              label: "Market Share",
              data: [60, 40],
              backgroundColor: ["#00DF9A", "#E5E7EB"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutout: "70%",
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
          },
        },
      });
    }

    if (ctxLine) {
      lineChartRef.current = new Chart(ctxLine, {
        type: "line",
        data: {
          labels: ["2020", "2021", "2022", "2023", "2024"],
          datasets: [
            {
              label: "Growth",
              data: [10, 25, 40, 70, 100],
              fill: false,
              borderColor: "#00DF9A",
              tension: 0.4,
              pointBackgroundColor: "#00DF9A",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
          },
          scales: {
            x: { grid: { display: false } },
            y: { grid: { color: "#E5E7EB" } },
          },
        },
      });
    }

    return () => {
      if (pieChartRef.current) pieChartRef.current.destroy();
      if (lineChartRef.current) lineChartRef.current.destroy();
    };
  }, []);

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* COD GIF Section */}
      <section className="cod-features">
        <div className="container cod-feature">
          <div className="cod-feature-content">
            <div className="kicker">PostEx cash on delivery</div>
            <h3 className="cod-feature-title">
              Upfront Payment On Cash On Delivery Orders
            </h3>
            <p className="cod-feature-text">
              Get your COD payments upfront and scale your business with PostEx—no more waiting for weeks!
            </p>
          </div>
          <div className="cod-feature-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/map-video-2.gif`}
              alt="COD Payments" className="cod-feature-img" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="cod-stats-section">
        <div className="placeValue">
          <div className="stats-item">
            <h3 className="stats-number">25,000+</h3>
            <p className="stats-text">Happy & Growing Partners</p>
          </div>
          <div className="stats-item">
            <h3 className="stats-number">600+</h3>
            <p className="stats-text">Destinations</p>
          </div>
          <div className="contact-sales">
            <a href="/signup">
              <button className="contact-button">Contact Sales</button>
            </a>
          </div>
        </div>
      </section>

      {/* Upfront Payment Section */}
      <section className="upfront-section">
        <div className="upfront-inner">
          <h3 className="upfront-heading">Instant upfront payments</h3>

          {upfrontSteps.map((step, index) => (
            <div className="upfront-row" key={index}>
              <div className="upfront-text">
                <span className="bullet-circle"></span>
                <p>{step.text}</p>
              </div>
              <div className="upfront-image">
                <img src={step.image} alt={step.text} />
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="maxContainerWidth">
          <div className="contentWrap">
            <h4 className="text-gradient">Features</h4>
            <h2>State of the Art Logistics Solution</h2>
          </div>
          <div className="solutionWrap">
            {featuresData.map((feature, index) => (
              <div className="solution" key={index}>
                <div className="solutionInner">
                  <div className="icon-title">
                    <img src={feature.icon} alt={feature.title} />
                    <h4>{feature.title}</h4>
                  </div>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section">
        <div className="maxContainer integrations-container">
          <h2 className="text-gradient">Available integrations</h2>
          <div className="slideWrap">
            <Slider {...sliderSettings}>
              {integrations.map((item, index) => (
                <div key={index} className="slide">
                  <img src={item.img} alt={item.alt} height="40px" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Why PostEx Section */}
      <section className="why-postex-section">
        <div className="maxContainer why-container">
          <h3 className="why-title">
            Why PostEx<span className="why-dot">.</span>
          </h3>
          <div className="why-wrap">
            <div className="statusContent">
              <div className="contentBox">
                <h3>PKR 25B+</h3>
                <p>Value of upfront payments made</p>
              </div>
              <div className="contentBox">
                <h3>25,000+</h3>
                <p>Happy & Growing merchants</p>
              </div>
              <div className="contentBox">
                <h3>92%</h3>
                <p>Delivery Success Rate</p>
              </div>
            </div>

            <div className="radialGraph">
              <canvas id="pie-chart" className="black-circle" width="326" height="326"></canvas>
              <div className="transaction-label">Logistic Market Share</div>
            </div>

            <div className="lineGraph">
              <canvas id="line-chart" width="480" height="300"></canvas>
              <div className="transaction-label">Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT CTA BAR */}
      <section className="cod-next-banner-section">
        <div className="cod-next-banner-container">
          <div className="cod-next-content">
            <h1 className="cod-title">
              Questions about Cash on Delivery?<br />
              Contact us for assistance today!
            </h1>
          </div>
          <div className="cod-next-arrow">
            <svg
              viewBox="0 0 59 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cod-next-arrow-icon"
            >
              <path
                d="M0.289062 82.8767L36.1657 47L0.289062 11.045L11.3341 0L58.3341 47L11.3341 94L0.289062 82.8767Z"
                fill="#00DF9A"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default COD;
