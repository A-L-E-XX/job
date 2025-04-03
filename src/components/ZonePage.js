import React from "react";
import { useParams } from "react-router-dom";
import "./Signup.css";

const ZonePage = () => {
  const { zone } = useParams();

  return (
    <div className="zone-page">
      <h1>Zone {zone}</h1>
      <p>
        Welcome to Zone {zone}. Here you can find all the members and activities
        happening in this zone.
      </p>
      {/* Placeholder for member details */}
      <div className="members">
        <p>Member details coming soon...</p>
      </div>
    </div>
  );
};

export default ZonePage;
