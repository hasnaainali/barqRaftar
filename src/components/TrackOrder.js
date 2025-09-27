import React from "react";
import "./TrackOrder.css";

function TrackOrder() {
  return (
    <div className="trackorder">
      <div className="trackorder-banner">
        <div className="overlay"></div>
        <img
          src={`${process.env.PUBLIC_URL}/images/postex-rider.png`}
          alt="PostEx Rider"
          className="rider-banner-img"
        />
      </div>

      <div className="tracking-box">
        <div className="tracking-left">
          <div className="heading">Enter Your Tracking Number</div>

          <div className="mobile-subtext">
            Enter up to 14 of your barqRaftar tracking numbers
          </div>

          <div className="description">
            Tracking results are generated using the latest information available
            about your shipment.
          </div>
        </div>

        <div className="tracking-right">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Tracking# "
              className="tracking-input"
            />
            <button className="track-btn">
              <img
                src={`${process.env.PUBLIC_URL}/images/track-icon.svg`}
                alt="Track"
                className="track-icon"
              />
              Track
            </button>
          </div>

          <div className="mobile-subtext">
            Tracking results are generated using the latest information available
            about your shipment.
          </div>

          <div className="description2">
            Sign up to track up to 14 of your barqRaftar tracking numbers.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackOrder;
