import React from "react";

const SignUpCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "#323232",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          padding: "15px",
        }}
      >
        <h3>Stay up to date with what matters to you</h3>
      </div>
      <div
        style={{
          padding: "15px",
        }}
      >
        <p>
          Gain access to personalized content based on your interests by signing
          up today
        </p>
        <button
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#ffffff",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Sign up today
        </button>
      </div>
    </div>
  );
};

export default SignUpCard;
