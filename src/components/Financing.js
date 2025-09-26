import React from "react";
import "./Financing.css";

export default function Financing() {
    return (
        <main className="financing-page">
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">
                        <span className="hero-accent">Access Capital</span> On Your Terms
                    </h1>
                    <p className="hero-sub">
                        Grow your business with Sharia-compliant financing options.
                    </p>

                    <div className="hero-visual" aria-hidden="true">
                        <img
                            src="/images/business-account-banner.png"
                            alt="Business Account Banner"
                            className="hero-banner-img"
                        />
                        <img
                            src="/images/business-account-img.png"
                            alt="Business Account Layer"
                            className="hero-layer-img"
                        />
                    </div>
                </div>
            </section>

            <section className="unlock">
                <div className="container unlock-grid">
                    <div className="unlock-left">
                        <h2 className="unlock-title">Unlock Capital</h2>
                        <p className="unlock-text">
                            Convert your recurring revenue into instant capital with just one
                            click. Get the capital for your business without the hassle of
                            traditional financing.
                        </p>
                    </div>
                    <div className="unlock-right" aria-hidden="true">
                        <img
                            src="/images/instantPayout.png"
                            alt="Instant Payout Banner"
                            className="unlock-banner-img"
                        />
                    </div>
                </div>
            </section>

            <section className="stats">
                <div className="container stats-grid">
                    <div className="stat card">
                        <div className="stat-title">IMPACT ON ECOMMERCE</div>
                    </div>
                    <div className="stat card">
                        <div className="stat-number">8,000+</div>
                        <div className="stat-desc">Business Funded</div>
                    </div>
                    <div className="stat card">
                        <div className="stat-number">PKR 25B+</div>
                        <div className="stat-desc">Invested till date</div>
                    </div>
                    <div className="stat card">
                        <div className="stat-number">600+</div>
                        <div className="stat-desc">Cities Network</div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container feature">
                    <div className="feature-content">
                        <div className="kicker">REVENUE FINANCING</div>
                        <h3 className="feature-title">Instant, Transparent Payment</h3>
                        <p className="feature-text">
                            With PostEx Growth Capital, the payment process is simple,
                            transparent, and aligned with your cash flow.
                        </p>
                    </div>
                    <div className="feature-image">
                        <img
                            src="/images/mobile-revenue.png"
                            alt="Revenue Financing"
                            className="feature-img"
                        />
                    </div>
                </div>
            </section>

            <section className="features payment-feature">
                <div className="container feature">
                    <div className="feature-image">
                        <img
                            src="/images/graph.png"
                            alt="Instant Payment Transfer"
                            className="feature-img"
                        />
                    </div>
                    <div className="feature-content">
                        <div className="kicker payment-kicker">INSTANT PAYMENT TRANSFER</div>
                        <h3 className="feature-title payment-title">Flexible Payment Plan</h3>
                        <p className="feature-text payment-text">
                            Repay based on your monthly sales with flexible payment options.
                            Adjust payments to match your cash flow, ensuring ease and adaptability.
                        </p>
                    </div>
                </div>
            </section>

            <section className="non-equity-feature">
                <div className="container feature">
                    <div className="feature-content">
                        <div className="kicker">GROW WITHOUT BARRIERS</div>
                        <h3 className="feature-title">Non-Equity Capital</h3>
                        <p className="feature-text">
                            Have access to capital based on the percentage of your future sales
                            without giving up your equity and control.
                        </p>
                    </div>
                    <div className="feature-image">
                        <img
                            src="/images/NON_EQUITY_CAPITAL.png"
                            alt="Non-Equity Capital"
                            className="feature-img"
                        />
                    </div>
                </div>
            </section>

            <section className="cod-banner-section">
                <div className="cod-banner-container">
                    <div className="cod-content">
                        <h1 className="cod-title">
                            Questions about Cash on Delivery?<br />
                            Contact us for assistance today!
                        </h1>
                    </div>
                    <div className="cod-arrow">
                        <svg
                            viewBox="0 0 59 94"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="arrow-icon"
                        >
                            <path
                                d="M0.289062 82.8767L36.1657 47L0.289062 11.045L11.3341 0L58.3341 47L11.3341 94L0.289062 82.8767Z"
                                fill="#00DF9A"
                            />
                        </svg>
                    </div>
                </div>
            </section>
        </main>
    );
}
