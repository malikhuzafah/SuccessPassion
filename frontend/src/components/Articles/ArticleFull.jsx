import React from "react";

const ArticleFull = ({ title, desc, img, link }) => {
  return (
    <a
      href={link}
      style={{
        textDecoration: "none",
        color: "#000000",
      }}
    >
      <div
        style={{
          height: "400px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#323232",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "50px",
          }}
        >
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </a>
  );
};

export default ArticleFull;
