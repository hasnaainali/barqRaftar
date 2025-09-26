import React from "react";
import "../App.css";

function SignupForm() {
    return (
        <section className="signup">
            <h2 className="signup-subtitle">Sign Up</h2>
            <h1 className="signup-title">Create Your Account.</h1>

            <form className="form">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="form-group">
                    <label>Contact Number</label>
                    <input type="text" name="contactNumber" />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" />
                </div>
                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" name="companyName" />
                </div>

                <div className="form-group">
                    <label>Position</label>
                    <input type="text" name="position" />
                </div>
                <div className="form-group">
                    <label>Website URL</label>
                    <input type="url" name="websiteUrl" />
                </div>
            </form>


            <p className="terms">
                By continuing, you agree to the PostEx{" "}
                <a href="#">terms of service</a>
            </p>

            <button className="btn-submit">Submit</button>
        </section>
    );
}

export default SignupForm;
