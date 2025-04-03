import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";
import "./Profile.css";

const emojis = ["😀", "😎", "🎉", "🌟", "🔥", "🐱", "🦄", "🍕", "🚀"];

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [profilePic, setProfilePic] = useState("😀");

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("You have signed out!");
    } catch (error) {
      alert("Error signing out: " + error.message);
    }
  };

  if (!currentUser) {
    return <p>Please login or signup to view your profile.</p>;
  }

  return (
    <div className="profile-container">
      <h2>Welcome, {currentUser.email}</h2>
      <div>
        <h3>Your Profile Picture</h3>
        <div className="profile-picture">{profilePic}</div>
        <div className="emoji-selector">
          <h4>Select an Emoji</h4>
          {emojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => setProfilePic(emoji)}
              className="emoji-button"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleSignOut} className="sign-out-button">
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
