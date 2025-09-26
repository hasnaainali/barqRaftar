import React from 'react';
import './BusinessSuite.css';

function BusinessSuite() {
    return (
        <div className="business-suite">
            <main>
                <section className="hero-section">
                    <div className="container">
                        <h2 className="all-in-one-title">
                            All In One <span className="highlight-green">Business Suite</span>
                        </h2>
                        <p className="hero-subtitle">
                            Use our Business Suite for seamless day-to-day
                            expense management and transparent accounting.
                        </p>
                        <button className="btn-busines">More than 25,000+ Business</button>
                    </div>
                </section>

                <section className="access-section">
                    <div className="container-flex">
                        <div className="text-content">
                            <h2>Access Anytime, Anywhere</h2>
                            <p>
                                Manage your business on the go with our mobile app. Access your account anytime, anywhere, for ultimate convenience and control.
                            </p>
                        </div>
                        <div className="image-content overflow-hidden relative">
                            <img
                                src="/images/mobile.png"
                                alt="Mobile and Desktop interfaces"
                                className="mockup-img w-80 z-30"
                            />
                        </div>
                    </div>
                </section>

                <section className="complete-suite-section">
                    <div className="container-flex">
                        <div className="image-content">
                            <img src="/images/business-suite-mockup.png" alt="Business suite dashboard" className="mockup-img" />
                        </div>
                        <div className="text-content">
                            <h2>Complete Business Suite</h2>
                            <p>
                                Efficiently manage your business with a complete suite of integrated tools, giving you a 360-degree view and total control of your operations from a single place.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="features-section">
                    <div className="feature-items-grid">
                        <div className="feature-item card">
                            <h3 className="features-title">Features</h3>
                            <h4>Corporate Business Account</h4>
                            <p>Manage your corporate account on your fingertips with PostEx business suite.</p>
                        </div>

                        <div className="feature-item card">
                            <span className="feature-number">01</span>
                            <h4>Instant Payments</h4>
                            <p>Enabling e-commerce businesses to access COD payments in advance and instantaneously.</p>
                        </div>

                        <div className="feature-item card">
                            <span className="feature-number">02</span>
                            <h4>Vendor Management</h4>
                            <p>Simplify payment processes, track transactions, and manage vendor relationships seamlessly.</p>
                        </div>

                        <div className="feature-item card">
                            <span className="feature-number">03</span>
                            <h4>Automated Reports</h4>
                            <p>Get complete visibility on the performance of your business with an in-depth reporting module.</p>
                        </div>

                        <div className="feature-item card">
                            <span className="feature-number">04</span>
                            <h4>Upfront Payment</h4>
                            <p>Get instant capital with upfront payments on Cash on Delivery orders nationwide.</p>
                        </div>

                        <div className="feature-item card cta-item">
                            <h3 className="cta-heading">
                                Start your corporate account with PostEx.
                            </h3>
                            <button className="btn-sec">
                                Get Started
                            </button>
                        </div>
                    </div>
                </section>

                <section className="why-choose-us-section">
                    <div className="container-flex">
                        <div className="card">
                            <div className="card-header">
                                <img src="/images/feature1.svg" alt="Fast icon" className="icon" />
                                <h4 className="card-title">Fast</h4>
                            </div>
                            <p className="card-text">Empower your business with instant payments directly to your account, optimizing your cash flow.</p>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <img src="/images/feature2.svg" alt="Seamless icon" className="icon" />
                                <h4 className="card-title">Seamless</h4>
                            </div>
                            <p className="card-text">Don't put your business on hold while waiting for payments. Access your funds on the same day as delivery.</p>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <img src="/images/feature3.svg" alt="Transparent icon" className="icon" />
                                <h4 className="card-title">Transparent</h4>
                            </div>
                            <p className="card-text">Gain comprehensive visibility into your finances to prioritize growth and enhance the financial health of your business.</p>
                        </div>
                    </div>
                </section>

                <section className="pricing-banner-section">
                    <div className="pricing-banner-container">
                        <h1 className="pricing-banner-title">Fuel your business growth with transparent pricing</h1>
                        <button className="pricing-banner-btn">
                            <svg viewBox="0 0 59 94" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                                <path d="M0.289062 82.8767L36.1657 47L0.289062 11.045L11.3341 0L58.3341 47L11.3341 94L0.289062 82.8767Z" fill="#00DF9A"></path>
                            </svg>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default BusinessSuite;
