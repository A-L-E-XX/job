import React, { useState, useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber, getAuth } from "firebase/auth";
import "./Login.css"; // Import your styling

const PhoneNumberForm = ({ onOTPReceived }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize reCAPTCHA
  useEffect(() => {
    if (window.recaptchaVerifier) return;
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("Captcha resolved", response);
        },
      },
      getAuth()
    );
  }, []);

  // Handle phone number input
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Handle OTP sending
  const handleSendOTP = async () => {
    setLoading(true);
    setError(""); // Reset error message
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(
        getAuth(),
        phoneNumber,
        appVerifier
      );
      setVerificationId(confirmationResult.verificationId);
      onOTPReceived(true); // Notify parent to change step (from phone to OTP form)
    } catch (error) {
      console.error("Error sending OTP", error);
      setError("Error sending OTP: " + error.message);
      setLoading(false);
    }
  };

  // Handle OTP input and verification
  const handleVerifyOTP = async () => {
    setLoading(true);
    setError(""); // Reset error message

    const credential = PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );

    try {
      await signInWithCredential(getAuth(), credential);
      setIsVerified(true);
      alert("OTP Verified! Proceeding with signup/login...");
    } catch (error) {
      console.error("Error verifying OTP", error);
      setError("Error verifying OTP: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!isVerified ? (
        <>
          <div id="recaptcha-container"></div>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
          <button
            onClick={handleSendOTP}
            disabled={loading || !phoneNumber}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <button
            onClick={handleVerifyOTP}
            disabled={loading || !verificationCode}
          >
            {loading ? "Verifying OTP..." : "Verify OTP"}
          </button>
        </>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PhoneNumberForm;
